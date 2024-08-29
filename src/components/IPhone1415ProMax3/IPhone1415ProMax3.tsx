import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { HomeIndicator_DeviceIPhoneOrie } from './HomeIndicator_DeviceIPhoneOrie/HomeIndicator_DeviceIPhoneOrie.js';
import { IPhone15Pro_ColorBlackTitanium } from './IPhone15Pro_ColorBlackTitanium/IPhone15Pro_ColorBlackTitanium.js';
import classes from './IPhone1415ProMax3.module.css';
import { Rectangle6Icon } from './Rectangle6Icon.js';
import { StatusBarIPhone_BackgroundFals } from './StatusBarIPhone_BackgroundFals/StatusBarIPhone_BackgroundFals.js';

interface Props {
  className?: string;
}
/* @figmaId 6:748 */
export const IPhone1415ProMax3: FC<Props> = memo(function IPhone1415ProMax3(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle7}></div>
      <StatusBarIPhone_BackgroundFals className={classes.statusBar} />
      <div className={classes.rectangle4}></div>
      <div className={classes.rectangle5}></div>
      <div className={classes.rectangle6}>
        <Rectangle6Icon className={classes.icon} />
      </div>
      <div className={classes._7471}></div>
      <div className={classes._3002211}></div>
      <div className={classes._59687641}></div>
      <div className={classes._59689581}></div>
      <div className={classes.donTHaveAnAcountSignUp}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}>Don’t have an acount? </span>
          <span className={classes.label2}>Sign up</span>
        </p>
      </div>
      <div className={classes.rememberMe}>Remember me</div>
      <div className={classes.forgotPassword}>Forgot password?</div>
      <div className={classes.signUpWith}>Sign up with:</div>
      <div className={classes.frame1}></div>
      <div className={classes._129063531}></div>
      <div className={classes.signUp}>Sign up</div>
      <div className={classes.email}>Email</div>
      <div className={classes.enterEmail}>Enter Email</div>
      <div className={classes.password}>Password</div>
      <div className={classes.enterPassword}>Enter Password</div>
      <div className={classes.back}>Back</div>
      <div className={classes.imgIcons81}></div>
      <div className={classes.welcomeBack}>Welcome back</div>
      <HomeIndicator_DeviceIPhoneOrie className={classes.homeIndicator} />
      <IPhone15Pro_ColorBlackTitanium
        className={classes.iPhone15Pro}
        classes={{ iPhone15ProBlackTitaniumPortra: classes.iPhone15ProBlackTitaniumPortra }}
      />
    </div>
  );
});
