import s from "./Options.module.css"
import Eran from "../../resource/Earn1.png";
import Frens from '../../resource/frens1.png'
import Boost from '../../resource/Boost.png'
import Airdrop from '../../resource/Airdrop1.png'
import Home from '../../resource/home1.png'
import {NavLink} from "react-router-dom";

const tg = window.Telegram.WebApp;

function Options() {
    return (
        <div className={s.Option} id="option">
            <NavLink to="/app1/GamePage" className={s.Home}>
                <div className={s.divImg}><img className={s.Earn} src={Home} alt="mix"/></div>
                <div className={s.Text}>Home</div>
            </NavLink>

            <NavLink to="/app1/Earn" className={s.First}>
                <div className={s.divImg}><img className={s.Earn} src={Eran} alt="mix"/></div>
                <div className={s.Text}>Earn</div>
            </NavLink>

            <NavLink to="/app1/invite" className={s.Second}>
                <div className={s.divImg}><img className={s.Earn} src={Frens} alt="mix"/></div>
                <div className={s.Text}>Frens</div>
            </NavLink>

            {/*<NavLink to="/app1/Boost" className={s.Third}>*/}
            {/*    <div className={s.divImg}><img className={s.Earn} src={Boost} alt="mix"/></div>*/}
            {/*    <div className={s.Text}>Boost</div>*/}
            {/*</NavLink>*/}

            <NavLink to="/app1/airDrop"  className={s.Fourth}>
                <div className={s.divImg}><img className={s.Earn} src={Airdrop} alt="mix"/></div>
                <div className={s.Text}>Airdrop</div>
            </NavLink>
        </div>
    );
}

export default Options;


//($env:HTTPS = "true") -and (npm start)

//02dd7e