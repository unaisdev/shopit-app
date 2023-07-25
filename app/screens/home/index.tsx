import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RootNavigationProp } from '../../navigation';
import { useQuery } from '@tanstack/react-query';
import { getItemsList } from '../../services/list';
import CreateShopList from './components/createShopListButton';
import CreateShopListModal from './components/createShopListModal';
import useModalAction from './hooks/useModalAction';
import AppLayout from '@app/layout/appLayout';
import { Theme } from '@app/theme/types';
import { FontFamily } from '@app/theme/Font';
import { useTheme } from '@app/containers/appTheme';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  // const { data } = useQuery({ queryKey: ['list'], queryFn: getItemsList });
  const { bottomSheetModalRef, handlePresentModalPress } = useModalAction();

  const context = useTheme();
  const styles = styling(context.theme);

  return (
    <AppLayout>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Tus lista</Text>
      </View>
      <CreateShopList onPress={handlePresentModalPress} />
      <CreateShopListModal ref={bottomSheetModalRef} />
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
