import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Spacing } from '../../../../theme/metrics';
import LightTheme from '../../../../theme/lightTheme';

interface CreateShopListButtonProps {
  onPress: () => void;
}

const CreateShopListButton = ({ onPress }: CreateShopListButtonProps) => {
  const insets = useSafeAreaInsets();
  const styles = styling(insets);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Image
          source={require('../../../../assets/icons/plus.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styling = (insets: EdgeInsets) => {
  return StyleSheet.create({
    container: {
      position: 'absolute',
      bottom: 0,
      alignSelf: 'center',
      paddingBottom: insets.bottom + Spacing.xl,
    },
    button: {
      backgroundColor: '#E25100',
      width: 62,
      height: 62,
      borderRadius: 24,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      width: 24,
      height: 24,
      tintColor: LightTheme.colors.white,
    },
  });
};

export default CreateShopListButton;
