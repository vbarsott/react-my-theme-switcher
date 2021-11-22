import React from 'react';

const BgInput = ({
  backgroundColor,
  color,
  value,
  label,
  defaultChecked = false,
}) => {
  return (
    <>
      <div
        className='me-2 p-3'
        style={{ backgroundColor, color, border: `1px solid ${color}` }}>
        <label className='me-1'>{label}</label>
        <input
          type='radio'
          name='background'
          value={value}
          id={value}
          defaultChecked={defaultChecked}
        />
      </div>
    </>
  );
};

export default BgInput;
