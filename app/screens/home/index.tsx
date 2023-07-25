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

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const { data } = useQuery({ queryKey: ['list'], queryFn: getItemsList });
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const context = useTheme();
  const styles = styling(context.theme);

  console.log(context);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleHideModalPress = useCallback(() => {
    context.toggleTheme();
    bottomSheetModalRef.current?.close();
  }, [context]);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Tus lista</Text>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
        >
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Awesome 🎉</Text>
            <Button
              onPress={handleHideModalPress}
              title="Present Modal"
              color="black"
            />
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styling = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: theme.colors.white,
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontFamily: FontFamily.bold,
      fontSize: 32,
      color: theme.colors.dark,
    },
  });
};

export default Home;
