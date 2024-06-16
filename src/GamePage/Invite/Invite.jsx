import s from "./Invite.module.css"
import Frens from "../../getFrens"
import GreenCoin from "../../resource/greenCoin.png";

const tg = window.Telegram.WebApp;
let login = tg.initDataUnsafe?.user?.username;

login = "AhSR26"
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
            {/*<div className={s.Title}>Frens</div>*/}
            <div className={s.DivLinkInvite}>
                <div className={s.TitleInvite}>INVITE FRENS</div>
                {/*<div className={s.Link} id="refLink">{props.data[0].refLink}</div>*/}
                <div className={s.TwoBtns}>
                    {/*<div className={s.divBtnCopyLink}><button className={s.BtnCopyLink}>Copy Link</button></div>*/}
                    <a href={ref}><button className={s.BtnShare}>Invite</button></a>
                </div>
            </div>

            <div className={s.Frens}>
                <div className={s.TitleInvite}>FRENS</div>
                <div>
                    {fren}
                </div>
            </div>
        </div>
    );
}

export default Invite;