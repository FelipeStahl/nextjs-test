import api from '../src/services/api';
import {FiLogIn} from 'react-icons/fi'
import { useRouter } from 'next/router'


const { useState } = require("react");

function Home(){
    const [id, setId] = useState('');
    const router = useRouter()

    async function handleLogin(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name)
            router.push('profile');
        } catch (err) {
            alert('Falha no login ' + err.message);
        }
    }
    return (
        <div className="logon-container">
            <section className="form">
                <form onSubmit={handleLogin}>
                    <h1>Faça seu login</h1>
                        <input placeholder="Sua id"
                            value={id}
                            onChange={e => setId(e.target.value)}
                        />
                        <button className="button" type="submit">Entrar</button>
                        <a href="/register" className="back-link">
                            <FiLogIn size={16} color="#E02041" />
                            Não tenho cadastro.
                        </a>
                </form>                
            </section>
        </div>
    )
}


export default Home;