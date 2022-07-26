import { useNavigate } from "react-router-dom";
import { StyledHeader, StyledNavButton } from "./styles";
import "./style.css"

const Header = () => {
    const navigate = useNavigate();

    return (
        <StyledHeader className="header">
            <StyledNavButton onClick={() => navigate("/")}>Home</StyledNavButton>
            <StyledNavButton onClick={() => navigate("/login")}>Login</StyledNavButton>
            <StyledNavButton onClick={() => navigate("/register")}>Register</StyledNavButton>
        </StyledHeader>
    )
}

export default Header;