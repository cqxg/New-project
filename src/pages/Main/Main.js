import React from 'react';
import Goo from 'gooey-react';
import { useTranslation } from 'react-i18next';

const Main = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className='block_first'>
            <div>
                qq
            </div>
            <div>
                <Goo><svg>
                    <circle />
                    <circle />
                </svg></Goo>
            </div>
        </div>
    )
}

export default Main;