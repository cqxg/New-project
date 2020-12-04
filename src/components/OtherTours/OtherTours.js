import React from 'react'
import Cards from '../Cards/Cards'

import car from "../../img/images/Lanzarote/mainslider/car.svg";
import grand from "../../img/images/Lanzarote/mainslider/grand.png";
import { useTranslation } from 'react-i18next';

import './OtherTours.scss'

const OtherTours = () => {
    const { t } = useTranslation()
    return (
        <div className="otherTours">
            <div className="container">
                <h1>{t('otherTours')}</h1>
                <div className="otherTours__flex">
                    <Cards
                        icon={car}
                        bgimage={grand}
                        scheme="img-card"
                        tourname={t("grandTour")}
                    />
                    <Cards
                        icon={car}
                        bgimage={grand}
                        scheme="img-card"
                        tourname={t("grandTour")}
                    />
                </div>
            </div>
        </div>
    )
}

export default OtherTours