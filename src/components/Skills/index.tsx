import { DevIcon } from "../../Icons/dev-icon";

export function Skills(): JSX.Element {
  return (
    <div className="h-screen px-4 py-8 flex flex-col gap-8">
      <h2 className="text-3xl text-[#FF020A] font-bold">My Skills</h2>
      <div className="grid grid-cols-8 gap-4">
        <DevIcon name="devicon-mongodb-plain-wordmark" />
        <DevIcon name="devicon-express-original-wordmark" colored={false} />
        <DevIcon name="devicon-react-original-wordmark" />
        <DevIcon name="devicon-nodejs-plain-wordmark" />
        <DevIcon name="devicon-redux-original" />
        <DevIcon name="devicon-nextjs-plain-wordmark" colored={false} />
        <DevIcon name="devicon-html5-plain-wordmark" />
        <DevIcon name="devicon-css3-plain-wordmark" />
        <DevIcon name="devicon-tailwindcss-original-wordmark" />
        <DevIcon name="devicon-sass-original" />
        <DevIcon name="devicon-javascript-plain" />
        <DevIcon name="devicon-typescript-plain" />
        <DevIcon name="devicon-materialui-plain" />
        <DevIcon name="devicon-d3js-plain" />
        <DevIcon name="devicon-graphql-plain-wordmark" />
        <DevIcon name="devicon-socketio-original-wordmark" colored={false} />
      </div>
    </div>
  );
}
