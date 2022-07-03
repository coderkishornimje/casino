import React from 'react'
import './Main.css';
import Button from '@mui/material/Button';
import GridTable from './GridTable';
import TableRows from './TableRows';
const Main = () => {
  return (
    <div className='container'>
      <img src="images/img1.jpg"/>
     
    <div className='top-right'>
    <Button variant="contained" size="large" onClick={()=>alert("welcome")}>
         <h3>START</h3>
    </Button>
    </div>
    <div className='main-table'>   
    <GridTable/>
    <TableRows/>
    <div className='slot-button'>
    <Button variant="outlined">Slot-1</Button>
    <Button variant="outlined">Slot-2</Button>
    <Button variant="outlined">Slot-3</Button>
    </div>
    </div>
    </div>
  )
}

export default Main