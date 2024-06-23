import s from "./Invite.module.css"
import Frens from "../../getFrens"
import GreenCoin from "../../resource/greenCoin.png";
import PresentBox from "../../resource/present2.png";

const tg = window.Telegram.WebApp;
let login = tg.initDataUnsafe?.user?.username;

// login = "AhSR26"
const reqGetFrens = {
    method: "POST",
    headers: {'login': login}
}
//href="https://t.me/share/url?url=https://t.me/Gleam_AquaProtocol_Bot/app?startapp=cmM9ZTI0OTNjZGM&amp;text=%0AJoin%20me%20on%20Aqua%20Protocol%20and%20let's%20earn%20together!%20Use%20my%20invite%20link%20to%20join%20the%20fun!%20%F0%9F%8C%9F">Share Link</a>
function Invite(props) {
    let frens = [props.data[0].frens]
    let ref = "https://t.me/share/url?message=Go!&url=https://t.me/React_WebApp_Bot/RWTG?startapp=" + login

    const fren = frens.map((fren) => (
        <div>
            {fren} /map/
        </div>
    ));

    return (
        <div className={s.Invite}>
            <div className={s.DivLinkInvite}>
                <div className={s.Title}>INVITE FRENS</div>
                <div className={s.taskFrens}>
                    <div className={s.divImg}><img src={PresentBox} className={s.Img} alt='a'/></div>
                    <div className={s.coinsForFren}>
                        <div className={s.forYou}><span className={s.Coins}>+10 000</span> for you</div>
                        <div className={s.forFren}><span className={s.Coins}>+10 000</span> for fren</div>
                    </div>
                </div>
                <div className={s.TwoBtns}>
                    <a href={ref}><button className={s.BtnShare}>Invite</button></a>
                </div>
            </div>

            {/*<div className={s.Frens}>*/}
            {/*    <div className={s.TitleInvite}>FRENS</div>*/}
            {/*    <div>*/}
            {/*        {fren}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Invite;