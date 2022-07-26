import { useNavigate } from "react-router-dom"
import { StyledCardContainer } from "./styles";

const Card = ({ pokemon }) => {
    const navigate = useNavigate();
    return (
        <StyledCardContainer>
            <h2>{pokemon.name}</h2>
            <button onClick={() => navigate(`/pokemon/${pokemon.name}`)}>
                Ir para página
            </button>
        </StyledCardContainer>
    )
}

export default Card;