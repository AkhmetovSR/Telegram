import s from "./Boost.module.css"
import Go_back from "../../resource/goback.png"
import {NavLink} from "react-router-dom";


function Boost() {
    return (
        <div className={s.Boost}>
            <NavLink to="/Matrix" className={s.NavBack}><img src={Go_back} className={s.Goback} alt={"goBack"}/></NavLink>
        </div>
    );
}

export default Boost;