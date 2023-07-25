import BottomSheet from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';

const useModalAction = () => {
  const bottomSheetModalRef = useRef<BottomSheet>(null);

  const handlePresentModalPress = useCallback(() => {
    console.log({ bottomSheetModalRef });

    bottomSheetModalRef.current?.expand();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  return { handlePresentModalPress, handleSheetChanges, bottomSheetModalRef };
};

export default useModalAction;
