import "./logo.css";

import MallWordmark from "./MallWordmark";
import Heartbeat from "./Heartbeat";
import Tagline from "./Tagline";

const Logo = () => {
    return (
        <div className="logo">

            <MallWordmark />

            <Heartbeat />

            <Tagline />

        </div>
    );
};

export default Logo;