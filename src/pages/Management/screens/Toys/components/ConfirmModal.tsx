import { useDispatch } from 'react-redux';
import styles from './ToyModal.module.scss';
import { deleteToyAdmin } from '../../../../../redux/slices/toysAdmin.slice';
import { AppDispatch } from '../../../../../redux/store';

type PropType = {
  closeModal(): void;
  isModalOpen: boolean;
  id: string;
};

export const ConfirmModal = ({ closeModal, isModalOpen, id }: PropType) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleDelete = (id: string) => {
    dispatch(deleteToyAdmin(id));
    closeModal();
  };
  return (
    <div
      onClick={closeModal}
      className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}
    >
      <div onClick={e => e.stopPropagation()} className={styles.modalContent}>
        <button className={styles.close} onClick={closeModal}>
          Закрити
        </button>
        <h2>Видалити іграшку зі списку?</h2>
        <div className={styles.buttonWrap}>
          <button className={styles.dialogueBtn} onClick={() => handleDelete(id)}>Так</button>
          <button className={styles.dialogueBtn} onClick={() => closeModal()}>
            Ні
          </button>
        </div>
      </div>
    </div>
  );
};
