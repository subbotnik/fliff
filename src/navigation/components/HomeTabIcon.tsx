import {COLORS} from '@constants/colors';
import {HomeIcon} from '@svg/HomeIcon';
import React from 'react';

type Props = {
  focused: boolean;
};

export const HomeTabIcon = ({focused}: Props) => {
  return (
    <HomeIcon
      width={40}
      height={40}
      color={focused ? COLORS.text : COLORS.main}
    />
  );
};
