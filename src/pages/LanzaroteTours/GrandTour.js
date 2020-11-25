import React from "react";
import Tour from "./Tour";

import appStoreIcon from '../../img/svg/appStore.svg';
import googlePlay from '../../img/svg/googlePlay.svg';

const GrandTour = () => {
    const props = {
        headerTitle: 'Grand Tour',
        headerSubtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, suscipit sed ac vitae, massa. Tortor eget habitant sollicitudin velit. Mauris diam orci aliquam quisque tortor.',
        appStoreIcon: appStoreIcon,
        googlePlay: googlePlay,
    }
    return (
        <Tour {...props}/>
    )
};

export default GrandTour;