import React from 'react';
import { Blob } from 'react-blob'
import { useTranslation } from 'react-i18next';

import Button from '../../components/Buttons/Button';

import appStoreIcon from '../../img/svg/appStore.svg'

import "./Main.scss";

const Main = () => {
    const { t } = useTranslation();

    return (
        <div className='main_first__block'>
            <div className='main_first__block-content'>
                <div className='main_first__block-text'>
                    <h1>{t('mainFirstBlocTitle')}</h1>
                    <p>{t('mainFirstBlocSubtitle')}</p>
                </div>
                <div className='main_first__block-buttons'>
                    <Button icon={appStoreIcon} type='primary' text={t('appStoreBtn')} />
                    <Button type='success' text={t('googlePlayBtn')} />
                </div>
                <div className='main_first__block-qr'>
                    <span className='qr__desc'>{t('mainFirstBlockQr')}</span>
                    <div className='qr__img'></div>
                </div>
            </div>
            <div className='main_first__block-blob'>
                <Blob
                    size="55vh"
                    style={{
                        zIndex: -1,
                        backgroundColor: "#21D4FD",
                        color: "white",
                        opacity: 0.5,
                        fontSize: "80vh"
                    }}
                    animationDuration="20s"
                >
                    <i className="fab fa-react"></i>
                </Blob>
            </div>
        </div>
    )
}

export default Main;