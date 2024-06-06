import s from "./Earn.module.css"
import Earn1 from "../../resource/earn1.png"
import GreenCoin from "../../resource/greenCoin.png"
import Rocket from "../../resource/rocket.png"
import BoxPresent from "../../resource/boxPresent.png"
import Firework from "../../resource/Firework.png"
import Present2 from "../../resource/present2.png"

const EarnTask = [
    {id:1, im: Earn1, TaskText: 'Subscribe to channel', coinImg: GreenCoin, coins: '+1 500'},
    {id:2, im: Rocket, TaskText: 'Upgrade mining speed', coinImg: GreenCoin, coins: '+1 500'},
    {id:3, im: BoxPresent, TaskText: 'Invite 1 a frens', coinImg: GreenCoin, coins: '+1 500'},
    {id:4, im: Firework, TaskText: 'Subscribe to channel', coinImg: GreenCoin, coins: '+1 500'},
    {id:5, im: Present2, TaskText: 'Invite 3 frens', coinImg: GreenCoin, coins: '+1 500'}
]

function Earn() {

    const listEarn = EarnTask.map((earn) => (
        <div className={s.Task}>
            <div className={s.DivImgTask}><img src={earn.im} className={s.ImgTask} alt="a"/></div>
            <div className={s.BodyEran}>
                <div className={s.TaskText}>{earn.TaskText}</div>
                <div className={s.CoinQuantity}>
                    <div className={s.divCoin}><img src={GreenCoin} className={s.ImgCoin} alt="s"/></div>
                    <div className={s.divUpCoin}>{earn.coins}</div>
                </div>
            </div>
            <div className={s.divBtnClaim}><button className={s.BtnClaim}>Claim</button></div>
        </div>
    ));

    return (
        <div className={s.Earn}>
            <div className={s.Title}>Earn</div>
            <div className={s.Earns}>{listEarn}</div>
        </div>);
}

export default Earn;