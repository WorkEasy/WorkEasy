import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import ProfisionalItem from '../../components/ProfessionalItem';
import Select from '../../components/Select';


import './styles.css';


function ProfessionalList(){
    return(
         <div id="page-professional-list" className="container">
            <PageHeader title="Profissionais disponíveis">
                <form id="search-professionals">
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
                    <Input type="time" name="time" label="Hora"/>


                </form>
            </PageHeader>

            <main>
               <ProfisionalItem/>
               <ProfisionalItem/>
               <ProfisionalItem/>
               <ProfisionalItem/>
            </main>
         </div>    
    )
}

export default ProfessionalList;