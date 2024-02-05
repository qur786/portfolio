import Particles from "@tsparticles/react";

interface ParticlesGraphProps {
  isParticlesEngineLoaded: boolean;
  isMobile: boolean;
}

export function ParticlesGraph({
  isParticlesEngineLoaded,
  isMobile,
}: ParticlesGraphProps): JSX.Element {
  return isParticlesEngineLoaded === true ? (
    <Particles
      id="tsparticles"
      particlesLoaded={async (c) => console.log(c)}
      options={{
        style: {
          height: "100vh",
          position: "absolute",
        }, // To position the particles as absolute to show particles in the background of the intro
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.5,
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
            speed: 1,
            straight: false,
          },
          number: {
            value: isMobile === true ? 50 : 100,
          },
          opacity: {
            value: 0.7,
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
  ) : (
    <></>
  );
}
