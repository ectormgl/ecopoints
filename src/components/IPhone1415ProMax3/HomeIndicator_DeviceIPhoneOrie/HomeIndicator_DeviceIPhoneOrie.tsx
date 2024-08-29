import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './HomeIndicator_DeviceIPhoneOrie.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 10:385 */
export const HomeIndicator_DeviceIPhoneOrie: FC<Props> = memo(function HomeIndicator_DeviceIPhoneOrie(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.homeIndicator}></div>
    </div>
  );
});
