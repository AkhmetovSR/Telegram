import s from  "./Claims.module.css"
import coin from "../../resource/greenCoin.png"

function Claims(props) {
    return (
        <div className={s.Claims}>
            <div className={s.UserName}>{props?.login}</div>
            <div className={s.CoinClaim}>
                <div className={s.Coin}><img src={coin} className={s.imgCoin} alt="alt"/></div>
                <div className={s.Claim}>{props?.data[0]?.claims}</div>
            </div>
        </div>
    );
}
export default Claims;