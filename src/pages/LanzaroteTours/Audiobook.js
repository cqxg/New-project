import React from "react";
import Tour from "./Tour";

import appStoreIcon from '../../img/svg/appStore.svg';
import googlePlay from '../../img/svg/googlePlay.svg';
import { useTranslation } from "react-i18next";

const Audiobook = () => {
    const { t } = useTranslation();

    const props = {
        headerTitle: 'Audiobook',
        headerSubtitle: t('audioBookHeaderDescription'),
        appStoreIcon: appStoreIcon,
        googlePlay: googlePlay,
        aboutTitle: t('aboutAudiobook'),
        aboutLeft: t('grandTourAboutLeft'),
        aboutRight: t('grandTourAboutRight'),
        scheme: 'audiobook'
    }
    return (
        <Tour {...props}/>
    )
};

export default Audiobook;