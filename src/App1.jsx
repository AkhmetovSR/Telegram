import {Route, Routes} from "react-router-dom";
import GamePage from "./GamePage/GamePage";
import Earn from "./GamePage/Earn/Earn.jsx";
import Invite from "./GamePage/Invite/Invite";
import Boost from "./GamePage/Boost/Boost";
import Options from "./GamePage/Options/Options";

function App1(props) {
    return (
        <>
            <Routes>
                <Route path="/GamePage" element={<GamePage claims={props.claims}/>}/>
                <Route path='/Earn' element={<Earn/>}/>
                <Route path="/invite" element={<Invite />}/>
                <Route path="/boost" element={<Boost />}/>
            </Routes>
            <Options/>
        </>
    );
}

export default App1;