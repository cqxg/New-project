import React from 'react';
import { Blob } from 'react-blob'

const SecondBlock = ({ t }) => (
    <div className='main_second__block'>
        <div className='main_second__block-cols'>
            <h1 className="main_second__block-title">{t('aboutVidodoGuide')}</h1>
            <p className="main_second__block-desc">{t('secondBlockDescOne')}</p>
            <p className="main_second__block-desc">{t('secondBlockDescTwo')}</p>
            <Blob size="13vh" style={{ zIndex: -1, backgroundColor: "#D5EFFB" }} animationDuration="25s">
                <i className="fab fa-react"></i>
            </Blob>
            <Blob size="35vh" style={{ zIndex: -1, backgroundColor: "#D5EFFB" }} animationDuration="25s">
                <i className="fab fa-react"></i>
            </Blob>
        </div>
        <div className='main_second__block-cols'>
            <p className="main_second__block-desc">{t('secondBlockDescThree')}</p>
            <p className="main_second__block-desc">{t('secondBlockDescFour')}</p>
            <Blob size="13vh" style={{ zIndex: -1, backgroundColor: "#D5EFFB" }} animationDuration="25s">
                <i className="fab fa-react"></i>
            </Blob>
            <Blob size="45vh" style={{ zIndex: -1, backgroundColor: "#D5EFFB" }} animationDuration="25s">
                <i className="fab fa-react"></i>
            </Blob>
        </div>
    </div>
);

export default SecondBlock;
