import {COLORS} from '@constants/colors';
import {SettingsIcon} from '@svg/SettingsIcon';
import React from 'react';

type Props = {
  focused: boolean;
};

export const SettingsTabIcon = ({focused}: Props) => {
  return (
    <SettingsIcon
      width={24}
      height={24}
      color={focused ? COLORS.white : COLORS.main}
    />
  );
};
