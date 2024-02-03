import { FC, useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import styles from './ClientModal.module.scss'
import { IClient } from '../../../../../models/client';
import Input from '../../../../../shared/formComponents/Input';
import { useAppSelector } from '../../../../../redux/store';
import { format } from 'date-fns';
import Select from '../../../../../shared/formComponents/Select';
import api from '../../../../../api';
import { IToy } from '../../../../../models/toy';
import ReactInputMask from 'react-input-mask';

interface ClientModalProps {
  editableClient?: IClient | null;
  isModalOpen: boolean;
  closeModal: () => void;
}

type SelectField = { label: string; value: string }

interface IClientForm {
  _id?: string;
  parentName: string;
  parentSurname: string;
  phoneNumber: string;
  password: string;
  childName: string;
  childBirthDate: string;
  messenger: string;
  formType: SelectField;
  toys?: SelectField[];
  subscribtionStartDate?: string;
  subscribtionEndDate?: string;
}

const today = new Date()
const defaultValues = {
  parentName: '',
  parentSurname: '',
  phoneNumber: '',
  password: '',
  childName: '',
  childBirthDate: format(today, 'yyyy-MM-dd'),
  messenger: 'telegram',
  formType: { label: 'Онлайн', value: 'online' }
}

const statusOptions = [{ label: 'Онлайн', value: 'online' }, { label: 'Офлайн', value: 'offline' }]

const ClientModal: FC<ClientModalProps> = ({ isModalOpen, closeModal, editableClient }) => {
  // const dispatch = useAppDispatch()
  const { currentManager } = useAppSelector(state => state.manager)

  const { register, control, handleSubmit } = useForm<IClientForm>(
    {
      mode: 'onBlur', values: editableClient ? {
        ...editableClient,
        formType: statusOptions.find(option => option.value === editableClient.formType)!,
        childBirthDate: format(new Date(editableClient.childBirthDate), 'yyyy-MM-dd')
      } : defaultValues
    }
  );

  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [toyList, setToyList] = useState<IToy[]>([])

  useEffect(() => {
    if (currentManager?._id) {
      const fetchToys = async () => {
        const { data } = await api.get(`/toys/managementPoint/${currentManager._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('managerToken')}`
          }
        })
        setToyList(data)
      }
      fetchToys()
    }
  }, [currentManager?._id])


  const onSubmit = async (data: IClientForm) => {
    try {
      const clientValues = {
        ...data,
        formType: data.formType?.value,
        phoneNumber: phoneNumber,
        password: data.password || phoneNumber,
      }

      if (editableClient?._id) {
        const { password, ...clientValuesWithoutPassword } = clientValues
        const updatedClient = await api.put(`/management/clients/${editableClient._id}`, clientValuesWithoutPassword, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('managerToken')}`
          }
        });
        console.log("updatedClient", updatedClient);
      } else {
        const { data: registeredClient } = await api.post('/auth/register', clientValues);
        const userToken = registeredClient.token;
        const subscription = {
          toys: data.toys?.map(toy => toy.value),
          managementPointId: currentManager?._id,
        }

        await api.post('/subscription/sub', subscription, {
          headers: { Authorization: `Bearer ${userToken}` }
        });
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={`${styles.modal} ${isModalOpen ? styles.active : ""}`}>
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={closeModal}>Закрити</div>
        <h2>
          {editableClient?._id ? 'Редагувати клієнта' : 'Додати клієнта'}
        </h2>
        <form className={styles.clientForm} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.upper}>
            <Controller
              control={control}
              name="formType"
              render={({ field }) => (
                <Select label="Форма заповнення"  {...field} options={statusOptions} />
              )}
            />

          </div>
          <div className={styles.middle}>
            <div className={styles.left}>
              <Input label="Імя батька"  {...register('parentName')} name="parentName" />
              <Input label="Прізвище батька"  {...register('parentSurname')} name="parentSurname" />
              {/* <PhoneInput label="Номер телефону"  {...register('phoneNumber')} name="phoneNumber" /> */}
              <ReactInputMask className={styles.inputField} mask="+38 (999) 999 99 99" maskChar="_" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <Input label="Імя малюка"  {...register('childName')} name="childName" />
              <Input label="Дата народження малюка"  {...register('childBirthDate')} type="date" name="childBirthDate" />
              <Input label="Пароль"  {...register('password')} name="password" disabled={!!editableClient?._id} />
            </div>
            {!editableClient?._id && (
              <div className={styles.right}>
                <Controller
                  control={control}
                  name="toys"
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Іграшки в оренді"
                      multiple
                      options={toyList.map(toy => ({ label: toy.toyName, value: toy.toyId }))}
                    />
                  )}
                />
                <Input label="Дата отримання" {...register('subscribtionStartDate')} type="date" name="subscribtionStartDate" />
                <Input label="Дата повернення" {...register('subscribtionEndDate')} type="date" name="subscribtionEndDate" />
              </div>
            )}

          </div>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default ClientModal