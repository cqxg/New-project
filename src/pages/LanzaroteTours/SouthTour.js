import React from "react";
import Tour from "./Tour";

import appStoreIcon from '../../img/svg/appStore.svg';
import googlePlay from '../../img/svg/googlePlay.svg';
import { useTranslation } from "react-i18next";

const SouthTour = () => {
    const { t } = useTranslation();

    const props = {
        headerTitle: 'South Tour',
        headerSubtitle: t('grandTourHeaderDescription'),
        appStoreIcon: appStoreIcon,
        googlePlay: googlePlay,
        aboutTitle: t('aboutTour'),
        aboutLeft: t('grandTourAboutLeft'),
        aboutRight: t('grandTourAboutRight'),
        scheme: 'southTour'
    }
    return (
        <Tour {...props}/>
    )
};

export default SouthTour;