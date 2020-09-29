import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import ProfisionalItem, {Professional} from '../../components/ProfessionalItem';
import Select from '../../components/Select';
import api from '../../services/api';


import './styles.css';



function ProfessionalList() {
    const [professionals,setProfessionals] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    async function seachTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('problems', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setProfessionals(response.data);        
    }

    return (
        <div id="page-professional-list" className="container">
            <PageHeader title="Esses são os profissionais disponiveis">
                <form id="search-professionals" onSubmit={seachTeachers}>
                    <Select
                        name="subject"
                        label="Profissão"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
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
                        value={week_day}
                        onChange={(e) => { setWeekday(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sabado' },
                        ]}
                    />
                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value) // seachTeachers(e);
                        }}
                    />
                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>

            <main>
                {professionals.map((professional:Professional) =>{
                    return <ProfisionalItem key={professional.id} professional={professional}/>;
                })}
            </main>
        </div>
    )
}

export default ProfessionalList;


