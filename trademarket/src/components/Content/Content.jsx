import React, { useEffect, useState } from 'react'
import './Content.css'




function Content(props) {
const [array, setArray] = useState([])
useEffect(()=> {
  setArray(Object.values(props))
},[props])
  
  return(<>
  <div className='content'>
    <h3>Котировки мировых валют к рублю</h3>
  <table className="table-primary">
  <thead>
    <tr  className="table-info">
      <th scope="row" className="table-info" >ID</th>
      <th  scope="row" className="table-info">Символ</th>
      <th  scope="row" className="table-info">Название</th>
      <th  scope="row" className="table-info">Курс к рублю</th>
      <th  scope="row" className="table-info">Курс к рублю за предыдущий день</th>
    </tr>
  </thead>
  <tbody>
    {array.map(el=> 
    <tr key={el.ID}>
      <th scope="row" className="table-info" > {el.ID}</th>
      <td>{el.CharCode}</td>
      <td>{el.Name}</td>
      <td>{el.Value}</td>
      <td>{el.Previous}</td>
    </tr>
      )}
      </tbody>
    </table>
  </div><div className='footer'><div className='copy'>Copyright 2022</div></div></>
  )
}
export  {Content}
