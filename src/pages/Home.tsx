import { useNavigate  } from 'react-router-dom'
import { GoogleAuthProvider, auth, signInWithPopup, signInWithRedirect, getRedirectResult } from '../services/firebase'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'


export function Home() {

    const navigate = useNavigate();

    function handleCreateRoom(){

        const provider = new GoogleAuthProvider();

        navigate('/rooms/new');
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={illustrationImg}  alt="Ilustração simbolizando perguntas e respostas."/>
                <strong>Crie sala de Q&A Ao Vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na Sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}