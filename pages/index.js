const { useState } = require("react");

function Home(){
    return <div>
        <h1>Home 2</h1>
        <Contador />
    </div>
}

function Contador(){
    const [contador, setContador] = useState(1);

    function addContador(){
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={addContador}>Adicionar</button>
        </div>
    )
}

export default Home;