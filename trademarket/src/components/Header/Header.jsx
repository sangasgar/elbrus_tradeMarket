import React, { useEffect, useState } from 'react'
import './Header.css'
import logo from './logo.webp'
import axios from 'axios'
import { Content } from '../Content/Content';
import { Content1 } from '../Content/Content1';

function Header() {


const [value1, setValue1] = useState([])
const [value2, setValue2] = useState([])

async function mainHandler(){
  const resmain = await axios('https://www.cbr-xml-daily.ru/daily_json.js')
  setValue1(resmain.data.Valute)
}

useEffect(()=> {
  mainHandler()
},[])

function onChangeHandler (event){
  setValue2(event.target.value)
}
async function submitHandler(e){
  e.preventDefault()
  console.log('start axios')
  const key = 'KLRT95VOH5KVVUKW'
  const res = await axios(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${value2}&interval=5min&apikey=${key}`)
  setValue2({symbol:res.data['Global Quote']["01. symbol"],price:res.data['Global Quote']["05. price"], vol:res.data['Global Quote']["06. volume"], last_tradeday:res.data['Global Quote']["07. latest trading day"]})

}


  return(<>
  <div className='header'>
  <img src = {logo} width = '100'  alt="logo"/>
  <h1 className='nameHeader'>Котировки online</h1>
  <form className='example' onSubmit={submitHandler}>
  <input value={value2} onChange={onChangeHandler} type="text" placeholder="Search.." name="search"/>
  <button type="submit"><i className="fa fa-search"></i></button>
  </form>
    </div>
      <Content1 {...value2} />  <Content {...value1}/>    
     </>
  )
}
export  {Header}
