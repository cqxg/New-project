import React from 'react'
import { useTranslation } from 'react-i18next';
import constructor from '../../constructors/constructor';
import './TourFeatures.scss'

const TourFeatures = ({ scheme }) => {
    const featureConstructor = constructor[scheme].features
    const { t } = useTranslation()

    return (
        <div className="tourFeatures">
            <div className="container">
                <h1>{featureConstructor.title}</h1>
                <div className="tourFeatures__items">
                    {featureConstructor.items.map((item) => {
                        return (
                            <div className="tourFeatures__items-item">
                                <img src={item.img} alt="img" />
                                <p>{t(item.text)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TourFeatures;