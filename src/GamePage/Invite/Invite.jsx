import s from "./Invite.module.css"
import Go_back from "../../resource/goback.png"
import {NavLink} from "react-router-dom";


function Invite() {
    return (
        <div className={s.Invite}>
            <NavLink to="/Matrix" className={s.NavBack}><img src={Go_back} className={s.Goback} alt={"goBack"}/></NavLink>
        </div>
    );
}

export default Invite;