import CurrencyConverterImage from "./currency-converter.png";
import PongImage from "./pong.png";
import { Project } from "../Project";
import RhythmiQImage from "./rhythmiq.png";
import TicTacToeImage from "./tic-tac-toe.png";
import { Zoom } from "react-awesome-reveal";

export function Projects(): JSX.Element {
  return (
    <div id="projects" className="min-h-screen px-4 py-8">
      <h2 className="text-3xl text-primary font-bold">Projects</h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-20 py-6 justify-items-center">
        <Zoom cascade damping={0.5} triggerOnce>
          <Project
            image={CurrencyConverterImage}
            title="Currency Converter Mobile App"
            githubLink="https://github.com/qur786/react-native-currency-converter"
            stacks={["react native", "react", "typescript", "sqlite"]}
          />
          <Project
            image={PongImage}
            title="MultiPlayer Pong Game"
            githubLink="https://github.com/qur786/multiroom-pong-game"
            deployedLink="https://multiroom-pong-game.onrender.com/"
            stacks={["socket.io", "express.js", "javascript", "canvas-api"]}
          />
          <Project
            image={TicTacToeImage}
            title="Tic Tac Toe Mobile Game"
            githubLink="https://github.com/qur786/tic-tac-toe-mobile-app"
            stacks={["react native", "react", "typescript", "icons"]}
          />
          <Project
            image={RhythmiQImage}
            title="RhythmiQ - Music Player"
            githubLink="https://github.com/qur786/rhythmiq"
            stacks={[
              "react native",
              "react",
              "typescript",
              "icons",
              "react-native-track-player",
            ]}
          />
        </Zoom>
      </div>
    </div>
  );
}
