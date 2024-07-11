import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ToyModal.module.scss';
import Input from '../../../../../shared/formComponents/Input';
import api from '../../../../../api';
import { IToyInfo } from '../../../../../models/toy';
import { ErrorMessage, Form, Formik } from 'formik';
import { newToyValidationSchema } from '../../../../../utils/validationSchemas/toyValidationSchema';

interface AddToyModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  editableToy?: IToyInfo | null;
}

interface IToyForm {
  toyName: string;
  description: string;
  manufacturer: string;
  ageFrom: number;
  ageTo?: number;
  category: string;
  _id?: string;
}

const defaultValues: IToyForm = {
  toyName: '',
  description: '',
  manufacturer: '',
  ageFrom: 0,
  category: '',
};

const AddToyModal: FC<AddToyModalProps> = ({
  isModalOpen,
  closeModal,
  editableToy,
}) => {
  const [images, setImages] = useState<string[]>(
    editableToy ? editableToy.images : []
  );
  const [image, setImage] = useState<string>('');
  const [features, setFeatures] = useState<string[]>(
    editableToy ? editableToy.features : []
  );
  const [feature, setFeature] = useState<string>('');
  const [isAddToyOpen, setIsAddToyOpen] = useState(false);
  const [isAddFeatureOpen, setIsAddFeatureOpen] = useState(false);
//   const { register, handleSubmit } = useForm<IToyForm>({
//     mode: 'onBlur',
//     values: editableToy ? editableToy : defaultValues,
//   });

    const onSubmit = async (formData: IToyForm) => {
      console.log(formData)
    // const managerToken = localStorage.getItem('managerToken');
    // const toy = { ...formData, images, features };
    // const { _id, ...rest } = toy;

    // if (!editableToy?._id) {
    //   await api.post('/toys', toy, {
    //     headers: {
    //       Authorization: `Bearer ${managerToken}`,
    //     },
    //   });
    // } else {
    //   await api.put(`/toys/${editableToy?.toyId}`, rest, {
    //     headers: {
    //       Authorization: `Bearer ${managerToken}`,
    //     },
    //   });
    // }
    // closeModal();
  };

  return (
    <div className={`${styles.modal} ${isModalOpen ? styles.active : ''}`}>
      <div className={styles.modalContent}>
        <div className={styles.close} onClick={closeModal}>
          Закрити
        </div>
        <h2>Додати іграшку</h2>
        <Formik initialValues={defaultValues} onSubmit={onSubmit} validationSchema={newToyValidationSchema}>
          {({ handleSubmit, getFieldProps, touched, errors }) => {
            return (
              <Form className={styles.form} onSubmit={handleSubmit} id="formId">
                    <Input label="Назва" name="toyName" getFieldProps={getFieldProps} />
                     {/* <ErrorMessage name="toyName" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}
                <Input
                  label="Виробник"
                  getFieldProps={getFieldProps}
                        name="manufacturer"
                    />
                    {/* <ErrorMessage name="manufacturer" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}
                <Input
                  label="Вікова категорія від"
                  getFieldProps={getFieldProps}
                  name="ageFrom"
                        type="number"
                    />
                    {/* <ErrorMessage name="ageFrom" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}
                <Input
                  label="Вікова категорія до"
                  getFieldProps={getFieldProps}
                  name="ageTo"
                  type="number"
                    />
                    {/* <ErrorMessage name="ageTo" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}
                <Input
                  label="Опис"
                  getFieldProps={getFieldProps}
                  name="description"
                    />
                    {/* <ErrorMessage name="description" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}
                <Input
                  label="Категорія"
                  getFieldProps={getFieldProps}
                  name="category"
                    />
                    {/* <ErrorMessage name="category" component="div">{(msg) => <p>{msg}</p>}</ErrorMessage> */}

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
                    <button
                      type="button"
                      className={styles.addImageBtn}
                      onClick={() => setIsAddToyOpen(!isAddToyOpen)}
                    >
                      Додати картинку
                    </button>
                  </div>
                  {isAddToyOpen && (
                    <div className={styles.addImageWrapper}>
                      <input
                        type="text"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                      />
                      <button
                        className={styles.saveImageBtn}
                        type="button"
                        onClick={() => {
                          setImages([...images, image]);
                          setImage('');
                        }}
                      >
                        Зберегти
                      </button>
                    </div>
                  )}
                  <div className={styles.images}>
                    {images.map((image, index) => (
                      <div key={index} className={styles.image}>
                        <img src={image} alt="" />
                        <button
                          className={styles.removeImageBtn}
                          type="button"
                          onClick={() => {
                            setImages(images.filter((_, i) => i !== index));
                          }}
                        >
                          Видалити
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                <input className={styles.submitInput} type="submit" value="Submit" />
              </Form>
            );
          }}
        </Formik>
        {/* <form onSubmit={handleSubmit(onSubmit)}>
                    <Input label='Назва' {...register('toyName')} name='toyName' />
                    <Input label='Виробник' {...register('manufacturer')} name='manufacturer' />
                    <Input label='Вікова категорія від' {...register('ageFrom')} name='ageFrom' type='number' />
                    <Input label='Вікова категорія до' {...register('ageTo')} name='ageTo' type='number' />
                    <Input label='Опис' {...register('description')} name='description' />
                    <Input label='Категорія' {...register('category')} name='category' />

                    <div className={styles.featuresWrapper}>
                        <div className={styles.featuresHeader}>
                            <h3>Особливості</h3>
                            <button type='button' className={styles.addFeatureBtn} onClick={() => setIsAddFeatureOpen(!isAddFeatureOpen)}>Додати</button>
                        </div>
                        {isAddFeatureOpen && (
                            <div className={styles.addFeatureWrapper}>
                                <input type="text" value={feature} onChange={e => setFeature(e.target.value)} />
                                <button className={styles.saveFeatureBtn} type='button' onClick={() => {
                                    setFeatures([...features, feature])
                                    setFeature('')
                                }}>Зберегти</button>
                            </div>
                        )}
                        <div className={styles.features}>
                            {features.map((feature, index) => (
                                <div key={index} className={styles.feature}>
                                    <div className={styles.featureValue}>{feature}</div>
                                    <button className={styles.removeFeatureBtn} type='button' onClick={() => {
                                        setFeatures(features.filter((_, i) => i !== index))
                                    }}>Видалити</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.imagesWrapper}>
                        <div className={styles.imagesHeader}>
                            <h3>Картинки Іграшки</h3>
                            <button type='button' className={styles.addImageBtn} onClick={() => setIsAddToyOpen(!isAddToyOpen)}>Додати картинку</button>
                        </div>
                        {isAddToyOpen && (
                            <div className={styles.addImageWrapper}>
                                <input type="text" value={image} onChange={e => setImage(e.target.value)} />
                                <button className={styles.saveImageBtn} type='button' onClick={() => {
                                    setImages([...images, image])
                                    setImage('')
                                }}>Зберегти</button>
                            </div>
                        )}
                        <div className={styles.images}>
                            {images.map((image, index) => (
                                <div key={index} className={styles.image}>
                                    <img src={image} alt="" />
                                    <button className={styles.removeImageBtn} type='button' onClick={() => {
                                        setImages(images.filter((_, i) => i !== index))
                                    }}>Видалити</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <input type="submit" value="Submit" />
                </form> */}
      </div>
    </div>
  );
};

export default AddToyModal;
