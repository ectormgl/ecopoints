import { memo, SVGProps } from 'react';

const LevelsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 141 54' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect opacity={0.35} x={81.5} y={23} width={25} height={13} rx={4.3} stroke='black' />
    <path
      opacity={0.4}
      d='M107.5 27.7811V31.8566C108.305 31.5114 108.828 30.7085 108.828 29.8189C108.828 28.9293 108.305 28.1263 107.5 27.7811'
      fill='black'
    />
    <rect x={83.5} y={25} width={21} height={9} rx={2.5} fill='black' />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M65.7705 26.104C68.2576 26.1041 70.6496 27.0262 72.4521 28.6797C72.5879 28.8074 72.8048 28.8058 72.9385 28.6761L74.236 27.4126C74.3037 27.3469 74.3414 27.2578 74.3409 27.1651C74.3403 27.0724 74.3015 26.9838 74.233 26.9188C69.502 22.5441 62.0383 22.5441 57.3073 26.9188C57.2387 26.9837 57.1999 27.0724 57.1992 27.165C57.1986 27.2577 57.2363 27.3468 57.3039 27.4126L58.6018 28.6761C58.7354 28.8059 58.9525 28.8076 59.0881 28.6797C60.8909 27.0261 63.2832 26.104 65.7705 26.104ZM65.7672 30.3243C67.1245 30.3242 68.4334 30.836 69.4395 31.7601C69.5756 31.8913 69.7899 31.8884 69.9226 31.7537L71.2099 30.4344C71.2777 30.3652 71.3153 30.2713 71.3143 30.1738C71.3133 30.0762 71.2738 29.9831 71.2047 29.9153C68.1408 27.0245 63.3961 27.0245 60.3323 29.9153C60.2631 29.9831 60.2236 30.0762 60.2227 30.1738C60.2218 30.2714 60.2595 30.3653 60.3274 30.4344L61.6143 31.7537C61.747 31.8884 61.9614 31.8913 62.0974 31.7601C63.1029 30.8366 64.4107 30.3249 65.7672 30.3243ZM68.2916 33.1179C68.2935 33.2232 68.2565 33.3248 68.1892 33.3986L66.0125 35.8533C65.9487 35.9255 65.8617 35.9661 65.7709 35.9661C65.6802 35.9661 65.5932 35.9255 65.5294 35.8533L63.3523 33.3986C63.2851 33.3247 63.2481 33.2231 63.2501 33.1178C63.2521 33.0124 63.2929 32.9127 63.3629 32.842C64.753 31.5282 66.7889 31.5282 68.179 32.842C68.2489 32.9127 68.2897 33.0125 68.2916 33.1179Z'
      fill='black'
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M49.7 24.6821C49.7 24.049 49.2224 23.5358 48.6333 23.5358H47.5667C46.9776 23.5358 46.5 24.049 46.5 24.6821V34.616C46.5 35.2491 46.9776 35.7622 47.5667 35.7622H48.6333C49.2224 35.7622 49.7 35.2491 49.7 34.616V24.6821ZM42.2659 25.9811H43.3326C43.9217 25.9811 44.3992 26.5066 44.3992 27.1548V34.5885C44.3992 35.2367 43.9217 35.7622 43.3326 35.7622H42.2659C41.6768 35.7622 41.1992 35.2367 41.1992 34.5885V27.1548C41.1992 26.5066 41.6768 25.9811 42.2659 25.9811ZM37.9341 28.6302H36.8674C36.2783 28.6302 35.8008 29.1623 35.8008 29.8188V34.5735C35.8008 35.23 36.2783 35.7622 36.8674 35.7622H37.9341C38.5232 35.7622 39.0008 35.23 39.0008 34.5735V29.8188C39.0008 29.1623 38.5232 28.6302 37.9341 28.6302ZM32.6333 31.0754H31.5667C30.9776 31.0754 30.5 31.6 30.5 32.2471V34.5905C30.5 35.2377 30.9776 35.7622 31.5667 35.7622H32.6333C33.2224 35.7622 33.7 35.2377 33.7 34.5905V32.2471C33.7 31.6 33.2224 31.0754 32.6333 31.0754Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(LevelsIcon);
export { Memo as LevelsIcon };
