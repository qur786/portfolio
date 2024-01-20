import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

export function App(): JSX.Element {
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <main>
      <Particles
        id="tsparticles"
        particlesLoaded={async (c) => console.log(c)}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
              },
              resize: {
                enable: true,
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
      <div className="h-screen flex justify-center items-center flex-col">
        <p className="text-5xl">
          Hello, I'm <b className="text-red-600">Qurban</b>
        </p>
        <p className="text-5xl">
          A <b className="text-green-600">MERN</b> stack developer.
        </p>
      </div>
    </main>
  );
}
