import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PokemonProfile from "./PokemonProfile";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/pokemon/:pokemon" element={<PokemonProfile />}/>
        </Routes>
    );
};

export default Router;