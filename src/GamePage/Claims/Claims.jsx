import s from  "./Claims.module.css"
import coin from "../../resource/greenCoin.png"

function Claims(props) {
    console.log(props)
    return (
        <div className={s.Claims}>
            <div className={s.UserName}>{props.data?.login}</div>
            <div className={s.CoinClaim}>
                <div className={s.Coin}><img src={coin} className={s.imgCoin} alt="alt"/></div>
                <div className={s.Claim}>{props.data?.claims}</div>
            </div>
        </div>
    );
}

export default Claims;