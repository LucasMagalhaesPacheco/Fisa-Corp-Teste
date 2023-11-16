import React from "react";
import { useNavigate }  from "react-router-dom"

import FlavorsSelect from "../../components/flavors";

const Home = () => {
    const navigate = useNavigate();



    return (
        <div>

            <h1>Bem-vindo a nossa loja de açai</h1>
            <FlavorsSelect />
            
        </div>

    )
}

export default Home;