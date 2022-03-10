import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'

export function NewRoom() {
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
                    <h2>Criar uma Nova Sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Nome da Sala"
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}