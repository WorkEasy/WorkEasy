import React from 'react'
import {Link} from 'react-router-dom'
import logoImg         from '../../assets/images/logo-c.svg'
import landingImg      from '../../assets/images/fundo-home.svg'
import callPerson      from '../../assets/images/icons/icons8-sos.svg'
import solveProblems   from '../../assets/images/icons/icons8-solucion.svg'

import './styles.css';

function Landing(){
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="WorkEasy"/>
                    <h2>Deixe um profissional resolver seus problemas </h2>
                </div>

                <img
                    src={landingImg} 
                    alt="" 
                    className="hero-image"
                />

                <div className="buttons-container">
                     <Link to="/callPerson" className="callPerson">
                         <img src={callPerson} alt="Solicitar ajuda"/>
                         Solicitar ajuda 
                     </Link>
                     <Link to="/solveProblems" className="solveProblems">
                         <img src={solveProblems} alt="Solicitar ajuda"/>
                          Resolver problema
                     </Link>
                </div>

                <span className="total-connections">
                    Made in Piauí
                </span>
            </div>
        </div>
    );
}

export  default Landing;