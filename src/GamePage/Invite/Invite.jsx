import s from "./Invite.module.css"
import Go_back from "../../resource/goback.png"
import {NavLink} from "react-router-dom";


function Invite() {
    return (
        <div className={s.Invite}>
            <NavLink to="/Matrix" className={s.NavBack}><img src={Go_back} className={s.GoBack} alt={"goBack"}/></NavLink>
            <div className={s.Title}>Frens</div>
            <div className={s.DivLinkInvite}>
                <div className={s.TitleInvite}>Your invite link</div>
                <div className={s.Link}>https://www.freepik.com/search?format=search&last_filter=page&last_value=4&page=4&query=presents+3d&type=icon#uuid=5599643f-9aa3-4704-922c-ff1cf9373482" className={s.Input}</div>
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