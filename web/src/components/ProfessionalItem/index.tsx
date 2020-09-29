import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';
import './styles.css';


export interface Professional {
    id: number;
    avatar: string;
    bio: string;
    cost: number;
    nome: string;
    subject: string;
    whatsapp: string;
}
interface ProfisionalItemProps {
    professional: Professional;
}

const ProfisionalItem: React.FC<ProfisionalItemProps> = ({ professional }) => {
    function createNewConnection(){
        api.post("connections",{
            user_id:professional.id,
        })
    }
    return (
        <article className="professional-item">
            <header>
                <img src={professional.avatar} alt={professional.nome} />
                <div>
                    <strong>{professional.nome}</strong>
                    <span>{professional.subject}</span>
                </div>
            </header>
            <p>
                {professional.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ {professional.cost}</strong>
                </p>
                <a 
                    target="_blank"
                    onClick={createNewConnection} 
                    href={`https://wa.me/${professional.whatsapp}`}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    );
}

export default ProfisionalItem;