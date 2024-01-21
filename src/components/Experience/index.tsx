import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { JobIcon } from "../../Icons/job";
import { ExperienceItem } from "../ExperienceItem";

export function Experience(): JSX.Element {
  return (
    <div id="skills" className="h-screen px-4 py-8 flex flex-col gap-8">
      <h2 className="text-3xl text-[#FF020A] font-bold">Experience</h2>
      <VerticalTimeline>
        <ExperienceItem
          date="Apr 2023 - Sept 2023"
          icon={<JobIcon />}
          location="Gurugram, India"
          role="Software Development Engineer 1"
          work={[
            "Engineered diverse, innovative projects, spanning single and multi-page React applications, CLI tools, web applications, and crossplatform Electron apps strategically addressing complex challenges and delivering effective solutions.",
            "Optimized system reliability and cut bugs by 30% via rigorous Jest and Playwright testing.",
            "Streamlined onboarding with documented workflows, reducing time by 40% for new hires.",
            "Revamped core SaaS product's legacy code, boosting system functionality by 30%.",
          ]}
        />
        <ExperienceItem
          date="Jan 2022 - Mar 2023"
          icon={<JobIcon />}
          location="Gurugram, India"
          role="Front End Developer"
          work={[
            "Engineered diverse projects: web apps, single-page apps, and Electron apps. Innovations include tracking user activity with Python and Electron, and real-time IoT tracking with AWS IoT, Geofencing, Lambda, and SNS",
            "Improved website performance by optimizing Lighthouse scores, achieving a 90+% score in Lighthouse.",
            "Enhanced UI with mobile-responsive components, charts, and forms in React. Achieved a 30% improvement in UI responsiveness.",
            "Developed and debugged the company's core product, API. Improving reliability by 10%.",
          ]}
        />
        <VerticalTimelineElement icon={<JobIcon />} />
      </VerticalTimeline>
    </div>
  );
}
