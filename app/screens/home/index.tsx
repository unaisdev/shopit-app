import {useNavigation} from '@react-navigation/native';
import React, {useRef, useCallback, useMemo} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';
import {RootNavigationProp} from '../../navigation';
import {useQuery} from '@tanstack/react-query';
import {getItemsList} from '../../services/list';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const Home = () => {
  const navigation = useNavigation<RootNavigationProp>();
  const {data} = useQuery({queryKey: ['list'], queryFn: getItemsList});
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetModalProvider>
      <View style={styles.container}>
        <Button
          onPress={handlePresentModalPress}
          title="Present Modal"
          color="black"
        />
        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={1}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}>
          <View style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
          </View>
        </BottomSheetModal>
      </View>
    </BottomSheetModalProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Home;
