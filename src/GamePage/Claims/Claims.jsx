import s from  "./Claims.module.css"
import coin from "../../resource/greenCoin.png"

function Claims() {

    return (
        <div className={s.Claims}>
            <div className={s.UserName}></div>
            <div className={s.CoinClaim}>
                <div className={s.Coin}><img src={coin} className={s.imgCoin} alt="alt"/></div>
                <div className={s.Claim}></div>
            </div>
        </div>
    );
}

export default Claims;