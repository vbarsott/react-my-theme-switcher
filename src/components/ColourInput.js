import React from 'react';

const ColourInput = ({ color, label, value, defaultChecked = false }) => {
  return (
    <>
      <div
        className='d-flex flex-column align-items-center me-2 p-3'
        style={{ color, borderRadius: '50%', border: `1px solid ${color}` }}>
        <input
          type='radio'
          name='color'
          value={value}
          id={value}
          defaultChecked={defaultChecked}
        />
        <label htmlFor={value} className='p-1'>
          {label}
        </label>
      </div>
    </>
  );
};

export default ColourInput;
