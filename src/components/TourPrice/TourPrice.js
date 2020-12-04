import React from 'react'
import { useTranslation } from 'react-i18next';
import Cards from '../Cards/Cards';

const TourPrice = () => {
    const {t} = useTranslation()
    return (
        <Cards scheme="desc-card" tourname={t("grandTour")} />
    );
}

export default TourPrice;