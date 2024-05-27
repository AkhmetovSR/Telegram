// import logo from './logo.svg';
import './App.css'
import mix from "./resource/circle1.png"
import Options from "./Options/Options.jsx";
import Line1 from "./Line1/Line1.jsx";
import Line2 from "./Line2/Line2.jsx";

window.Telegram.WebApp.ready(); window.Telegram.WebApp.expand();
const tg = window.Telegram.WebApp;

function closeApp(){
  tg.close();
}

function App() {
  return (
      <div className={"Main"}>
          <Line1 />
          <Line2 />
          <div className={"ImgDiv"}>
              <div className={"divImg"}>
                  <img className={"Img"} src={mix} alt="mix"/>
              </div>
          </div>
          <Options />
          {/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}
      </div>
  );
}

export default App;


//($env:HTTPS = "true") -and (npm start)