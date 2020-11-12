import React from 'react';
import { useTranslation } from 'react-i18next';

import './Button.scss';

const Button = ({icon, type, text, onClick }) => {
    const { t } = useTranslation();
    return <button onClick={onClick} className={`btn ${type}`}>{icon ? <img alt="icon" className="btn-icon" src={icon}/> : null}<span className='btn_text'>{t(text)}</span></button>
}

export default Button;