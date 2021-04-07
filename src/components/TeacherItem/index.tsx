import React from 'react';

import './styles.css'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem () {
    return(
    <article className="teacher-item">
    <header>
        <img src="" alt=""/>
        <div>
            <strong>Mateus Bonitao</strong>
            <span>matrematica</span>
        </div>
    </header>
    <p>
    Uma deusa, uma louca, uma feiticeira Ela é demais
    <br/><br/>
    Quando beija minha boca e se entrega inteira Meu Deus, ela é demais!
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 30</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="vem de zap bb"/>
            vem de zap bb
        </button>
    </footer>
</article>
    );
}
export default TeacherItem;