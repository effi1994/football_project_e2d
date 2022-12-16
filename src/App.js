import './App.css';
import Header from "./components/Header";
import {Container} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom"
import LiveResults from "./pages/LiveResults";
import LeagueTable from "./pages/LeagueTable";
import LeagueTableLive from "./pages/LeagueTableLive";
import Login from "./pages/Login";
import {useEffect, useState} from "react";
import {getUser,getToken} from "./services/userAtuhService";

function App() {
    //To Do: Implement a login page,
    //To Do: Implement a logout button,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //To Do: Implement a user profile page,
    //effi OVEDDD!!!

    let location = useLocation()
    const [token, setToken] = useState(null);
    useEffect( () => {
       if (getToken()){
           setToken(getToken());
       }else {
           setToken(null);
       }
    })

console.log(new Date(Date.now() + 1000*60))
    const handleToken = (token) => {
        setToken(token);
    }

    return (
        <>
          <Header path={location.pathname} token={token}/>
          <Container>
              <Routes>
                  <Route path={"/"} element={<LiveResults/>}/>
                  <Route path={"/league-table"} element={<LeagueTable/>}/>
                  <Route path={"/league-table-live"} element={<LeagueTableLive/>}/>
                  <Route path={"/login"} element={<Login token={token} onToken={handleToken}/>} />
              </Routes>
          </Container>
        </>
  );
}

export default App;
