import React from 'react';
import icons from './images';
import { IconContainer } from './elements';

const Icon = ({ name }) => {
  const icon = icons[name];
  if (!icons[name]) return <span>No image</span>;

  return (
    <IconContainer className = 'icon'>
      <img src = {icon} alt = 'Иконка' />
    </IconContainer>
  )
}

export default Icon;