import React from 'react'
import { useTranslation } from 'react-i18next';

import Cards from '../Cards/Cards';

import './TourPrice.scss'

const TourPrice = ({type, constructor}) => {
    const { t } = useTranslation()
    return (
        <div className="tourPrice">
            <div className="container">
                <h1>{t('excursionPrice')}</h1>
                <div className="tourPrice__flex">
                    <Cards constructor={constructor} scheme="desc-card" tourname={t("grandTour")} />
                </div>
            </div>
        </div>
    );
}

export default TourPrice;