import { memo, SVGProps } from 'react';

const Rectangle6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 325 63' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 20C0 8.9543 8.95431 0 20 0H305C316.046 0 325 8.95431 325 20V43C325 54.0457 316.046 63 305 63H20C8.9543 63 0 54.0457 0 43V20Z'
      fill='#02391E'
      stroke='#AAAAAA'
    />
  </svg>
);

const Memo = memo(Rectangle6Icon);
export { Memo as Rectangle6Icon };
