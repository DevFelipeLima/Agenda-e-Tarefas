import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendario.css'

const Calendario = () => {
    const [date, setDate] = useState(new Date);
    const onChange = date => {
        setDate(date)
    }


    return ( 
        <div className ='calendario'>
        <Calendar onChange={onChange} value={date} />
        </div> 
)}
 
export default Calendario;