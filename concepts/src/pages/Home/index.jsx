import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card"
import axios from "axios"

const Home = () => {
    const [pokemons, setPokemons] = useState([]);

    //Requisiçao com fetch e asinc e await
    // -----------------------------
    // const fetchPokemons = async () => {
    //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    //     console.log(response);

    //     const pokemonsList = await response.json()
    //     setPokemons(pokemonsList.results);
    // }; mesma coisa
    //        ||  
    //        ||
    //        VV
    //Requisiçao com Axios e async e await
    // -----------------------------
    // const fetchPokemons = async () => {
    //     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    //     setPokemons(response.data.results);
    // }
    // Requisicao com then 
    // -----------------------------
    // const fetchPokemons = () => {
    //     ("https://pokeapi.co/api/v2/pokemon/")
    //         .then((res) => res.json())
    //         .then((res) => setPokemons(res.results));
    // }; mesma coisa
    //        ||  
    //        ||
    //        VV

    //Requisicao com axios e then 
    // -----------------------------
    const fetchPokemons = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon/").then((res) => setPokemons(res.data.results));
    }



    useEffect(() => {
        fetchPokemons()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            {pokemons.map((element, index) => (
                <Card pokemon={element} key={index} />
            ))}
        </div>
    );
};

export default Home;