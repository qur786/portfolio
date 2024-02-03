import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ReactNode } from "react";
import { CompanyIcon } from "../../Icons/company";
import { LocationIcon } from "../../Icons/location";
import type { Theme } from "../../context/utils";

interface Location {
  city: string;
  country: string;
}

interface ExperienceItemProps {
  date: string;
  icon: ReactNode;
  role: string;
  location: Location;
  work: string[];
  company: string;
  theme?: Theme;
}

export function ExperienceItem({
  date,
  icon,
  role,
  location: { city, country },
  work,
  company,
  theme,
}: ExperienceItemProps): JSX.Element {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: theme === "dark" ? "#2C2C2C" : "white" }}
      contentArrowStyle={{
        borderRight: theme === "dark" ? "7px solid #2C2C2C" : "7px solid white",
      }}
      date={date}
      dateClassName="dark:text-white"
      iconClassName="bg-white dark:bg-[#222222] dark:fill-white fill-[#CECECE] shadow-experience-icon-border"
      icon={icon}
      className="drop-shadow-2xl dark:shadow-black-shadow"
    >
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold md:text-start text-center">{role}</h3>
        <div className="flex md:flex-row flex-col justify-between md:items-center">
          <div className="flex flex-row md:gap-x-0 gap-x-1 items-center">
            <CompanyIcon className="h-4 fill-[#218F76]" />
            <h4 className="md:text-sm text-xs py-2 font-light">{company}</h4>
          </div>
          <div className="flex flex-row md:gap-x-0 gap-x-1 items-center md:text-right text-left">
            <LocationIcon className="h-4 fill-[#EA4335]" />
            <h4 className="md:text-sm text-xs py-2 font-light">
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
