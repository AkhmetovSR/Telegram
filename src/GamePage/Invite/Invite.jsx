import s from "./Invite.module.css"
import Go_back from "../../resource/goback.png"
import {NavLink} from "react-router-dom";


function Invite(props) {
    const refLink = props?.refLink[0]?.refLink
    return (
        <div className={s.Invite}>
            <div className={s.Title}>Frens</div>
            <div className={s.DivLinkInvite}>
                <div className={s.TitleInvite}>Your invite link</div>
                <div className={s.Link}>{refLink}</div>
                <div className={s.TwoBtns}>
                    <div className={s.divBtnCopyLink}><button className={s.BtnCopyLink}>Copy Link</button></div>
                    <div className={s.divShare}><button className={s.BtnShare}>Share</button></div>
                </div>
            </div>

            <div className={s.Frens}>
                <div className={s.TitleInvite}>Frens</div>
                <div>
                    //frens .map
                </div>
            </div>
        </div>
    );
}

export default Invite;