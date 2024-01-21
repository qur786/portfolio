import { DevIcon } from "../../Icons/dev-icon";

export function Skills(): JSX.Element {
  return (
    <div className="h-screen px-4 py-8 flex flex-col gap-8">
      <h2 className="text-3xl text-[#FF020A] font-bold">My Skills</h2>
      <div className="grid grid-cols-8 gap-4">
        <DevIcon name="devicon-mongodb-plain-wordmark" />
        <DevIcon name="devicon-express-original-wordmark" />
        <DevIcon name="devicon-react-original-wordmark" />
        <DevIcon name="devicon-nodejs-plain-wordmark" />
      </div>
    </div>
  );
}
