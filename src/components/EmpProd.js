import React from 'react'
import "./styleEmpProd.css"
import { useNavigate } from 'react-router-dom'

const EmpProd = () => {

    const navigate = useNavigate();
    
    function handleClick1(){
        navigate("/EmployeeList.js")
    }

  return (
    <div className='login'>
        <div className='logo1'></div>
        <div className='logo2'></div>
        <div className='text2'>4</div>
        <div className='mop'></div>
        <div className='box1'></div>
        <div className='box2'></div>
        <div className='textbox2'>Employee Productivity Dashboard</div>
        
        <div className='prod'>
            <div className='monn'>
                <div className='monday'>Productivity on Monday</div>
                <div className='monprod'>4%</div>
                <div className='monbar'></div>
            </div>

            <div className="tuee">
                <div className='tueday'>Productivity on Tueday</div>
                <div className='tueprod'>92%</div>
                <div className='tuebar'></div>
            </div>

            <div className='wedd'>
                <div className='wedday'>Productivity on Wednesday</div>
                <div className='wedprod'>122%</div>
                <div className='wedbar'></div>
            </div>

            <div className='thuu'>
                <div className='thuday'>Productivity on Thursday</div>
                <div className='thuprod'>93%</div>
                <div className='thubar'></div>
            </div>

            <div className='frii'>
                <div className='friday'>Productivity on Friday</div>
                <div className='friprod'>89%</div>
                <div className='fribar'></div>
            </div>

            <div className='satt'>
                <div className='satday'>Productivity on Saturday</div>
                <div className='satprod'>98%</div>
                <div className='satbar'></div>
            </div>
        </div>

        <div className='rect'>
            <div onClick={handleClick1} className='homebtn1'></div>
            <div className='homebtn'></div>
            <div className='homeicon'></div>
            <div className='profileicon'></div>
        </div>

    </div>
  )
}

export default EmpProd