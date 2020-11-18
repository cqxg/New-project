// Lanzarote features
import sun from '../img/svg/features/lanzarote/sun.svg';
import beaches from '../img/svg/features/lanzarote/beaches.svg';
import views from '../img/svg/features/lanzarote/views.svg';
import sport from '../img/svg/features/lanzarote/sport.svg';
import specialities from '../img/svg/features/lanzarote/specialities.svg';

// Main features
import device from '../img/svg/features/main/device.svg';
import gps from '../img/svg/features/main/gps.svg';
import offline from '../img/svg/features/main/offline.svg';
import restore from '../img/svg/features/main/restore.svg';
import sound from '../img/svg/features/main/sound.svg';

// Lanzarote isnand tours icons
import car from '../img/svg/bubbleWithImages/Lanzarote/car.svg';
import audiobookSvg from '../img/svg/bubbleWithImages/Lanzarote/audiobook.svg';
// Lanzarote isnand tours images
import grand from '../img/images/Lanzarote/tours/grand.jpg';
import north from '../img/images/Lanzarote/tours/north.jpg';
import south from '../img/images/Lanzarote/tours/south.jpg';
import audiobook from '../img/images/Lanzarote/tours/audiobook.jpg';
// Lanzarote slider images
import first from '../img/images/Lanzarote/slider/1.jpg';
import second from '../img/images/Lanzarote/slider/2.jpg';
import third from '../img/images/Lanzarote/slider/3.jpg';

// btn icons
import appStoreIcon from '../img/svg/appStore.svg';
import googlePlay from '../img/svg/googlePlay.svg';

const constructor = {
  lanzarote: {
    headerTours: [
      {
        className: 'active',
        frontText: 'A',
        backText: 'AAA',
      },
      {
        frontText: 'G',
        backText: 'GGG',
      },
      {
        frontText: 'N',
        backText: 'NNN',
      },
      {
        frontText: 'S',
        backText: 'SSS',
      },
    ],
    features: {
      title: 'features',
      bubbles: [
        {
          icon: sun,
          text: 'sunnyDays',
        },
        {
          icon: beaches,
          text: 'Beaches',
        },
        {
          icon: views,
          text: 'Views',
        },
        {
          icon: sport,
          text: 'Sport',
        },
        {
          icon: specialities,
          text: 'Specialities',
        },
      ],
    },
    bubblesWithImages: {
      title: 'islandTours',
      items: [
        {
          title: 'grandTour',
          icon: car,
          text: 'grandTourText',
          image: grand,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
        {
          title: 'northTour',
          icon: car,
          text: 'northTourText',
          image: north,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
        {
          title: 'southTour',
          icon: car,
          text: 'southTourText',
          image: south,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
        {
          title: 'audiobook',
          icon: audiobookSvg,
          text: 'audioBookText',
          image: audiobook,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
      ],
    },
    slider: {
      title: 'Island gallery',
      items: [
        {
          image: first,
        },
        {
          image: second,
        },
        {
          image: third,
        },
        {
          image: third,
        },
        {
          image: third,
        },
        {
          image: third,
        },
      ],
    },
  },
  main: {
    features: {
      title: 'howItWorks',
      subTitle: 'travelGuide',
      bubbles: [
        {
          icon: device,
          text: 'download device',
        },
        {
          icon: offline,
          text: 'workOffline',
        },
        {
          icon: sound,
          text: 'listenStories',
        },
        {
          icon: gps,
          text: 'gpsLocation',
        },
        {
          icon: restore,
          text: 'turnNavigation',
        },
      ],
    },
    bubblesWithImages: {
      title: 'Island Tours',
      buttons: [
        {
          icon: appStoreIcon,
          type: 'primary',
          text: 'appStoreBtn',
        },
        {
          icon: googlePlay,
          text: 'googlePlayBtn',
          type: 'success',
        },
      ],
      items: [
        {
          title: 'audioGuideTours',
          text: 'audioGuideTourText',
          image: audiobook,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
        {
          title: 'audiobook',
          text: 'audioBookText',
          image: audiobook,
          button: {
            type: 'revert',
            text: 'More',
          },
        },
      ],
    },
  },
};

export default constructor;