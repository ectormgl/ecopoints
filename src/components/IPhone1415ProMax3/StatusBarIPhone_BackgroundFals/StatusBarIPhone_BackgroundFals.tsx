import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { LevelsIcon } from './LevelsIcon.js';
import classes from './StatusBarIPhone_BackgroundFals.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 2:721 */
export const StatusBarIPhone_BackgroundFals: FC<Props> = memo(function StatusBarIPhone_BackgroundFals(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.time}>
        <div className={classes.time2}>9:41</div>
      </div>
      <div className={classes.levels}>
        <LevelsIcon className={classes.icon} />
      </div>
    </div>
  );
});
