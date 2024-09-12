import { FC, useState } from 'react';
import styles from '../ToyModal.module.scss';
import FormikInput from '../../../../../../shared/formComponents/FormikInput';
import { IToyInfo } from '../../../../../../models/toy';
import { Form, Formik } from 'formik';
import { newToyValidationSchema } from '../../../../../../utils/validationSchemas/toyValidationSchema';
import { createNewToyFormData } from '../../../../../../utils/createFormData';
import { IToyForm } from '../../../../../../models/toyForm';
import UploadFileField from '../../../../../../shared/UploadFileField';
import ImagesList from '../ImagesList';
import FeaturesForm from '../FeaturesForm';
import SubmitBtn from '../../../../../../shared/SubmitBtn';
import { useDispatch } from 'react-redux';
import { addToy, updateToy } from '../../../../../../redux/slices/toys.slice';
import { AppDispatch, useAppSelector } from '../../../../../../redux/store';

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
  const { loading: isLoading } = useAppSelector(state => state.toys);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = async (formData: IToyForm) => {
    if (!editableToy?._id) {
      const data = createNewToyFormData(formData);
      dispatch(addToy(data));
      closeModal();
    } else {
      const toyId = editableToy?.toyId;
      const data = createNewToyFormData(formData, imagesToDelete);
      dispatch(updateToy({ toy: data, toyId }));
      closeModal();
    }
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
                    values={values.images as File[]}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <SubmitBtn isLoading={isLoading} title="Submit" />
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewToyModal;
