// import logo from './logo.svg';
import './App.css'
import mix from "./resource/circle.png"

window.Telegram.WebApp.ready(); window.Telegram.WebApp.expand();
const tg = window.Telegram.WebApp;

function closeApp(){
  tg.close();
}

function App() {
  return (
      <div className={"Main"}>
          <div className={"ImgDiv"}><img className={"Img"} src={mix} alt="mix"/></div>
          <div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>
      </div>
  );
}

export default App;


//($env:HTTPS = "true") -and (npm start)