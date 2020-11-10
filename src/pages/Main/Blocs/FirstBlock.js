import React from 'react';
import { Blob } from 'react-blob'

import Button from '../../../components/Buttons/Button';

import appStoreIcon from '../../../img/svg/appStore.svg';
import googlePlay from '../../../img/svg/googlePlay.svg';

const FirstBlock = ({ t }) => (
    <div className='main_first__block'>
        <div className='main_first__block-content'>
            <div className='main_first__block-text'>
                <h1>{t('mainFirstBlocTitle')}</h1>
                <p>{t('mainFirstBlocSubtitle')}</p>
            </div>
            <div className='main_first__block-buttons'>
                <Button icon={appStoreIcon} type='primary' text={t('appStoreBtn')} />
                <Button icon={googlePlay} type='success' text={t('googlePlayBtn')} />
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
                    backgroundColor: "#D5EFFB",
                    color: "white",
                    fontSize: "80vh"
                }}
                animationDuration="25s"
            >
                <i className="fab fa-react"></i>
            </Blob>
        </div>
    </div>
);

export default FirstBlock;
