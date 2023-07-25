import React, { forwardRef, useMemo } from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Theme } from '@app/theme/types';
import { FontFamily } from '@app/theme/Font';
import { useTheme } from '@app/containers/appTheme';
import { Spacing } from '@app/theme/metrics';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface CreateShopListModalProps {}

const CreateShopListModal = (
  {}: CreateShopListModalProps,
  ref: React.ForwardedRef<BottomSheet>,
) => {
  const { theme } = useTheme();
  const styles = styling(theme);

  const snapPoints = useMemo(() => ['60%'], []);

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      keyboardBehavior="fillParent"
    >
      <View style={styles.contentContainer}>
        <Image
          source={require('../../../../assets/ilustrations/notes.png')}
          style={styles.icon}
        />
        <Text style={styles.title}>Nombre de la lista</Text>
        <BottomSheetTextInput style={styles.input} />
        <View style={styles.buttonContianer}>
          <TouchableOpacity style={styles.button} onPress={() => ({})}>
            <Text style={styles.buttonText}>Crear nueva lista</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BottomSheet>
  );
};

const styling = (theme: Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: 'grey',
    },
    contentContainer: {
      flex: 1,
      alignItems: 'center',
      paddingHorizontal: Spacing.xl,
      paddingVertical: Spacing.l,
    },
    title: {
      fontFamily: FontFamily.bold,
      fontSize: 24,
      marginVertical: Spacing.l,
      color: theme.colors.dark,
    },
    input: {
      marginTop: 8,
      marginBottom: Spacing.xl * 2,
      borderRadius: 10,
      fontSize: 16,
      lineHeight: 20,
      padding: 8,
      width: '80%',
      backgroundColor: theme.colors.gray,
      borderColor: '#A4A4A4',
      borderWidth: 2,
    },
    icon: {
      width: 124,
      height: 124,
    },
    buttonContianer: {
      flexGrow: 1,
      justifyContent: 'flex-end',
      width: '60%',
    },
    button: {
      backgroundColor: '#E25100',
      borderRadius: 24,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 62,
    },
    buttonText: {
      fontFamily: FontFamily.semi,
      fontSize: 18,
      marginVertical: Spacing.l,
      color: theme.colors.white,
    },
  });
};

export default forwardRef<BottomSheet, CreateShopListModalProps>(
  CreateShopListModal,
);
