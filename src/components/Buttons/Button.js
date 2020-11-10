import React from 'react';

import './Button.scss';

const Button = ({icon, type, text, onClick }) => <button onClick={onClick} className={`btn ${type}`}>{icon ? <img alt="icon" className="btn-icon" src={icon}/> : null}<span className='btn_text'>{text}</span></button>

export default Button;