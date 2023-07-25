import React, { forwardRef, useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { View, Text, StyleSheet } from 'react-native';

interface CreateShopListModalProps {}

const CreateShopListModal = (
  {}: CreateShopListModalProps,
  ref: React.ForwardedRef<BottomSheet>,
) => {
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default forwardRef<BottomSheet, CreateShopListModalProps>(
  CreateShopListModal,
);
