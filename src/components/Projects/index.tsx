import { Project } from "../Project";
import CurrencyConverterImage from "./currency-converter.png";
import PongImage from "./pong.png";
import TicTacToeImage from "./tic-tac-toe.jpg";

export function Projects(): JSX.Element {
  return (
    <div id="projects" className="h-screen px-4 py-8 ">
      <h2 className="text-3xl text-primary font-bold">Projects</h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-20 py-6 justify-items-center">
        <Project
          image={CurrencyConverterImage}
          title="Currency Converter Mobile App"
          githubLink="https://github.com/qur786/react-native-currency-converter"
          stacks={["react native", "typescript", "sqlite", "react"]}
        />
        <Project
          image={PongImage}
          title="MultiPlayer Pong Game"
          githubLink="https://github.com/qur786/multiroom-pong-game"
          deployedLink="https://multiroom-pong-game.onrender.com/"
          stacks={["socket.io", "javascript", "canvas-api", "express.js"]}
        />
        <Project
          image={TicTacToeImage}
          imageClipPosition="0px_30%"
          title="Tic Tac Toe Mobile Game"
          githubLink="https://github.com/qur786/tic-tac-toe-mobile-app"
          stacks={["react native", "typescript", "icons", "react"]}
        />
      </div>
    </div>
  );
}
