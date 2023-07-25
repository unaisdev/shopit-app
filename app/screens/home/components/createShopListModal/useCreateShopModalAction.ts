import { createList } from '@app/services/list';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useState } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

const useCreateShopModalAction = (ref: React.RefObject<BottomSheet>) => {
  const [title, setTittle] = useState('');
  const queryClient = useQueryClient();

  const { status, error, mutate } = useMutation({
    mutationFn: createList,
    onSuccess(newList: any) {
      console.log({ newList });

      queryClient.setQueryData(['list'], oldData => {
        if (oldData) {
          return [...oldData, newList];
        }

        return [newList];
      });

      ref?.current?.close();
      setTittle('');
    },
  });

  const handleTitleChange = useCallback((text: string) => {
    setTittle(text);
  }, []);

  const handleSubmit = useCallback(() => {
    mutate({ title });
  }, [mutate, title]);

  return {
    title,
    handleTitleChange,
    handleSubmit,
  };
};

export default useCreateShopModalAction;
