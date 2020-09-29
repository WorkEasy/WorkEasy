import React, { useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import './styles.css';

import warningIcon from '../../assets/images/icons/icons8-warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function ProfessionalForm(){
    const [scheduleItens, setScheduleItens] = useState([
        { week_day: 1, from: '8:00', to: '12:00' },
    ]);

    function addNewScheduleItem(){
        setScheduleItens([
            ...scheduleItens,
            { week_day: 0, from: '', to: '' }
        ]);
    }

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

                    <Textarea name="bio" label="Descrição"/>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>

                    <Select 
                        name="tipServico"
                        label="Serviço"
                        options={[
                            { value: 'Predeiro', label: 'Predeiro' },
                            { value: 'Pintor', label: 'Pintor' },
                            { value: 'Marceneiro', label: 'Marceneiro' },
                            { value: 'Eletricista', label: 'Eletricista' },
                            { value: 'Encanador', label: 'Encanador' },
                            { value: 'Jardineiro', label: 'Jardineiro' },
                            { value: 'Suporte técnico', label: 'Suporte técnico' },
                        ]}
                    />

                    <Input name="custo" label="Custo da sua hora serviço"/>
                </fieldset>

                <fieldset>
                    <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo Horário</button>
                    </legend>

                    {scheduleItens.map(scheduleItem => {
                        return(
                            <div key={scheduleItem.week_day} className="Schedule-item">
                                <Select 
                                name="week_day"
                                label="Dia da semana"
                                options={[
                                    { value: '0', label: 'Domingo' },
                                    { value: '1', label: 'Segunda-feira' },
                                    { value: '2', label: 'Terça-feira' },
                                    { value: '3', label: 'Quarta-feira' },
                                    { value: '4', label: 'Quinta-feira' },
                                    { value: '5', label: 'Sexta-feira' },
                                    { value: '6', label: 'Sábado' },
                                ]}
                            />
                            <Input name="from" label="Das" type="time"/>
                            <Input name="to" label="Até" type="time"/>
                            </div>
                        );
                    })}

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