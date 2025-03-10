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
    <div id="experience" className="px-0 py-8 flex flex-col gap-8">
      <h2 className="text-3xl text-primary font-bold">Experience</h2>
      <VerticalTimeline lineColor="#FF020A">
        <ExperienceItem
          theme={theme}
          date="Dec 2024 - Present"
          icon={<JobIcon />}
          location={{ city: "Bengaluru", country: "India" }}
          company="Autodesk India Pvt Ltd"
          role="Software Development Engineer 2"
          work={[
            "Created API endpoints to get Azure Gallery Images.",
            "Fixed UI and API bugs.",
            "Added test cases to increase coverage.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="July 2024 - Nov 2024"
          icon={<JobIcon />}
          location={{ city: "Chennai", country: "India" }}
          company="Predigle India Pvt Ltd"
          role="Software Engineer - L3"
          work={[
            "Replaced Firebase with Keycloak authentication end to end across projects.",
            "Fixed crucial bugs and modularized code enhancing code readability and maintainability of the AI bot rule generation web app.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="Apr 2023 - Sept 2023"
          icon={<JobIcon />}
          location={{ city: "Gurugram", country: "India" }}
          company="Manufac Analytics Pvt Ltd"
          role="Software Development Engineer 1"
          work={[
            "Engineered diverse projects, including single and multi-page React applications, React component Cli extractor, web applications, and cross-platform Electron apps.",
            "Added rigorous Jest and Playwright testing.",
            "Revamped the company's core app code with AWS and Mantine UI, resulting in a notable 20% boost in system functionality and a 25% reduction in code management effort.",
            "Guided team members to enhance coding practices, and ensured strict adherence to company standards.",
          ]}
        />
        <ExperienceItem
          theme={theme}
          date="July 2021 - Mar 2023"
          icon={<JobIcon />}
          location={{ city: "Gurugram", country: "India" }}
          company="Manufac Analytics Pvt Ltd"
          role="Front End Developer"
          work={[
            "Notable innovations include user activity tracking with Python and Electron, Bluetooth data reading via Web API, and real-time IoT tracking with AWS IoT, Geofencing, Lambda, and SNS.",
            "Added charts and UI components to the company's core app, resulting in 5% newly added functionality",
            "Elevated UI standards through mobile-responsive components, charts, and forms in React (using Formik, D3.js, ECharts, ReactTable, and MUI), resulting in a 30% improvement in UI responsiveness and heightened user engagement.",
            "Collaborated effectively on the integration of the PayPal payment API into the company's web app.",
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
            "Analyzed issues and led the development of a storage management web app in PHP, delivering an impressive 20% boost in productivity over the previous system.",
            "Designed and developed the backend of the app, and added 60% of the backend code.",
            "Documented the whole project.",
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
