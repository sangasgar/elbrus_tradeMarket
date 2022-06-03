import React, { useEffect, useState } from 'react'
import './Content.css'


function Content1({symbol, price, vol, last_tradeday}) {
  return(  <div className='content1'>
    <table className='tableFull'>
    <tr>
      <th>Биржевой символ компании:</th>
      <td>{symbol}</td>
    </tr>
    <tr>
      <th>Стоимость:</th>
      <td>{price}</td>
    </tr>
    <tr>
      <th>Объем торгов:</th>
      <td>{vol}</td>
    </tr>
    <tr>
      <th>Последний торговый день:</th>
      <td>{last_tradeday}</td>
    </tr>
    </table>
    
   </div>)
}

export {Content1}
