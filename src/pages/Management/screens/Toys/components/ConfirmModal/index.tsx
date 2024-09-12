import { useDispatch } from 'react-redux';
import { deleteToyAdmin } from '../../../../../../redux/slices/toysAdmin.slice';
import { AppDispatch } from '../../../../../../redux/store';
import {
  BackdropWrap,
  BtnWrap,
  CloseBtn,
  DialogueBtn,
  FormWrap,
  IconClose,
} from './ConfirmModal.styled';
import icons from '../../../../../../assets/icons.svg';

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
    <BackdropWrap
      onClick={closeModal}
      className={`${isModalOpen ? 'active' : ''}`}
    >
      <FormWrap onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={closeModal}>
          <IconClose>
            <use href={`${icons}#icon-close`} />
          </IconClose>
        </CloseBtn>
        <h2>Видалити іграшку зі списку?</h2>
        <BtnWrap>
          <DialogueBtn onClick={() => handleDelete(id)}>Так</DialogueBtn>
          <DialogueBtn onClick={() => closeModal()}>Ні</DialogueBtn>
        </BtnWrap>
      </FormWrap>
    </BackdropWrap>
  );
};
