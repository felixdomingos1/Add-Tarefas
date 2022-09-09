/* eslint-disable no-unused-vars */
import React, {useState, useEffect } from 'react';

import './App.css';
import Header from './components/header/Header';
import Resume from './components/header/Resume/Resume';
import Form from './components/form/form';

import "./style/Global.css"

const App =() =>{
// const data = localStorage.getItem("AllData")
//   const [AllData, SetAllListData] = useState(
//     data ? JSON.parse(data) : []
//   )
//   const [income, setIncome] = useState(0)
//   const [expense, setExpense] = useState(0)
//   const [total, setTotal] = useState(0)

//   useEffect(()=>{
//     const amountExpense = AllData
//       .filter((item)=> item.expense)
//       .map((Transaction) => Number(Transaction.amount))

//       const amountIncome = AllData
//         .filter((item)=> item.expense)
//         .map((Transaction) => Number(Transaction.amount))

//       const expense = amountExpense.reduce((acc, cur)=> acc + cur, 0).toFixed(2)
//       const income = amountIncome.reduce((acc, cur)=> acc + cur, 0).toFixed(2)

//       const  total = Math.abs(income - expense).toFixed(2)

//       setIncome(`R$ ${income}`)
//       setExpense(`R$ ${expense}`)
//       setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`)

//   }, [AllData])

  return (
    <> 
      <Header/>
      <Resume/>
      {/* <Resume income={income} expense={expense} total={total}/> */}
      <Form/>
    </>
  );
}
export default App;
