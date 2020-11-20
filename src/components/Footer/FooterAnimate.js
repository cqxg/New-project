import anime from "animejs";

export const FooterAnimate = (state, changeIndex) => {
  if (state) {
    changeIndex(false)
    anime({
      targets: '#morphing',
      d: [
          {value: 'M0 0V1080H1920V0H0ZM1579 502C1550.5 642 1605.5 668 1513 756.5C1420.5 845 1260 835 1133.5 814C1007 793 1013 893.5 866.5 883C720 872.5 694 793.76 583 727C504 679.47 478.39 592.13 473 574C469 560.44 432.08 430.34 498 362C548.69 309.45 611 344.36 771 323C915.2 303.75 913.23 267.64 1064 245C1195.73 225.21 1416.4 134.35 1492 193.5C1584.42 265.82 1607.5 362 1579 502Z'},
          {value: 'M0 0V1080H1920V0H0ZM1459 522C1458.9 557.77 1458.69 636.83 1402 698C1353 750.86 1288.51 761.61 1240 769C1137.13 784.67 1094.79 756 989 744C764.67 718.53 694 817.76 583 751C504 703.47 478.39 616.13 473 598C469 584.44 432.08 454.34 498 386C548.69 333.45 611 368.36 771 347C915.2 327.75 913.23 291.64 1064 269C1195.73 249.21 1291.4 234.85 1367 294C1459.42 366.32 1459.06 499.39 1459 522Z'},
          {value: 'M0 0V1080H1920V0H0ZM1585.5 550C1592 639 1635.5 718 1543 806.5C1450.5 895 1290 885 1163.5 864C1037 843 1043 943.5 896.5 933C750 922.5 634 893.5 568.5 815.5C503 737.5 372 751 336 622C300 493 245.5 339.5 387 243.5C528.5 147.5 711 81.5 848.5 162.5C986 243.5 950 264.5 1094 295C1238 325.5 1405.5 183.5 1522 243.5C1638.5 303.5 1579 461 1585.5 550Z'},
      ],
      easing: 'easeOutQuad',
      duration: 5000,
    });
  } else {
    anime({
      targets: '#morphing',
      d: [
          {value: 'M0.000152588 0.000110626V1080H1920V0.000110626H0.000152588ZM1920 415C1920 610 1976.69 1018.83 1920 1080C1871 1132.86 1628 1127 1542.5 1120.5C1457 1114 1111 1156 945 1147.5C779 1139 200.5 1272.26 89.5 1205.5C10.5 1157.97 0.000152588 1112 -28.4999 929.5C-57 747 5.34058e-05 666 -28.5001 525C-57.0002 384 -188.5 8.36 -28.4999 -13C115.7 -32.25 794.23 9.64021 945 -12.9998C1076.73 -32.7898 1844.4 -84.1498 1920 -24.9998C2012.42 47.3202 1920 242.5 1920 415Z'},
      ],
      easing: 'easeOutQuad',
      duration: 5000,
    });
  }
};