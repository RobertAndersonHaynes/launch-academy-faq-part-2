import React from 'react'

const TextField = props => {
  return (
    <label>{props.label}
      <input
        type="text"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </label>
  );
}

export default TextField
