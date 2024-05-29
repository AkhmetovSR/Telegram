import s from "./Earn.module.css"
import Go_back from "../../resource/goback.png"
import {NavLink} from "react-router-dom";
import Earn1 from "../../resource/earn1.png"
import GreenCoin from "../../resource/greenCoin.png"


const EarnTask = [
    {im: Earn1, TaskText: 'Subscribe to channel', coinImg: GreenCoin, coins: '+1 500'},
    {im: Earn1, TaskText: 'Subscribe to channel', coinImg: GreenCoin, coins: '+1 500'},
    {im: Earn1, TaskText: 'Subscribe to channel', coinImg: GreenCoin, coins: '+1 500'}
]

function Earn() {

    const listEarn = EarnTask.map((earn) => (
    <div className={s.Task}>
        <div><img src={Earn1} className={s.ImgTask} alt="a"/></div>
        <div>{earn.TaskText}</div>
        <div><img src={GreenCoin} className={s.ImgCoin} alt="s"/></div>
    </div>
    ));

return (
    <div className={s.Earn}>
        <NavLink to="/Matrix" className={s.NavBack}><img src={Go_back}  alt={"goBack"} className={s.Goback}/></NavLink>
        <div className={s.Title}>Earn</div>
        <div className={s.Earns}>{listEarn}</div>
    </div>);
}


export default Earn;