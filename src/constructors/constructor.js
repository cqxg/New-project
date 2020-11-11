// Lanzarote features
import sun from "../img/svg/features/lanzarote/sun.svg";
import beaches from "../img/svg/features/lanzarote/beaches.svg";
import views from "../img/svg/features/lanzarote/views.svg";
import sport from "../img/svg/features/lanzarote/sport.svg";
import specialities from "../img/svg/features/lanzarote/specialities.svg";

// Main features
import device from "../img/svg/features/main/device.svg";
import gps from "../img/svg/features/main/gps.svg";
import offline from "../img/svg/features/main/offline.svg";
import restore from "../img/svg/features/main/restore.svg";
import sound from "../img/svg/features/main/sound.svg";

const constructor = {
  lanzarote: {
    headerTours: [
      {
        className: "active",
        frontText: "A",
        backText: "AAA",
      },
      {
        frontText: "G",
        backText: "GGG",
      },
      {
        frontText: "N",
        backText: "NNN",
      },
      {
        frontText: "S",
        backText: "SSS",
      },
    ],
    features: {
      title: "features",
      bubbles: [
        {
          icon: sun,
          text: "sunnyDays",
        },
        {
          icon: beaches,
          text: "Beaches",
        },
        {
          icon: views,
          text: "Views",
        },
        {
          icon: sport,
          text: "Sport",
        },
        {
          icon: specialities,
          text: "Specialities",
        },
      ],
    },
  },
  main: {
    features: {
      title: "howItWorks",
      subTitle: "travelGuide",
      bubbles: [
        {
          icon: device,
          text: "download device",
        },
        {
          icon: offline,
          text: "workOffline",
        },
        {
          icon: sound,
          text: "listenStories",
        },
        {
          icon: gps,
          text: "gpsLocation",
        },
        {
          icon: restore,
          text: "turnNavigation",
        },
      ],
    },
  },
};

export default constructor;
