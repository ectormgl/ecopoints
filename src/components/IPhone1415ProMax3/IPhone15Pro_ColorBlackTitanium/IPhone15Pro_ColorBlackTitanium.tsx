import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './IPhone15Pro_ColorBlackTitanium.module.css';

interface Props {
  className?: string;
  classes?: {
    iPhone15ProBlackTitaniumPortra?: string;
    root?: string;
  };
}
/* @figmaId 1:800 */
export const IPhone15Pro_ColorBlackTitanium: FC<Props> = memo(function IPhone15Pro_ColorBlackTitanium(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div
        className={`${props.classes?.iPhone15ProBlackTitaniumPortra || ''} ${classes.iPhone15ProBlackTitaniumPortra}`}
      ></div>
    </div>
  );
});
