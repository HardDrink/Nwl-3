import React,{ useState} from 'react';
import './styles.css';

import PageHeader from '../../components/pageheader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm () {
    const [scheduleItem, setScheduleItem] = useState ([
        { week_day: 0, from: "8:00 AM" , to: "4:00 PM"},
        { week_day: 2, from: "10:00 AM" , to: "6:00 PM"},
     ]);
     
     function addNewScheduleItem () {
        setScheduleItem([
            ...scheduleItem,
            {week_day: 0, from: '', to: ''}
        ]);
     }

    return (
        <div id="page-teacher-form" className="container">
        <PageHeader 
        title="Que incrivel que voce quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
        />
        <main>
            <fieldset>
                <legend>Seus Dados</legend>

                <Input name="name" label="Nome Completo"/>
                <Input name="avatar" label="avatar"/>
                <Input name="whatapp" label="WhatsApp"/>
                <Textarea name="bio" label="Biografia"/>
            </fieldset>

            <fieldset>
                <legend>Seus a aula</legend>

                <Select 
                name="subject" 
                label="Materia"
                options={[
                    { value: 'Artes', label: 'Artes'},
                    { value: 'Biologia', label: 'Biologia'},
                    { value: 'Ciencias', label: 'Ciencias'},
                    { value: 'Educaçao Fisica', label: 'Educaçao Fisica'},
                    { value: 'Fisica', label: 'Fisica'},
                    { value: 'Geografia', label: 'Geografia'},
                    { value: 'Historia', label: 'Historia'},
                    { value: 'Matematica', label: 'Matematica'},
                    { value: 'Portugues', label: 'Portugues'},
                    { value: 'Quimica', label: 'Quimica'},
                ]}
                />

                <Input name="cost" label="Custo da sua hora por aula"/>
            </fieldset>

            <fieldset>
                <legend>Horarios Disponiveis
                <button type="button" onClick={addNewScheduleItem}>
                    + Novo horario
                </button>
                </legend>

                {scheduleItem.map(scheduleItem => {
                   return (
                    <div key={scheduleItem.week_day} className="schedule-item">
                    <Select 
                    name="week_day" 
                    label="Dia da Semana"
                    options={[
                        { value: '0', label: 'Domingo'},
                        { value: '1', label: 'Segunda-feira'},
                        { value: '2', label: 'Terça-feira'},
                        { value: '3', label: 'Quarta-feira'},
                        { value: '4', label: 'Quinta-feira'},
                        { value: '5', label: 'Sexta-feira'},
                        { value: '6', label: 'Sabado'},
                    ]}
                    />
                    <Input name="From" label="Das" type="time" />
                    <Input name="to" label="Até" type="time" />
                    </div>
                   );
                })}

            </fieldset>

            <footer>
                <p>
                    <img src={warningIcon} alt="Aviso importante"/>
                    Importante" <br/>
                    Preencha todos os dados
                </p>
                <button type="button">
                    Salvar cadastro
                </button>
            </footer>

        </main>
    </div>
    );
}

export default TeacherForm;