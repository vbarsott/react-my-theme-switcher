import './styles/css/styles.css';
import { useState } from 'react';
import ColourInput from './components/ColourInput';
import FontSizeInput from './components/FontSizeInput';

const App = () => {
  const [theme, setTheme] = useState({
    size: '',
    color: '',
  });

  const { size, color } = theme;

  const onChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div
        data-theme-size={size}
        data-theme-color={color}
        className='size background color'>
        <header className='p-4'>
          <form
            onChange={onChange}
            className='d-flex justify-content-between align-items-center'>
            <h1 className='h1-stroke primary'>Theme Switcher</h1>
            <div className='theme-sizes background'>
              <h2 className='h2-stroke primary'>Change Theme Sizes</h2>
              <div className='d-flex justify-content-between align-items-center py-2'>
                <label
                  htmlFor='xs'
                  color='color'
                  style={{ fontSize: '0.8rem' }}>
                  <b>Aa</b>
                </label>
                <FontSizeInput
                  label='xs'
                  value='xs'
                  size='0.8rem'
                  color='color'
                />
                <FontSizeInput
                  label='sm'
                  value='sm'
                  size='0.9rem'
                  color='color'
                />
                <FontSizeInput
                  label='md'
                  value='md'
                  size='1rem'
                  color='color'
                  defaultChecked
                />
                <FontSizeInput
                  label='lg'
                  value='lg'
                  size='1.1rem'
                  color='color'
                />
                <FontSizeInput
                  label='xl'
                  value='xl'
                  size='1.2rem'
                  color='color'
                />
                <label
                  htmlFor='xl'
                  color='color'
                  style={{ fontSize: '1.2rem' }}>
                  <b>Aa</b>
                </label>
              </div>
            </div>
          </form>
        </header>

        <main>
          <form onChange={onChange}>
            <div className='theme-colors bg-theme p-4'>
              <h2 className='h2-stroke  primary mb-2'>Change Theme Colors</h2>
              <div className='w-50 d-flex justify-content-start align-items-center py-2'>
                <ColourInput
                  label='Light'
                  value='light'
                  backgroundColor='#f2f2f2'
                  color='#333'
                  defaultChecked
                />
                <ColourInput
                  label='Grey'
                  value='grey'
                  backgroundColor='#777'
                  color='#f2f2f2'
                />
                <ColourInput
                  label='Dark'
                  value='dark'
                  backgroundColor='#333'
                  color='#f2f2f2'
                />
                <ColourInput
                  label='Floral'
                  value='floral'
                  backgroundColor='#e8d9d4'
                  color='#333'
                />
                <ColourInput
                  label='Blue'
                  value='blue'
                  backgroundColor='#b8cad1'
                  color='#333'
                />
                <ColourInput
                  label='Yellow'
                  value='yellow'
                  backgroundColor='#f7f4e0'
                  color='#333'
                />
                <ColourInput
                  label='Green'
                  value='green'
                  backgroundColor='#d8dace'
                  color='#333'
                />
              </div>

              <div className='mt-2 fw-bold fs-4'>
                <h2 className='h2-stroke primary mx-2 '>Texts</h2>
                <p className='color mx-2 my-1'>Text color</p>
                <p className='primary mx-2 my-1'>Text primary</p>
                <p className='secondary mx-2 my-1'>Text secondary</p>
                <p className='accent mx-2 my-1'>Text accent</p>
              </div>
              <div className='mt-2 fw-bold fs-4'>
                <h2 className='h2-stroke primary mx-2 '>Headings</h2>
                <div className='d-flex align-items-end'>
                  <h1 className='h1 primary mx-2 '>H1</h1>
                  <h2 className='h2 primary mx-2 '>H2</h2>
                  <h3 className='h3 primary mx-2 '>H3</h3>
                  <h4 className='h4 primary mx-2 '>H4</h4>
                  <h5 className='h5 primary mx-2 '>H5</h5>
                  <h6 className='h6 primary mx-2 '>H6</h6>
                </div>
                <div className='d-flex align-items-end'>
                  <h1 className='h1 secondary mx-2 '>H1</h1>
                  <h2 className='h2 secondary mx-2 '>H2</h2>
                  <h3 className='h3 secondary mx-2 '>H3</h3>
                  <h4 className='h4 secondary mx-2 '>H4</h4>
                  <h5 className='h5 secondary mx-2 '>H5</h5>
                  <h6 className='h6 secondary mx-2 '>H6</h6>
                </div>
                <div className='d-flex align-items-end'>
                  <h1 className='h1-styled primary mx-2 '>H1</h1>
                  <h2 className='h2-styled primary mx-2 '>H2</h2>
                  <h3 className='h3-styled primary mx-2 '>H3</h3>
                  <h4 className='h4-styled primary mx-2 '>H4</h4>
                  <h5 className='h5-styled primary mx-2 '>H5</h5>
                  <h6 className='h6-styled primary mx-2 '>H6</h6>
                </div>
                <div className='d-flex align-items-end'>
                  <h1 className='h1-styled secondary mx-2 '>H1</h1>
                  <h2 className='h2-styled secondary mx-2 '>H2</h2>
                  <h3 className='h3-styled secondary mx-2 '>H3</h3>
                  <h4 className='h4-styled secondary mx-2 '>H4</h4>
                  <h5 className='h5-styled secondary mx-2 '>H5</h5>
                  <h6 className='h6-styled secondary mx-2 '>H6</h6>
                </div>
                <div className='d-flex align-items-end'>
                  <h1 className='h1-stroke primary mx-2 '>H1 stroke</h1>
                  <h2 className='h2-stroke primary mx-2 '>H2 stroke</h2>
                  <h3 className='h3-stroke primary mx-2 '>H3 stroke</h3>
                  <h4 className='h4-stroke primary mx-2 '>H4 stroke</h4>
                  <h5 className='h5-stroke primary mx-2 '>H5 stroke</h5>
                  <h6 className='h6-stroke primary mx-2 '>H6 stroke</h6>
                </div>
                <div className='d-flex align-items-end'>
                  <h1 className='h1-stroke secondary mx-2 '>H1 stroke</h1>
                  <h2 className='h2-stroke secondary mx-2 '>H2 stroke</h2>
                  <h3 className='h3-stroke secondary mx-2 '>H3 stroke</h3>
                  <h4 className='h4-stroke secondary mx-2 '>H4 stroke</h4>
                  <h5 className='h5-stroke secondary mx-2 '>H5 stroke</h5>
                  <h6 className='h6-stroke secondary mx-2 '>H6 stroke</h6>
                </div>
              </div>
            </div>
            <div className='theme-buttons p-4'>
              <h2 className='h2-stroke primary'>Theme Buttons</h2>
              <div className='d-flex p-2'>
                <button className='theme-btn-light my-2 me-4' type='submit'>
                  Button Light
                </button>
                <button className='theme-btn-dark my-2 me-4' type='submit'>
                  Button Dark
                </button>
                <button className='btn-accent-light my-2 me-4' type='submit'>
                  Accent Light
                </button>
                <button className='btn-accent-dark my-2' type='submit'>
                  Accent Dark
                </button>
              </div>
              <div className='bg-theme d-flex p-2'>
                <button className='theme-btn-light my-2 me-4' type='submit'>
                  Button Light
                </button>
                <button className='theme-btn-dark my-2 me-4' type='submit'>
                  Button Dark
                </button>
                <button className='btn-accent-light my-2 me-4' type='submit'>
                  Accent Light
                </button>
                <button className='btn-accent-dark my-2' type='submit'>
                  Accent Dark
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default App;
