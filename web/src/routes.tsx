import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Landing from './pages/Landing';
import ProfessionalForm from './pages/ProfessionalForm';
import ProfessionalList from './pages/ProfessionalsList';

function Routes(){
    return(
        <BrowserRouter>
        <Route path="/" exact component={Landing}/>
        <Route path="/callPerson" component={ProfessionalList}/>
        <Route path="/solveProblems" component={ProfessionalForm}/>
        </BrowserRouter>
    
    ); 
}

export default Routes;