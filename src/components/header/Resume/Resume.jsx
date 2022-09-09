import React from 'react';

import ResumeItem from './ResumeItem';
import "./Resume.css"

const Resume = (income, expense, total) => {
    return ( 
        <div className="container-Resume">
        <ResumeItem title='Entradas' value="30000"/>
        <ResumeItem title='Saidas' value="2001"/>
        <ResumeItem title='Total' value='20000'/>
            {/* <ResumeItem title='Entradas' value={income}/>
            <ResumeItem title='Saidas' value={expense}/>
            <ResumeItem title='Total' value={total}/> */}
        </div>
     );
}
 
export default Resume;