import s from "./Options.module.css"
import Eran from "../../resource/Earn.png";
import Invite from '../../resource/Invite.png'
import Boost from '../../resource/Boost.png'
import Airdrop from '../../resource/Airdrop.png'
import {NavLink} from "react-router-dom";

function Options() {
    return (
        <div className={s.Option}>

            <NavLink to="/" className={s.First}>
                <div className={s.divImg}><img className={s.Earn} src={Eran} alt="mix"/></div>
                <div>Earn</div>
            </NavLink>

            <NavLink to="/invite" className={s.Second}>
                <div className={s.divImg}><img className={s.Earn} src={Invite} alt="mix"/></div>
                <div>invite</div>
            </NavLink>

            <div className={s.Third}>
                <div className={s.divImg}><img className={s.Earn} src={Boost} alt="mix"/></div>
                <div>Boost</div>
            </div>

            <div className={s.Fourth}>
                <div className={s.divImg}><img className={s.Earn} src={Airdrop} alt="mix"/></div>
                <div>Airdrop</div>
            </div>

        </div>
    );
}

export default Options;


//($env:HTTPS = "true") -and (npm start)