import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card"

const Home = () => {
    const [pokemons, setPokemons ] = useState([]);

    const fetchPokemons = async () =>{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        console.log(response);

        const pokemonsList = await response.json()
        setPokemons(pokemonsList.results);
    };

    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {pokemons.map((element,index) => <Card pokemon={element} key={index}/>)}
        </div>
    );
};

export default Home;