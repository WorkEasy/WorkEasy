import React, { FormEvent, useState } from 'react';
import {useHistory} from 'react-router-dom'
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

function ProfessionalForm() {
    const history = useHistory();

    const [name, setName] = useState('')
    const [avatar, setAvatar] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [bio, setBio] = useState('')

    const [subject, setSubject] = useState('')
    const [cost, setCost] = useState('')

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
        // scheduleItems.push()
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        })
        setScheduleItems(updatedScheduleItems)
    }


    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post('problems', {
            nome: String(name),
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!')
            history.push('/')
        }).catch(() => {
            alert("deu errro")
            console.log({
                nome: String(name),
                avatar,
                whatsapp,
                bio,
                subject,
                cost: Number(cost),
                schedule: scheduleItems
            });

        })
        // console.log({
        //     name,
        //     avatar,
        //     whatsapp,
        //     bio,
        //     subject,
        //     cost,
        //     scheduleItems
        // });

    }
    return (
        <div id="page-professional-form" className="container">
            <PageHeader
                title="Que incrivel, você resolve problemas"
                description="O primeiro passo é preencher esse formulario de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre o trabalho</legend>
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
                        <Input
                            name="cost"
                            label="Custo por hora de trabalho"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponiveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo hórario
                        </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                        name="from"
                                        label="Das"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}

                                    />
                                    <Input
                                        name="to"
                                        label="Até"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}

                                    />
                                </div>
                            );
                        })}

                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante ! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default ProfessionalForm;