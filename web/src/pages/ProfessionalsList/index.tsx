import React from 'react';
import Input from '../../components/input';
import PageHeader from '../../components/PageHeader';
import ProfisionalItem from '../../components/ProfessionalItem';


import './styles.css';


function ProfessionalList(){
    return(
         <div id="page-professional-list" className="container">
            <PageHeader title="Profissionais disponíveis">
                <form id="search-professionals">
                    <Input name="tipServico" label="Profissão"/>
                    <Input name="week_day" label="Dia da semana"/>
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