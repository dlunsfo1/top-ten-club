import React from 'react';

const input = (props) => {
    let inputElement = null;
    console.log('type', props.elementConfig.type);
    if (props.elementConfig.type === 'text') {
      inputElement = <input {...props.elementConfig} 
      value={props.value} 
      onChange={props.changed} />;
    } else if (props.elementConfig.type === 'textara') {
      inputElement = <textarea {...props.elementConfig} 
      value={props.value} 
      onChange={props.changed} />;
    } else if (props.elementConfig.type === 'select') {
      console.log('in the selection', props.elementConfig.options)
    inputElement = (<select
      value={props.value}
      onChange={props.changed} >

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