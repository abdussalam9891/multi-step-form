import React from 'react'

const steps = [
  {id: 1, subtitle: "STEP1", title: "YOUR INFO"},
  {id: 2, subtitle: "STEP2", title: "SELECT PLAN"},
  {id: 3, subtitle: "STEP3", title: "ADD-ONS"},
  {id: 4, subtitle: "STEP4", title: "SUMMARY"},
]

const Sidebar = ({currentStep}) => {
  return (
    <div className='slidebar'>
      <ol className='stepper'>
        {steps.map(step =>(
          <li key={step.id} className={`${step.id === currentStep ? "active" : ""}`}>
            <span className='step-number'>{step.id}</span>
            <div className='step-label'>
              <span className='step-subtitle'>{step.subtitle}</span>
              <span className='step-title'>{step.title}</span>
            </div>
          </li>
        ))}
      </ol>


    </div>
  )
}

export default Sidebar
