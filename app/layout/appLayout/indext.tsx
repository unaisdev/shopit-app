import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useTheme } from '../../containers/appTheme';
import { Theme } from '../../theme/types';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';

interface AppLayout {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayout) => {
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();

  const style = styling(theme, insets);

  return <View style={style.container}>{children}</View>;
};

const styling = (theme: Theme, insets: EdgeInsets) => {
  const paddingVertical = 24;
  const paddingHorizontal = 12;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      paddingTop: insets.top + paddingVertical,
      paddingBottom: insets.bottom + paddingVertical,
      paddingLeft: insets.left + paddingHorizontal,
      paddingRight: insets.right + paddingHorizontal,
    },
  });
};

export default AppLayout;
