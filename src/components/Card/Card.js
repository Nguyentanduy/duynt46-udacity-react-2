import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function Card({ item }) {
  const navigate = useNavigate()
  const timeStamp = (timeStamp) => {
    let date = new Date(timeStamp);

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();

    let time = `${hours % 12 || 12}:${minutes.toString().padStart(2, "0")} ${hours < 12 ? "AM" : "PM"}`;
    let dateStr = `${month}/${day}/${year}`;

    return `${time} | ${dateStr}`;
  };

  return (
    <div className='card'>
      <div className='name-card'>{item?.author}</div>
      <div className='time-card'>{timeStamp(item?.timestamp)}</div>
      <div className='button-card'>
        <button className='button-a' onClick={()=>{navigate(`/question/${item?.id}`)}}>Show</button>
      </div>
    </div>
  )
}
