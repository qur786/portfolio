import { CompleteIcon } from "../../Icons/complete";
import { ExperienceItem } from "../ExperienceItem";
import { JobIcon } from "../../Icons/job";
import type { Theme } from "../../context/utils";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

interface ExperienceProps {
  theme?: Theme;
}

export function Experience({ theme }: ExperienceProps): JSX.Element {
  return (
    <div id="skills" className="px-0 py-8 flex flex-col gap-8">
      <h2 className="text-3xl text-primary font-bold">Experience</h2>
      <VerticalTimeline lineColor="#FF020A">
        <ExperienceItem
          theme={theme}
          date="Apr 2023 - Sept 2023"
          icon={<JobIcon />}
          location={{ city: "Gurugram", country: "India" }}
          company="Manufac Analytics Pvt Ltd"
          role="Software Development Engineer 1"
          work={[
            "Engineered diverse, innovative projects, spanning single and multi-page React applications, CLI tools, web applications, and crossplatform Electron apps strategically addressing complex challenges and delivering effective solutions.",
            "Optimized system reliability and cut bugs by 30% via rigorous Jest and Playwright testing.",
            "Streamlined onboarding with documented workflows, reducing time by 40% for new hires.",
            "Revamped core SaaS product's legacy code, boosting system functionality by 30%.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="Jan 2022 - Mar 2023"
          icon={<JobIcon />}
          location={{ city: "Gurugram", country: "India" }}
          company="Manufac Analytics Pvt Ltd"
          role="Front End Developer"
          work={[
            "Engineered diverse projects: web apps, single-page apps, and Electron apps. Innovations include tracking user activity with Python and Electron, and real-time IoT tracking with AWS IoT, Geofencing, Lambda, and SNS.",
            "Improved website performance by optimizing Lighthouse scores, achieving a 90+% score in Lighthouse.",
            "Enhanced UI with mobile-responsive components, charts, and forms in React. Achieved a 30% improvement in UI responsiveness.",
            "Developed and debugged the company's core product, API. Improving reliability by 10%.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="July 2021 - Jan 2022"
          icon={<JobIcon />}
          location={{ city: "Gurugram", country: "India" }}
          company="Manufac Analytics Pvt Ltd"
          role="Front End Developer Intern"
          work={[
            "Spearheaded front-end tasks using React, leading to a 15% improvement in UI enhancements in the company's core SaaS product.",
            "Helped team in API integration in the Company's web app to bring the new features. Improving app functionality by 20%.",
            "Collaborated with team to integrate PayPal payment API in the company's web app.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="Feb 2021 - Apr 2021"
          icon={<JobIcon />}
          location={{ city: "Jamshedpur", country: "India" }}
          company="Adityapur Auto Cluster"
          role="Web Developer Intern"
          work={[
            "Analyzed issues and collaborated with teams to create a storage management web app in PHP. Achieved a 40% boost in productivity compared to the previous system.",
            "Completed research, compiled data, and produced timely reports.",
          ]}
        />
        <VerticalTimelineElement
          icon={<CompleteIcon />}
          iconClassName="bg-white dark:bg-[#222222] shadow-experience-icon-border-success"
        />
      </VerticalTimeline>
    </div>
  );
}
