import Profile from "./square-profile.ico";

export function About(): JSX.Element {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col justify-center items-center md:items-start md:h-screen pt-20 pb-10"
    >
      <img
        src={Profile}
        alt="Profile"
        className="bg-contain w-48 h-48 relative md:left-16 md:-top-12 top-16 rounded-xl border-[#FF020A] border-2"
      />
      <div className="rounded-lg md:pl-20 md:pr-10 pb-6 md:pt-6 pt-16 px-4 border-[#FF020A] border-2">
        <h2 className="text-3xl text-[#FF020A] font-bold py-2 md:text-start text-center">
          About me
        </h2>
        <div className="text-lg">
          Hello there! I'm Qurban, a passionate individual whose love for
          technology blossomed after my high school journey.
          <br />
          <br />
          My academic foundation set the stage, but hands-on experience ignited
          my passion. In the last few years, I've specialized in web
          development, focusing on the MERN stack, a perfect match for my
          creative and problem-solving mindset.
          <br />
          <br />
          In my dynamic two-year journey in web development, I've worked on
          diverse projects, honing my skills from crafting seamless user
          interfaces to implementing robust backend systems. Involved in every
          stage of the development lifecycle, I've gained valuable insights
          along the way.
        </div>
      </div>
    </div>
  );
}
