import React from 'react';
import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import warningIcon from '../../assets/images/icons/icons8-warning.svg'

function ProfessionalForm(){
    return(
        <div id="page-professional-form" className="container">
            <PageHeader 
            title="Que incrivel, você resolve problemas !"
            description="Primeiro passo é preencher esse formulário de inscrição."
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>

                    <Input name="name" label="Nome Completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Input name="tipServico" label="Serviço"/>
                    <Input name="custo" label="Custo da sua hora serviço"/>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="aviso"/>
                        Aviso Importante <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>  
    )
}

export default ProfessionalForm;