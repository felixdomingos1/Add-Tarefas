import React from 'react';

import "./ResumeItem.css"

const ResumeItem = ({title, value}) => {
    return ( 
        <div className='ResumeItem'>
            <div className="HeaderItem">
                <div className="TitleItem">
                    {title}    
                </div>    
            </div>   
            <div className="TotalItem">
                {value}    
            </div> 
        </div> 
    );
}
 
export default ResumeItem;