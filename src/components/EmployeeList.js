import React, { useState } from 'react'
import "./styleEmpList.css"
import { useNavigate } from 'react-router-dom'
import Emp from './empApi.js'
import Empdata from './Empdata.js'


const EmployeeList = () => {

  const[empData,setEmpData] = useState(Emp);

  const[search,setSearch] = useState('');


  const navigate = useNavigate();
    
    function handleClick(){
        navigate("/EmpProd.js")
    }

  return (
    <div className='login'>
        <div className='roko'> 
          <div className='logo1'></div>
          <div className='logo2'></div>
          <div className='text2'>4</div>
          <div className='mop'></div>

          <input type='text' onChange={(e)=>setSearch(e.target.value)} placeholder="      Search with name" className='searchbar'></input>
          {/* <p className='namesearch'>Search with name</p> */}
          <div className='magglass'></div>
        </div>

        <Empdata empData={empData} search={search}/>

        <div className='rect'>
            <div onClick={handleClick} className='profileb'></div>
            <div className='profilebtn'></div>
            <div className='homeicon'></div>
            <div className='profileicon'></div>
        </div>
    </div>
  )
}

export default EmployeeList