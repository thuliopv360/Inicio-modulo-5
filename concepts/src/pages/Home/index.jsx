import { useState } from "react";

const Home = () => {
    const [pokemons, setPokemons ] = useState([]);

    const fetchPokemon = async () =>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        console.log(response);
    }

    return (
        <div>
            <h1>Home</h1>

        </div>
    );
};

export default Home;