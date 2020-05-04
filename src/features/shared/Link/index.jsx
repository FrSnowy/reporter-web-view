import React from 'react';
import { LinkElement } from './elements';

const Link = ({ state = 'default', ...props}) => <LinkElement {...props} state = {state} />

export default Link;