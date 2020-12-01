import React from 'react'
import { useTranslation } from 'react-i18next';
import Audioplayer from '../../components/Audioplayer/Audioplayer';
import { Blob } from '../../components/Blob/Blob';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/Buttons/Button';

import './Tour.scss'

const Tour = ({ headerTitle, headerSubtitle, appStoreIcon, googlePlay, aboutTitle, aboutText, featuresItems, price }) => {
    const { t } = useTranslation();

    return (
        <div className="tour">
            <BreadCrumbs scheme="lanzarote" />
            <div className="tour__header">
                <div className="container">
                    <div className="tour__header-left">
                        <h1>{headerTitle}</h1>
                        <p>{headerSubtitle}</p>
                        <div className="tour__header-buttons">
                            <Button
                                icon={appStoreIcon}
                                type="primary"
                                text={t('appStoreBtn')}
                            />
                            <Button
                                icon={googlePlay}
                                type="success"
                                text={t('googlePlayBtn')}
                            />
                        </div>
                    </div>
                    <div className="tour__header-right">
                        <Blob
                            size="55vh"
                            style={{ zIndex: -1, backgroundColor: '#D5EFFB' }}
                            animationDuration="25s"
                        />
                    </div>
                </div>
            </div>
            <div className="tour__audio">
                <div className="container">
                    <Audioplayer tourName={headerTitle}/>
                </div>
            </div>
        </div>
    )
}

export default Tour