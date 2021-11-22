import './styles/css/styles.css';
import { useState } from 'react';
import BgInput from './components/BgInput';
import ColourInput from './components/ColourInput';
import FontSizeInput from './components/FontSizeInput';

const App = () => {
  const [theme, setTheme] = useState({
    size: 'md',
    background: 'light',
    color: 'green',
  });

  const { size, background, color } = theme;

  const onChange = (e) => {
    const { name, value } = e.target;
    setTheme((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div
        data-theme-size={size}
        data-theme-background={background}
        data-theme-color={color}
        className='size background color'>
        <header className='d-flex justify-content-between p-4'>
          <h1 className='color-primary'>Theme Switcher</h1>
          <form onChange={onChange}>
            <h2 className='color-primary text-align-end'>
              Change Background Color
            </h2>
            <div className='d-flex align-items-center py-2'>
              <BgInput
                backgroundColor='#f2f2f2'
                color='#000'
                value='light'
                label='Light'
                defaultChecked
              />
              <BgInput
                backgroundColor='#666'
                color='#f2f2f2'
                value='grey'
                label='Grey'
              />
              <BgInput
                backgroundColor='#000'
                color='#f2f2f2'
                value='dark'
                label='Dark'
              />
            </div>
          </form>
        </header>

        <main className='p-4'>
          <form onChange={onChange}>
            <div className='theme-color'>
              <h2 className='color-primary'>Change Theme Colors</h2>
              <div className='w-50 d-flex justify-content-start align-items-center py-2'>
                <ColourInput
                  label='Blue'
                  value='blue'
                  color='#1da1f2'
                  defaultChecked
                />
                <ColourInput label='Yellow' value='yellow' color='#ffad1f' />
                <ColourInput label='Red' value='red' color='#e0255e' />
                <ColourInput label='Purple' value='purple' color='#794bc3' />
                <ColourInput label='Orange' value='orange' color='#f45e22' />
                <ColourInput label='Green' value='green' color='#48d1cc' />
              </div>
            </div>
            <div className='theme-size mt-4'>
              <h2 className='color-primary'>Change Theme Sizes</h2>
              <div className='w-50 d-flex justify-content-between align-items-center py-2'>
                <label
                  htmlFor='xs'
                  className='color-primary'
                  style={{ fontSize: '0.8rem' }}>
                  <b>Aa</b>
                </label>
                <FontSizeInput
                  label='xs'
                  value='xs'
                  size='0.8rem'
                  color={color}
                />
                <FontSizeInput
                  label='sm'
                  value='sm'
                  size='0.9rem'
                  color={color}
                />
                <FontSizeInput
                  label='md'
                  value='md'
                  size='1rem'
                  color='color-primary'
                  defaultChecked
                />
                <FontSizeInput
                  label='lg'
                  value='lg'
                  size='1.1rem'
                  color='color-primary'
                />
                <FontSizeInput
                  label='xl'
                  value='xl'
                  size='1.2rem'
                  color='color-primary'
                />
                <label
                  htmlFor='xl'
                  className='color-primary'
                  style={{ fontSize: '1.2rem' }}>
                  <b>Aa</b>
                </label>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default App;
