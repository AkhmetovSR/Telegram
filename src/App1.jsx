import s from "./App1.module.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GamePage from "./GamePage/GamePage.jsx";
import Earn from "./GamePage/Earn/Earn.jsx";
import Invite from "./GamePage/Invite/Invite";
import Boost from "./GamePage/Boost/Boost";
import Options from "./GamePage/Options/Options";

function App1() {
    return (
        <>
            <Routes>
                <Route path="/GamePage" element={<GamePage/>}/>
                <Route path="/Earn" element={<Earn/>}/>
                <Route path="/invite" element={<Invite />}/>
                <Route path="/boost" element={<Boost />}/>
            </Routes>
            <Options/>
        </>

        // {/*<div className={"BtnDiv"}><button className={"Btn"} onClick={closeApp}>Закрыть</button></div>*/}
    );
}

export default App1;