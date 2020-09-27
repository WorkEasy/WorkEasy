import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';


function ProfisionalItem(){
    return (
        <article className="professional-item">
        <header>
            <img src="https://avatars3.githubusercontent.com/u/26774355?s=460&u=f89b5bfd2d9de7a5477b4e379ef62249340f89fb&v=4" alt="Wellington Rodrigues"/>
            <div>
                <strong>Wellington</strong>
                <span>Eletricista</span>
            </div>
        </header>
            <p>
                Apaixonado por inovações tecnologias.
                <br/>
                <br/>
                Passo o dia no meu computador fazendo tarefas do curso e estudando como sair dele o quanto antes,
                durante a noite explico para meus pais que a mensagem mais recente dentro do chat de uma pessoa no whats, fica na parte de baixo,
                porem na tela inicial as conversas mais recentes ficam na parte de cima(topo), isso não faz sentido a eles.  
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
    </article>
    );
}

export default ProfisionalItem;