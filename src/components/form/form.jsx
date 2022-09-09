import React, { useState } from 'react';

import "./form.css"

const Form = () => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    const handleSave = () =>{
        if(!desc || amount){
            alert("Informe a Descição e o Valor")
            return;
        } else if(amount<1){
            alert("O Valor tem de ser Positivo ")
            return;
        }
    }
    return ( 
        <div className='FormContainer'>
        <div className="InputContent">
            <label htmlFor="">Descrição</label>
            <input 
                type="text" 
                className='Input' 
                value={desc} 
                onChange={(e)=>setDesc(e.target.value)}
            />
        </div>
        <div className="InputContent">
            <label htmlFor="">Valor</label>
            <input 
                type="number" 
                className='Input' 
                value={amount} 
                onChange={(e)=>setAmount(e.target.value)}
            />
        </div>
        <div className="RadioGroup">
            <input 
                type="radio" 
                name='group1' 
                onChange={()=> 
                setExpense(!isExpense)} 
                id='rIncome' 
                defaultChecked
            />
            <label htmlFor="rIncome">Entrada</label>
            <input 
                type="radio" 
                name='group2' 
                onChange={()=> 
                setExpense(!isExpense)} 
                id='rExpenses' 
            />
            <label htmlFor="rIncome">Entrada</label>
        </div>
        <div className="buttonform" 
            onClick={handleSave}
        >
            Adicionar
        </div>
        </div>
     );
}
 
export default Form;