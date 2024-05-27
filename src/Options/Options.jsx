import "./Options.css"
import Eran from "../resource/Earn.png";
import Invite from '../resource/Invite.png'
import Boost from '../resource/Boost.png'
import Airdrop from '../resource/Airdrop.png'
import {NavLink} from "react-router-dom";

function Options() {
    return (
        <div className={"Option"}>
            <NavLink to="/main" className={"First"}>
                <div><img className={"Earn"} src={Eran} alt="mix"/></div>
                <div>Earn</div>
            </NavLink>
            <NavLink to="/invite" className={"Second"}>
                <div ><img className={"Earn"} src={Invite} alt="mix"/></div>
                <div>invite</div>
            </NavLink>
            <div className={"Third"}>
                <div><img className={"Earn"} src={Boost} alt="mix"/></div>
                <div>Boost</div>
            </div>
            <div className={"Fourth"}>
                <div><img className={"Earn"} src={Airdrop} alt="mix"/></div>
                <div>Airdrop</div>
            </div>
        </div>
    );
}

export default Options;


//($env:HTTPS = "true") -and (npm start)