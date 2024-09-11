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
};

const AddNewToyModal: FC<AddToyModalProps> = ({
  isModalOpen,
  closeModal,
  editableToy,
}) => {
  const [features, setFeatures] = useState<string[]>(
    editableToy ? editableToy.features : []
  );
  const [images, setImages] = useState<string[]>(
    editableToy ? editableToy.images : []
  );
  const [imagesToDelete, setImagesToDelete] = useState<string[]>([]);

  const [feature, setFeature] = useState<string>('');
  const [isAddFeatureOpen, setIsAddFeatureOpen] = useState(false);

  const handleSubmit = async (formData: IToyForm) => {
    const managerToken = localStorage.getItem('managerToken');

    const data = createNewToyFormData(formData, features);
    if (!editableToy?._id) {
      await api.post('/toys', data, {
        headers: {
          Authorization: `Bearer ${managerToken}`,
        },
      });
    } else {
      await api.put(`/toys/${editableToy?.toyId}`, data, {
        headers: {
          Authorization: `Bearer ${managerToken}`,
        },
      });
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

                <div className={styles.featuresWrapper}>
                  <div className={styles.featuresHeader}>
                    <h3>Особливості</h3>
                    <button
                      type="button"
                      className={styles.addFeatureBtn}
                      onClick={() => setIsAddFeatureOpen(!isAddFeatureOpen)}
                    >
                      Додати
                    </button>
                  </div>
                  {isAddFeatureOpen && (
                    <div className={styles.addFeatureWrapper}>
                      <input
                        type="text"
                        value={feature}
                        onChange={e => setFeature(e.target.value)}
                      />
                      <button
                        className={styles.saveFeatureBtn}
                        type="button"
                        onClick={() => {
                          setFeatures([...features, feature]);
                          setFeature('');
                        }}
                      >
                        Зберегти
                      </button>
                    </div>
                  )}
                  <div className={styles.features}>
                    {features.map((feature, index) => (
                      <div key={index} className={styles.feature}>
                        <div className={styles.featureValue}>{feature}</div>
                        <button
                          className={styles.removeFeatureBtn}
                          type="button"
                          onClick={() => {
                            setFeatures(features.filter((_, i) => i !== index));
                          }}
                        >
                          Видалити
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={styles.imagesWrapper}>
                  <div className={styles.imagesHeader}>
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
