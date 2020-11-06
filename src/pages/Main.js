import React from 'react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t, i18n } = useTranslation();

    const setLanguage = (language) => i18n.changeLanguage(language);

    return (
        <>
            <h1>{t('language')}</h1>
            <div className='languages'>
                <div className='pl' onClick={() => setLanguage('pl')}>pl</div>
                <div className='en' onClick={() => setLanguage('en')}>en</div>
                <div className='de' onClick={() => setLanguage('de')}>de</div>
                <div className='es' onClick={() => setLanguage('es')}>es</div>
            </div>
        </>
    )
}

export default Main;