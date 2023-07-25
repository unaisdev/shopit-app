import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface CreateShopListButtonProps {
  onPress: () => void;
}

const CreateShopListButton = ({ onPress }: CreateShopListButtonProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        paddingBottom: insets.bottom + 24,
      }}
    >
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#E25100',
          width: 62,
          height: 62,
          borderRadius: 24,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../../../assets/icons/plus.png')}
          style={{ width: 24, height: 24, tintColor: 'white' }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CreateShopListButton;
