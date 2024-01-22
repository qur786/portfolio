import Particles from "@tsparticles/react";
import styles from "./index.module.css";
import { MouseEventHandler, useContext } from "react";
import { MobileContext } from "../../context";

export interface IntroductionProps {
  isParticlesEngineLoaded: boolean;
  onViewWorkClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Introduction({
  isParticlesEngineLoaded,
  onViewWorkClick,
}: IntroductionProps): JSX.Element {
  const { isMobile } = useContext(MobileContext);
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
                value: isMobile === true ? 30 : 100,
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
      <div className="h-screen flex justify-center items-center flex-col gap-6 font-mono">
        <p className="text-5xl text-center">
          Hello, I'm <b className="text-red-600">Qurban</b>
        </p>
        <p className="text-5xl text-center">
          A <b className="text-green-600">MERN</b> stack developer.
        </p>
        <button
          className={`${styles.btn} shadow-inner shadow-red-100/100 rounded-md py-4 px-8 text-lg`}
          onClick={onViewWorkClick}
        >
          View my work &#x2193;
        </button>
      </div>
    </>
  );
}
