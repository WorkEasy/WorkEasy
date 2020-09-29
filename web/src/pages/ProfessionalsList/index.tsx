import React from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import ProfisionalItem from '../../components/ProfessionalItem';
import Select from '../../components/Select';


import './styles.css';


function ProfessionalList(){
    return(
         <div id="page-professional-list" className="container">
            <PageHeader title="Esses são os profissionais disponiveis">
                <form id="search-professionals">
                <Select
                        name="subject" 
                        label="Profissão"
                        options={[
                            { value: 'Pedreiro', label: 'Pedreiro' },
                            { value: 'Marceneiro', label: 'marceneiro' },
                            { value: 'Chaveiro(a) ', label: 'Chaveiro(a) ' },
                            { value: 'Cozinheiro(a)  ', label: 'Cozinheiro(a)  ' },
                            { value: 'Diarista ', label: 'Diarista ' },
                            { value: 'Eletricista De Automóveis ', label: 'Eletricista De Automóveis ' },
                            { value: 'Eletricista Em Residências E Estabelecimentos Comerciais ', label: 'Eletricista Em Residências E Estabelecimentos Comerciais ' },
                            { value: 'Encadernador(a)/plastificador(a) ', label: 'Encadernador(a)/plastificador(a) ' },
                            { value: 'Encanador ', label: 'Encanador ' },
                            { value: 'Engraxate ', label: 'Engraxate ' },
                            { value: 'Entregador De Malotes ', label: 'Entregador De Malotes ' },
                            { value: 'Envasador(a) E Empacotador(a) ', label: 'Envasador(a) E Empacotador(a) ' },
                            { value: 'Estampador(a) De Peças Do Vestuário ', label: 'Estampador(a) De Peças Do Vestuário ' },
                            { value: 'Esteticista ', label: 'Esteticista ' },
                            { value: 'Esteticista De Animais Domésticos ', label: 'Esteticista De Animais Domésticos ' },
                            { value: 'Estofador(a) ', label: 'Estofador(a) ' },
                            { value: 'Ferramenteiro(a) ', label: 'Ferramenteiro(a) ' },
                            { value: 'Ferreiro/forjador ', label: 'Ferreiro/forjador ' },
                            { value: 'Fosseiro (limpador De Fossa) ', label: 'Fosseiro (limpador De Fossa) ' },
                            { value: 'Galvanizador(a) ', label: 'Galvanizador(a) ' },
                            { value: 'Gesseiro(a) ', label: 'Gesseiro(a) ' },
                            { value: 'Jardineiro(a) ', label: 'Jardineiro(a) ' },
                            { value: 'Manicure/pedicure  ', label: 'Manicure/pedicure  ' },
                            { value: 'Maquiador(a) ', label: 'Maquiador(a) ' },
                            { value: 'Marceneiro(a)  ', label: 'Marceneiro(a)  ' },
                            { value: 'Mecânico(a)', label: 'Mecânico(a)' },
                            { value: 'Montador(a) De Móveis  ', label: 'Montador(a) De Móveis  ' },
                            { value: 'Montador(a) E Instalador De Sistemas E Equipamentos De Iluminação E Sinalização Em Vias Pública', label: 'Montador(a) E Instalador De Sistemas E Equipamentos De Iluminação E Sinalização Em Vias Pública' },
                            { value: 'Portos E Aeroportos  ', label: 'Portos E Aeroportos  ' },
                            { value: 'Pintor(a) De Parede  ', label: 'Pintor(a) De Parede  ' },
                            { value: 'Reparador(a) De Aparelhos E Equipamentos Para Distribuição E Controle De Energia Elétrica  ', label: 'Reparador(a) De Aparelhos E Equipamentos Para Distribuição E Controle De Energia Elétrica  ' },
                            { value: 'Reparador(a) De Máquinas E Aparelhos De Refrigeração E Ventilação Para Uso Industrial E Comercial  ', label: 'Reparador(a) De Máquinas E Aparelhos De Refrigeração E Ventilação Para Uso Industrial E Comercial  ' },
                            { value: 'Reparador(a) De Móveis  ', label: 'Reparador(a) De Móveis  ' },
                            { value: 'Técnico(a) De Manutenção De Computador  ', label: 'Técnico(a) De Manutenção De Computador  ' },
                            { value: 'Técnico(a) De Manutenção De Eletrodomésticos  ', label: 'Técnico(a) De Manutenção De Eletrodomésticos  ' },
                            { value: 'Técnico(a) De Manutenção De Telefonia  ', label: 'Técnico(a) De Manutenção De Telefonia  ' },
                            { value: 'Telhador(a)  ', label: 'Telhador(a)  ' },
                            { value: 'Vidraceiro De Edificações ', label: 'Vidraceiro De Edificações ' },
                        ]}
                     />
                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options={[
                            {value:'0',label:'Domingo'},
                            {value:'1',label:'Segunda-feira'},
                            {value:'2',label:'Terça-feira'},
                            {value:'3',label:'Quarta-feira'},
                            {value:'4',label:'Quinta-feira'},
                            {value:'5',label:'Sexta-feira'},
                            {value:'6',label:'Sabado'},
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


