import { skillGroups } from "@/data/skills";
import { Section } from "@/components/ui/section";
import { Icon } from "@/components/ui/icon";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills & Technologies"
      description="A toolkit for turning ideas into applications."
    >
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.name} className="skill-group">
            <h3>
              <Icon name={group.icon} />
              {group.name}
            </h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
