const FontSizeInput = ({ label, value, defaultChecked = false }) => {
  return (
    <>
      <div className='d-flex align-items-center flex-column'>
        <input
          type='radio'
          name='size'
          value={value}
          id={value}
          defaultChecked={defaultChecked}
        />
        <label className='mt-2' htmlFor={value}>
          {label}
        </label>
      </div>
    </>
  );
};

export default FontSizeInput;
