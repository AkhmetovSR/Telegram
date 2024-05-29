import s from "./Options.module.css"
import Eran from "../../resource/Earn.png";
import Invite from '../../resource/Invite.png'
import Boost from '../../resource/Boost.png'
import Airdrop from '../../resource/Airdrop.png'
import {NavLink} from "react-router-dom";
import o from "./Options.module.css";


// window.addEventListener("DOMContentLoaded", () => {
//     if (window.location == "https://192.168.1.106:3000/") {
//         alert(document.getElementById("option"))
//         document.getElementById("option").setAttribute('display', 'none')
//     }
// })


function Options() {
    return (
        <div className={s.Option} id="option">

            <NavLink to="/Earn" className={s.First}>
                <div className={s.divImg}><img className={s.Earn} src={Eran} alt="mix"/></div>
                <div className={s.Text}>Earn</div>
            </NavLink>

            <NavLink to="/invite" className={s.Second}>
                <div className={s.divImg}><img className={s.Earn} src={Invite} alt="mix"/></div>
                <div className={s.Text}>invite</div>
            </NavLink>

            <NavLink to="/Boost" className={s.Third}>
                <div className={s.divImg}><img className={s.Earn} src={Boost} alt="mix"/></div>
                <div className={s.Text}>Boost</div>
            </NavLink>

            <div className={s.Fourth}>
                <div className={s.divImg}><img className={s.Earn} src={Airdrop} alt="mix"/></div>
                <div className={s.Text}>Airdrop</div>
            </div>

        </div>
    );
}

export default Options;


//($env:HTTPS = "true") -and (npm start)