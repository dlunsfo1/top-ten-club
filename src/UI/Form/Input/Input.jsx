import React from 'react';

const input = (props) => {
    let inputElement = null;
    console.log('type', props.elementType);
    if (props.elementType === 'input') {
      inputElement = <input {...props.elementConfig} 
      value={props.value} 
      onChange={props.changed}  className='form-control'/>;
    } else if (props.elementType === 'textarea') {
      inputElement = <textarea {...props.elementConfig} 
      value={props.value} 
      onChange={props.changed} 
      className='form-control'/>;
    } else if (props.elementType === 'select') {
      console.log('in the selection', props.elementConfig.options)
    inputElement = (<select
      value={props.value}
      onChange={props.changed} 
      className='form-control'>

      {props.elementConfig.options.map(option => 
        (<option key={option.value} value={option.value}>{option.displayValue}</option>)
      )}

      </select>);
    }
  

  return (
  <div>
    <label htmlFor={props.label}>{props.label}</label>
    {inputElement}
  </div>
  )
}


export default input;