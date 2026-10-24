import json
from pathlib import Path
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.lib.enums import TA_LEFT
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
data = json.loads((ROOT / 'tmp/pdfs/cv.json').read_text())
sections = {s['id']: s for s in data['cvSections']}
OUT = ROOT / 'output/pdf/Kasra_Janesar_CV_2026_Two_Page.pdf'
W, H = 595.276, 841.89
M = 43
INK = colors.HexColor('#182837')
ACCENT = colors.HexColor('#196278')
MUTED = colors.HexColor('#53616B')
c = canvas.Canvas(str(OUT), pagesize=(W,H))
c.setTitle('Kasra Janesar | Curriculum Vitae')
c.setAuthor('Kasra Janesar')
y = H-M

def p(text, size=9.5, leading=13, color=INK, font='Helvetica', indent=0, after=4):
    global y
    st = ParagraphStyle('body', fontName=font, fontSize=size, leading=leading,
                        textColor=color, leftIndent=indent)
    para = Paragraph(text, st)
    _, h = para.wrap(W-2*M, H)
    para.drawOn(c, M, y-h)
    y -= h+after

def section(label):
    global y
    y -= 9
    p(label.upper(), 9.3, 12, ACCENT, 'Helvetica-Bold', after=5)
    c.setStrokeColor(colors.HexColor('#D6E1E5'))
    c.setLineWidth(.5)
    c.line(M, y+2, W-M, y+2)
    y -= 5

def entry(e, project=False):
    global y
    title = escape(e['title'])
    if e.get('subtitle'): title += ' <font name="Helvetica">| '+escape(e['subtitle'])+'</font>'
    p(title, 10, 13, font='Helvetica-Bold', after=2)
    meta = ' | '.join(e[k] for k in ['location','period'] if e.get(k))
    if meta: p(escape(meta), 8.8, 11, MUTED, after=4)
    if e.get('technologies'): p(escape(e['technologies']), 8.6, 11, ACCENT, after=4)
    for line in e.get('paragraphs',[]): p(escape(line), after=3)
    for line in e.get('bullets',[]): p('&#8226; '+escape(line), indent=7, after=3)
    if e.get('link'):
        a=e['link']; p(f'<link href="{a["href"]}" color="#196278">{escape(a["label"])}</link>', 8.5, 11, after=3)
    y -= 5

def footer(page):
    assert y > 43, f'Page {page} overflows: {y}'
    c.setStrokeColor(colors.HexColor('#D6E1E5'))
    c.line(M,34,W-M,34)
    c.setFont('Helvetica',8)
    c.setFillColor(MUTED)
    c.drawString(M,22,'Kasra Janesar')
    c.drawRightString(W-M,22,f'{page} / 2')
    print(f'Page {page}: content ends at {y:.1f} pt')

p('KASRA JANESAR', 26, 30, INK, 'Helvetica-Bold', after=6)
p('Melbourne, Australia  |  <link href="mailto:kasrajanesar@gmail.com">kasrajanesar@gmail.com</link>',9,12,after=3)
p('<link href="https://github.com/Kasraw11">GitHub: github.com/Kasraw11</link>  |  <link href="https://www.linkedin.com/in/kasra-janesar-253630376">LinkedIn: Kasra Janesar</link>',9,12,after=2)
section('Profile')
for text in sections['profile']['paragraphs']: p(escape(text))
p('<b>Interests:</b> Software development, full-stack development and cloud technologies.',9.5,13)
section('Technical skills')
for group in sections['technical-skills']['groups']:
    p('<b>'+escape(group['label'])+':</b> '+escape(group['value']),9.3,12,after=3)
section('Work experience')
for e in sections['work-experience']['entries']: entry(e)
section('Education')
for e in sections['education']['entries']:
    # Display the university and place as metadata, with space for the date.
    e=dict(e); e['location']=e.pop('subtitle')+' | '+e['location']
    entry(e)
footer(1)
c.showPage(); y=H-M
p('PROJECTS',19,24,INK,'Helvetica-Bold',after=5)
p('Full-stack development, system design and cloud technologies',9.3,13,MUTED,after=10)
for e in sections['projects']['entries'][:4]: entry(e,True)
section('Additional projects')
for e in sections['projects']['entries'][4:]:
    p('<b>'+escape(e['title'])+'</b> | '+escape(e['technologies']),9.4,12,after=2)
    for line in e['bullets']: p(escape(line),9.2,12,after=6)
section('Professional strengths')
p(' / '.join(sections['soft-skills']['items']),9.2,12,after=3)
section('Languages')
p('English: IELTS Overall 7  |  Persian: Native',9.2,12)
footer(2)
c.save()
r=PdfReader(str(OUT))
assert len(r.pages)==2
for page in r.pages:
    assert page.extract_text().strip()
print(OUT)
