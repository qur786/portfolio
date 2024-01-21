import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactNode } from "react";

interface ExperienceItemProps {
  date: string;
  icon: ReactNode;
  role: string;
  location: string;
  work: string[];
}

export function ExperienceItem({
  date,
  icon,
  role,
  location,
  work,
}: ExperienceItemProps): JSX.Element {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#222222" }}
      contentArrowStyle={{ borderRight: "7px solid #222222" }}
      date={date}
      iconStyle={{ background: "#222222" }}
      icon={icon}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{role}</h3>
        <h4 className="text-md font-[500]">{location}</h4>
        <ul className="list-disc">
          {work.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}
