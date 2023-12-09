import React from 'react'
import "./styleEmpList.css"

const Empdata = ({empData,search}) => {

console.log(empData);
  return (
    <>
    <div className='aadmi'>
      {empData.filter((curElem)=>{
        return search === ''? curElem : curElem.name.includes(search)
      }).map((curElem)=>{
        return (
      <>
          <div className='empcard1' key={curElem.id}>
            <div className='e1'>EMP ID :<p className='number1'>{curElem.id}</p></div>
            <div className='n1'>Name   :<p className='name1'>{curElem.name}</p></div>
            <div className='d1'>DOB    :<p className='dob1'>{curElem.dob}</p></div>
            <div className='r1'>Role   :<p className='role1'>{curElem.role}</p></div>
            <div className='num1'>{curElem.id}</div>
          </div>
      </>
        )
      })}
    </div>
    </>
  )
}

export default Empdata