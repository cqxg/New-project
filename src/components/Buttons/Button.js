import React from 'react';

import './Button.scss';

const Button = ({ type, text }) => <div className={`btn ${type}`}><span className='btn_text'>{text}</span></div>

export default Button;