import './App.css';
import Header from "./components/Header";
import {Container} from "@mui/material";
import {Route, Routes, useLocation} from "react-router-dom"
import LiveResults from "./pages/LiveResults";
import LeagueTable from "./pages/LeagueTable";
import LeagueTableLive from "./pages/LeagueTableLive";
import Login from "./pages/Login";

function App() {

    let location = useLocation()


    return (
        <>
          <Header path={location.pathname}/>
          <Container>
              <Routes>
                  <Route path={"/"} element={<LiveResults/>}/>
                  <Route path={"/league-table"} element={<LeagueTable/>}/>
                  <Route path={"/league-table-live"} element={<LeagueTableLive/>}/>
                  <Route path={"/login"} element={<Login/>}/>
              </Routes>
          </Container>
        </>
  );
}

export default App;
