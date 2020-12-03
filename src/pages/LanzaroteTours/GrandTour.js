import React from "react";
import Tour from "./Tour";

import appStoreIcon from '../../img/svg/appStore.svg';
import googlePlay from '../../img/svg/googlePlay.svg';
import { useTranslation } from "react-i18next";

const GrandTour = () => {
    const { t } = useTranslation();

    const props = {
        headerTitle: 'Grand Tour',
        headerSubtitle: t('grandTourHeaderDescription'),
        appStoreIcon: appStoreIcon,
        googlePlay: googlePlay,
        aboutTitle: t('aboutTour'),
        aboutLeft: t('grandTourAboutLeft'),
        aboutRight: t('grandTourAboutRight'),
        scheme: 'grandTour'
    }
    return (
        <Tour {...props}/>
    )
};

export default GrandTour;