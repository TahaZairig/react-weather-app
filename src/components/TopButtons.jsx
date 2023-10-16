import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



function TopButtons() {
    const cities = [
        {
            id: 1,
            title: 'London'
        },
        {
            id: 2,
            title: 'Sydney'
        },
        {
            id: 3,
            title: 'Tokyo'
        },
        {
            id: 4,
            title: 'Toronto'
        },
        {
            id: 5,
            title: 'Paris'
        },
    ]
  return (
    <div className='d-flex justify-content-around items-center mb-5'>  

        {cities.map((city) => (
            <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}    
    </div>

  ) 
}
export default TopButtons