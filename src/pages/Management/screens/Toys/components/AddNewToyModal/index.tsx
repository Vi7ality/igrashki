import { FC, useState } from 'react';
import styles from '../ToyModal.module.scss';
import FormikInput from '../../../../../../shared/formComponents/FormikInput';
import api from '../../../../../../api';
import { IToyInfo } from '../../../../../../models/toy';
import { Form, Formik } from 'formik';
import { newToyValidationSchema } from '../../../../../../utils/validationSchemas/toyValidationSchema';
import { createNewToyFormData } from '../../../../../../utils/createFormData';
import { IToyForm } from '../../../../../../models/toyForm';
import UploadFileField from '../../../../../../shared/UploadFileField';
import { SubmitBtn } from '../../../../../../shared/SubmitBtn/SubmitBtn.styled';
import ImagesList from '../ImagesList';
import FeaturesForm from '../FeaturesForm';
import { toast } from 'react-toastify';

interface AddToyModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  editableToy?: IToyInfo | null;
}

const defaultValues: IToyForm = {
  toyName: '',
  description: '',
  manufacturer: '',
  ageFrom: 0,
  category: '',
  images: [],
  features: [],
};

const AddNewToyModal: FC<AddToyModalProps> = ({
  isModalOpen,
  closeModal,
  editableToy,
}) => {
  const [images, setImages] = useState<string[]>(
    editableToy ? editableToy.images : []
  );
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

  const handleSubmit = async (formData: IToyForm) => {
    const managerToken = localStorage.getItem('managerToken');

    if (!editableToy?._id) {
      const data = createNewToyFormData(formData);
      await api
        .post('/toys', data, {
          headers: {
            Authorization: `Bearer ${managerToken}`,
          },
        })
        .then(toast.success('Іграшку створено', { autoClose: 1000 }));
    } else {
      const data = createNewToyFormData(formData, imagesToDelete);
      await api
        .put(`/toys/${editableToy?.toyId}`, data, {
          headers: {
            Authorization: `Bearer ${managerToken}`,
          },
        })
        .then(
          toast.success('Опис іграшки успішно оновлено', { autoClose: 1000 })
        );
    }
    closeModal();
  };

  return (
    <div
      onClick={closeModal}
      className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}
    >
      <div onClick={e => e.stopPropagation()} className={styles.modalContent}>
        <div className={styles.close} onClick={closeModal}>
          Закрити
        </div>
        <h2>Додати іграшку</h2>
        <Formik
          initialValues={
            editableToy ? { ...editableToy, images: [] } : defaultValues
          }
          onSubmit={handleSubmit}
          validationSchema={newToyValidationSchema}
        >
          {({ handleSubmit, getFieldProps, setFieldValue, values }) => {
            return (
              <Form className={styles.form} onSubmit={handleSubmit}>
                <FormikInput
                  label="Назва"
                  name="toyName"
                  getFieldProps={getFieldProps}
                />
                <FormikInput
                  label="Виробник"
                  getFieldProps={getFieldProps}
                  name="manufacturer"
                />
                <FormikInput
                  label="Вікова категорія від"
                  getFieldProps={getFieldProps}
                  name="ageFrom"
                  type="number"
                />
                <FormikInput
                  label="Вікова категорія до"
                  getFieldProps={getFieldProps}
                  name="ageTo"
                  type="number"
                />
                <FormikInput
                  label="Опис"
                  getFieldProps={getFieldProps}
                  name="description"
                />
                <FormikInput
                  label="Категорія"
                  getFieldProps={getFieldProps}
                  name="category"
                />
                <FeaturesForm
                  features={values.features}
                  setFieldValue={setFieldValue}
                  getFieldProps={getFieldProps}
                />
                <div className={styles.imagesWrapper}>
                  <h3>Картинки Іграшки</h3>
                  {images.length > 0 && (
                    <ImagesList
                      images={images}
                      setImagesToDelete={setImagesToDelete}
                      setImages={setImages}
                      imagesToDelete={imagesToDelete}
                    />
                  )}
                  <UploadFileField
                    inputName="images"
                    values={values.images}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <SubmitBtn type="submit">Submit</SubmitBtn>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewToyModal;
