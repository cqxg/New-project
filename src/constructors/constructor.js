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
      title: "Features",
      bubbles: [
        {
          icon: sun,
          text: "300 sunny days",
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
          text: "Canarian specialities",
        },
      ],
    },
  },
  main: {
    features: {
      title: "How it works?",
      subTitle: "Путеводитель, аудиогид, навигатор и твой надёжный друг в одном приложении! Теперь ты сможешь отдыхать комфортнее, имея всё необходимое под рукой.",
      bubbles: [
        {
          icon: device,
          text: "Download App to your iOS or Android device",
        },
        {
          icon: offline,
          text: "App work offline",
        },
        {
          icon: sound,
          text: "Listen to interesting stories of islands",
        },
        {
          icon: gps,
          text: "Audio tours play based on your GPS location",
        },
        {
          icon: restore,
          text: "Turn-by-turn navigation",
        },
      ],
    },
  },
};

export default constructor;
