import React from 'react'
import { useTranslation } from 'react-i18next';
import Slider from '../../components/Slider/Slider';
import Audioplayer from '../../components/Audioplayer/Audioplayer';
import { Blob } from '../../components/Blob/Blob';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Button from '../../components/Buttons/Button';
import TourFeatures from '../../components/TourFeatures/TourFeatures';
import About from '../Lanzarote/About/About';
import Footer from '../../components/Footer/Footer';

import './Tour.scss'
import constructor from '../../constructors/constructor';
import RenderBackgroundBubbles from '../../components/RenderBgBubbles';
import TourPrice from '../../components/TourPrice/TourPrice';
import OtherTours from '../../components/OtherTours/OtherTours';

const Tour = ({scheme, headerTitle, headerSubtitle, appStoreIcon, googlePlay, aboutTitle, aboutLeftText, aboutRightText, featuresItems, price }) => {
    const { t } = useTranslation();

    return (
        <div className="tour">
            {RenderBackgroundBubbles()}
            <BreadCrumbs scheme={scheme} />
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
            <About aboutTitle={aboutTitle} aboutLeftText={aboutLeftText} aboutRightText={aboutRightText}/>
            <TourFeatures scheme={scheme}/>
            <Slider constructor={constructor[scheme]}/>
            <TourPrice constructor={constructor[scheme]} type={scheme}/>
            <OtherTours/>
            <Footer/>
        </div>
    )
}

export default Tour