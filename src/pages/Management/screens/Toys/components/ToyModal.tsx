import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import styles from './ToyModal.module.scss';
import Input from '../../../../../shared/formComponents/Input';
import { useAppDispatch } from '../../../../../redux/store';
import { format } from 'date-fns';
import Select from '../../../../../shared/formComponents/Select';
import { IToy } from '../../../../../models/toy';
import { toyStateOptions } from '../../../../../constants/toys';
import api from '../../../../../api';
import {
  addToyAdmin,
  updateToyAdmin,
} from '../../../../../redux/slices/toysAdmin.slice';

interface ToyModalProps {
  editableToy: IToy | null;
  isModalOpen: boolean;
  closeModal: () => void;
}

interface IToyForm {
  toyId: { label: string; value: string } | null | undefined;
  quantity?: number;
  usageCycle: number;
  lastDisinfectionDate: string | Date;
  toyState: { label: string; value: string } | null | undefined;
}

const today = new Date();
const defaultValues: IToyForm = {
  toyId: null,
  usageCycle: 0,
  quantity: 0,
  lastDisinfectionDate: today,
  toyState: null,
};

// format(today, 'yyyy-MM-dd')

const getValueBySelectedOption = (
  option: { label: string; value: string } | null | undefined
) => {
  return option?.value ? option.value : ((option ? option : '') as string);
};

const transformEditableToy = (editableToy: IToy): IToyForm => {
  const toyState = toyStateOptions.find(
    option => option.value === editableToy.toyState
  );
  const toyId = { label: editableToy.toyName, value: editableToy.toyId };
  return {
    ...editableToy,
    toyState,
    toyId,
    lastDisinfectionDate: format(
      new Date(editableToy.lastDisinfectionDate),
      'yyyy-MM-dd'
    ),
  };
};

const ToyModal: FC<ToyModalProps> = ({
  isModalOpen,
  closeModal,
  editableToy,
}) => {
  const dispatch = useAppDispatch();
  const { register, control, handleSubmit, reset } = useForm<IToyForm>({
    mode: 'onBlur',
    values: editableToy ? transformEditableToy(editableToy) : defaultValues,
  });
  const [toysFullList, setToysFullList] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      const { data } = await api.get('/toys');
      setToysFullList(
        data.map((toy: IToy) => ({ label: toy.toyName, value: toy.toyId }))
      );
    };
    fetchToys();
  }, []);

  const onSubmit = async (data: IToyForm) => {
    const transformedData = {
      ...data,
      usageCycle: +data.usageCycle,
      quantity: +(data.quantity ?? 0),
      toyId: getValueBySelectedOption(data.toyId),
      toyState: getValueBySelectedOption(data.toyState),
      lastDisinfectionDate: new Date(data.lastDisinfectionDate),
    };
    if (editableToy) {
      dispatch(updateToyAdmin(transformedData));
    } else {
      dispatch(addToyAdmin(transformedData));
    }
      console.log(transformedData)
    reset();
    closeModal();
  };

  return (
    <div onClick={closeModal} className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}>
      <div onClick={e => e.stopPropagation()} className={styles.modalContent}>
        <div className={styles.close} onClick={closeModal}>
          Закрити
        </div>
        <h2>{editableToy ? 'Редагування іграшки' : 'Додати іграшку'}</h2>
        <form className={styles.toyForm} onSubmit={handleSubmit(onSubmit)}>
          {editableToy ? (
            // <Input label="Назва іграшки" disabled />
            <input type="text" value={editableToy.toyName} disabled />
          ) : (
              <Controller
                control={control}
                name="toyId"
                render={({ field }) => (
                  <Select label="Іграшка" {...field} options={toysFullList} />
                )}
              />            
          )}

          {!editableToy && (
            <Input
              label="Кількість іграшок"
              {...register('quantity')}
              name="quantity"
              type="number"
            />
          )}
          <Input
            label="Цикл користування"
            {...register('usageCycle')}
            name="usageCycle"
            type="number"
          />
          <Input
            label="Дата дезінфекції"
            type="date"
            {...register('lastDisinfectionDate')}
            name="lastDisinfectionDate"
          />
          <Controller
            control={control}
            name="toyState"
            render={({ field }) => (
              <Select
                label="Стан іграшки"
                {...field}
                options={toyStateOptions}
              />
            )}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};
7;

export default ToyModal;
