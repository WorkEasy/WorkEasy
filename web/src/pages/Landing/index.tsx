import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import logoImg         from '../../assets/images/logo.svg';
import landingImg      from '../../assets/images/landing.svg';
import callPerson      from '../../assets/images/icons/callPerson.svg';
import solveProblems   from '../../assets/images/icons/solveProblems.svg';
import purpleheartIcon from '../../assets/images/icons/purple-heart.svg';
import './styles.css';
import api from '../../services/api';

function Landing(){
    const [totalConnections,setTotalConections]=useState(0);

    useEffect(()=>{
        api.get('connections').then(response => {
            const {total} =response.data;     
            setTotalConections(total)       
        })
    },[])

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
                    Made in Piauí <br /> {totalConnections} conexões já realizadas <img src={purpleheartIcon} alt="Coração roxo"/>
                </span>
            </div>
        </div>
    );
}

export  default Landing;