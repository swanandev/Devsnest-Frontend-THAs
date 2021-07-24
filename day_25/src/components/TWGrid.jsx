import React from 'react'

const TWGrid = () => {
    const day_nos = ['01_2', '03', '04', '05', '06', '07', '08', '09','10', '11', '12', '13', '15'];
    return (
    <div className="tailwind-demo">
        <div style={{width:'80%'}} className='grid grid-cols-5'>
            {day_nos.map(el => <div className='gr-card'> {el} </div>)}
        </div>        
        <h3 className='div-title'>Tailwind</h3>
        <div className='hbreak'></div>
    </div>
    )
}

export default TWGrid
