import React from 'react';
import PageHeader from '../../components/PageHeader';
import ProfisionalItem from '../../components/ProfessionalItem';


import './styles.css';


function ProfessionalList(){
    return(
         <div id="page-professional-list" className="container">
            <PageHeader title="Profissionais disponíveis">
                <form id="search-professionals">
                    <div className="input-block">
                        <label htmlFor="subject">Profissões</label>
                        <input type="text" id="subject"/>
                    </div>
                    
                    <div className="input-block">
                        <label htmlFor="week-day">Dia da semana</label>
                        <input type="text" id="week-day"/>
                    </div>
                    <div className="input-block">
                        <label htmlFor="time">Cidade</label>
                        <input type="text" id="time"/>
                    </div>

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