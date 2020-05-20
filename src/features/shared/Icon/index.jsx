import React from 'react';
import icons from './images';
import * as Elements from './elements';

const Icon = ({ name }) => {
  const icon = icons[name] || icons.empty;
  return (
    <Elements.Container className = 'icon'>
      <img src = {icon} alt = 'Иконка' />
    </Elements.Container>
  )
}

export default Icon;