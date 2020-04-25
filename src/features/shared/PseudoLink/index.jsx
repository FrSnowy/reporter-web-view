import React from 'react';
import { Link } from './elements';

const PseudoLink = ({ state = 'default', onClick = () => { }, children }) =>
  <Link state = {state} onClick = {onClick}>
    {children}
  </Link>

export default PseudoLink;