import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactNode } from "react";
import { CompanyIcon } from "../../Icons/company";
import { LocationIcon } from "../../Icons/location";

interface ExperienceItemProps {
  date: string;
  icon: ReactNode;
  role: string;
  location: {
    city: string;
    country: string;
  };
  work: string[];
  company: string;
}

export function ExperienceItem({
  date,
  icon,
  role,
  location: { city, country },
  work,
  company,
}: ExperienceItemProps): JSX.Element {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#222222" }}
      contentArrowStyle={{ borderRight: "7px solid #222222" }}
      date={date}
      iconStyle={{
        background: "#222222",
        boxShadow:
          "0 0 0 4px #FF020A, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)", // Icon container outer border
      }}
      icon={icon}
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{role}</h3>
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <div className="flex flex-row md:gap-x-0 gap-x-1 items-center">
            <CompanyIcon className="h-4" />
            <h4 className="text-md py-2 text-gray-200 font-light">{company}</h4>
          </div>
          <div className="flex flex-row md:gap-x-0 gap-x-1 items-center md:text-right text-left">
            <LocationIcon className="h-4" />
            <h4 className="text-sm py-2 font-light text-gray-300">
              {city}, {country}
            </h4>
          </div>
        </div>
        <ul className="list-disc px-4">
          {work.map((ele) => (
            <li key={ele}>{ele}</li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}
