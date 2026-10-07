export function PageTitle({ title, id }: { title: string; id?: string }) {
  return (
    <h1 id={id} className="page-title">
      <span>{title}</span>
    </h1>
  );
}
