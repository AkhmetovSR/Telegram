import s from "./Earn.module.css"
import GreenCoin from "../../resource/greenCoin.png"
import GetMoreCoins from "../../resource/getMoreCoin1.png"
import Earns from "../../getEarns";

function Earn(props) {
// При загрузке получаем все earns и получаем earns пользователя. Далее нужно как то убрать из основного массива, массив пользователя и отобразить на странице
    async function press(e) {
        const earn_id = e.target.id;
        const price = e.target.value;
        const claims = Number(props.data[0].claims) + Number(price);
        let login = "AhSR26"
        const reqGetUserData = {method: "POST", headers: {'login': login, 'earn_id': earn_id, "claims": claims}}
        let earns = await Earns.EarnComplete(login, reqGetUserData);
    }

    const arr1 = props?.earns
    let arr2 = (props?.data[0]?.earns)
    if(arr2 !== null){
        console.log('arrw', arr2)
        arr2 = arr2.split(", ").map(Number)
        for (let i = 0; i < arr2.length; i++) {
            delete arr1[arr2[i] - 1]
        }
    }
    console.log(arr1)

    let soon = <div className={s.Soon}>Coming soon...</div>;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== undefined) {
            soon = '';
        }
    }

    const listEarn = arr1.map((earn) => (
        <div className={s.Task} key={earn.id}>
            <div className={s.DivImgTask}><img src={earn.img} className={s.ImgTask} alt="a"/></div>
            <div className={s.BodyEran}>
                <div className={s.TaskText}>{earn.text}</div>
                <div className={s.CoinQuantity}>
                    <div className={s.divCoin}><img src={GreenCoin} className={s.ImgCoin} alt="s"/></div>
                    <div className={s.divUpCoin}>+{earn.price}</div>
                </div>
            </div>
            <div key={earn.id} className={s.divBtnClaim}>
                <a href={earn.link_to_channel}>
                    <button id={earn.id} className={s.BtnClaim} onClick={press}>Go</button>
                </a>
                {/*<button className={s.BtnClaim} id={earn.id} value={earn.price} onClick={press}>Check</button>*/}
            </div>
        </div>
    ));

    return (
        <div className={s.Earn}>
            <div className={s.Main}>
                <div className={s.divGetMoreImg}><img src={GetMoreCoins} className={s.GetMoreCoinsImg}/></div>
                <div className={s.textGetMoreCoins}>Get more coins</div>
                {soon}
                <div className={s.Earns}>{listEarn}</div>
            </div>
        </div>
    );
}

export default Earn;

// При нажатии на кнопку Go, открывается ссылка паблика, затем при нажатии Check идет проверка, подписки, если true показывается что плюсануло (Congrats) и отправляется запрос в бд
// на добавление в claim и появляется галочка, что задание выполнено.