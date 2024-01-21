import React from 'react'
import './registration.css'

const Regstrstion = () => {
  return (
    <div className='regstrstion'>
      <div className="regstrstion__header">
        <h1>Записаться на прием</h1>
      </div>
      <div className="regstrstion__center">
        <form>
          <input type="text"  placeholder='Имя'/>
          <input type="number" placeholder='Телефон' />
          <button className='btn' ><a href="#">Записаться</a></button>
        </form>
      </div>
      <div className="regstrstion__footer ">
        <p>Новейшее оборудование, опытные доктора, работающие в тесном контакте друг с другом, система внутреннего контроля качества услуг</p>
      </div>
    </div>
  )
}

export default Regstrstion