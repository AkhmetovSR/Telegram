import s from  "./Claims.module.css"
import coin from "../../resource/greenCoin.png"

function Claims(props) {
    let newOrOldUser = props.newOrOldUser;
    console.log(props?.data)
    const seconds = Math.floor(Date.now() / 1000);
    const startTimes = props?.data[0]?.startTimes;
    const mineTime = props?.data[0]?.mineTime;
    const time = seconds - startTimes;
    console.log(time > mineTime)
    console.log(newOrOldUser)
    console.log(seconds)
    let fullClaims;
    if(newOrOldUser) fullClaims = 0;
    if(time > mineTime) fullClaims = props.data[0]?.claims + props.data[0]?.profit;
    if(time < mineTime) fullClaims = props.data[0]?.claims;

    return (
        <div className={s.Claims}>
            <div className={s.UserName}>{props?.login}</div>
            <div className={s.CoinClaim}>
                <div className={s.Coin}><img src={coin} className={s.imgCoin} alt="alt"/></div>
                <div className={s.Claim}>{fullClaims}</div>
            </div>
        </div>
    );
}

export default Claims;

// https://t.me/haMster_kombat_bot/start?startapp=kentId2128956005
// https://t.me/React_WebApp_Bot/app?startapp=username
// https://t.me/React_WebApp_Bot/RWTG?startapp=AhSR28
