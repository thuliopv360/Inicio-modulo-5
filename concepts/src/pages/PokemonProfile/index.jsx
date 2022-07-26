import { useParams } from "react-router-dom"

const PokemonProfile = () => {
    const params = useParams();
    // const { pokemon } = useParams();
    
    return (
        <div>
            <h1>{params.pokemon}</h1>
            {/* <h1>{params.pokemon}</h1> */}
        </div>
    );
};

export default PokemonProfile;