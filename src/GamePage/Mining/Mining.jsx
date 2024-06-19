import s from "./Mining.module.css"
import {useEffect, useState} from "react";

function Mining(props) {
    let data = props?.data[0]
    let now = Math.floor(Date.now() / 1000);
    const profit = data.profit;
    const startTimes = data?.startTimes;
    const mineTime = data?.mineTime;
    let mSec = profit / mineTime;
    let tLate = now - startTimes

    let M = Math.round(mSec * tLate)

    const [mine, setMine] = useState(M)
    useEffect(() => {
        if (mine <= profit) {
            const timer = setInterval(() => {setMine(mine + mSec)}, 1000)
            return () => clearInterval(timer)
        }
        if (mine > profit || mine === profit) window.location.replace('/')
    }, [mine])

    return (
        <div className={s.Mining}>
            <div className={s.Mine}>{Math.round(mine)}</div>
            <div className={s.MineProgress}>
                <progress max={profit} value={mine} className={s.Progress}></progress>
            </div>
        </div>
    );
}

export default Mining;