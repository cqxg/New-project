import React from 'react'
import { useTranslation } from 'react-i18next'

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import Footer from '../../components/Footer/Footer'
import RenderBackgroundBubbles from '../../components/RenderBgBubbles';

import appStore from "../../img/images/appstore.svg";
import googleplay from "../../img/images/googleplay.svg";
import fbblack from "../../img/svg/fbblack.svg";
import instblack from "../../img/svg/instblack.svg";

import './Contacts.scss'

const Contacts = () => {
    const { t } = useTranslation()
    return (
        <div className="contacts">
            {RenderBackgroundBubbles(5)}
            <BreadCrumbs scheme="contacts" />
            <div className="container">
                <h1 className="contactsTitle">
                    {t('contactsTitle')}
                </h1>
                <div className="contacts__flex">
                    <div className="contacts__left">
                        <div className="contacts__left-item">
                            <span>{t('adress')}:</span>
                            <p>Calle Benahore 20, 35571 Yaiza (Las Palmas), Lanzarote</p>
                        </div>
                        <div className="contacts__left-item">
                            <span>{t('phone')}:</span>
                            <p><a href="tel:+34623011141">+34 623 011 141</a></p>
                        </div>
                        <div className="contacts__left-item">
                            <span>{t('email')}:</span>
                            <p><a href="mailto:info@vidodoguide.com">info@vidodoguide.com</a></p>
                        </div>
                        <div className="contacts__left-socials">
                            <div className="contacts__left-stores">
                                <img src={appStore} alt="app-store" />
                                <img src={googleplay} alt="google-play" />
                            </div>
                            <div className="contacts__left-inst">
                                <img src={fbblack} alt="" />
                                <img src={instblack} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contacts