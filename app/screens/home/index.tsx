import { useNavigation } from '@react-navigation/native';
import React, { useRef, useCallback, useMemo } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { RootNavigationProp } from '../../navigation';
import { useQuery } from '@tanstack/react-query';
import { getItemsList } from '../../services/list';
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { FontFamily } from '../../theme/Font';
import { useTheme } from '../../containers/appTheme';
import { Theme } from '../../theme/types';
import CreateShopList from './components/createShopList';
import AppLayout from '../../layout/appLayout/indext';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const { data } = useQuery({ queryKey: ['list'], queryFn: getItemsList });
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const context = useTheme();
  const styles = styling(context.theme);

  return (
    <AppLayout>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tus lista</Text>
      </View>
      <CreateShopList />
    </AppLayout>
  );
};

const styling = (theme: Theme) => {
  return StyleSheet.create({
    headerContainer: {
      alignItems: 'center',
    },
    title: {
      fontFamily: FontFamily.semi,
      fontSize: 24,
      color: theme.colors.dark,
    },
  });
};

export default Home;
