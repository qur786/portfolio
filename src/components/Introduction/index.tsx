import Particles from "@tsparticles/react";

interface IntroductionProps {
  isParticlesEngineLoaded: boolean;
}

export function Introduction({
  isParticlesEngineLoaded,
}: IntroductionProps): JSX.Element {
  return (
    <>
      {isParticlesEngineLoaded === true ? (
        <Particles
          id="tsparticles"
          particlesLoaded={async (c) => console.log(c)}
          options={{
            fullScreen: false, // To only show particles for thr intro
            style: {
              height: "100vh",
              position: "absolute",
            }, // To position the particles as absolute to show particles in the background of the intro
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "grab",
                },
                resize: {
                  enable: true,
                },
              },
              modes: {
                grab: {
                  distance: 250,
                  opacity: 1,
                },
              },
            },
            particles: {
              color: {
                value: "#E71C23",
              },
              links: {
                color: "#B83227",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                value: 200,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      ) : undefined}
      <div className="h-screen flex justify-center items-center flex-col">
        <p className="text-5xl">
          Hello, I'm <b className="text-red-600">Qurban</b>
        </p>
        <p className="text-5xl">
          A <b className="text-green-600">MERN</b> stack developer.
        </p>
      </div>
    </>
  );
}
