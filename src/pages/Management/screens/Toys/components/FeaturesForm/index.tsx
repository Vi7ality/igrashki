import { ChangeEvent, useState } from 'react';
import {
  AddBtn,
  AddFeatureWrap,
  FeatureInput,
  FeatureItem,
  FeaturesHead,
  RemoveBtn,
  SaveBtn,
  Wrapper,
} from './FeaturesForm.styled';

interface FeaturesProp {
  features: string[];
  setFieldValue: (field: string, value: any) => void;
  getFieldProps(name: string): object;
}

const FeaturesForm = ({
  features,
  setFieldValue,
  getFieldProps,
}: FeaturesProp) => {
  const [isAddFeatureOpen, setIsAddFeatureOpen] = useState(false);
  const [feature, setFeature] = useState<string>('');

  const handleFeaturesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newFeatures = Array.from(event.currentTarget.files || []);
    const existingFeatures = features || [];
    const updatedFeatures = [...existingFeatures, ...newFeatures];
    setFieldValue('features', updatedFeatures);
  };

  const handleFeatureInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFeature(event.target.value); // Set the current feature being typed
  };

  const handleSaveFeature = () => {
    if (feature) {
      const updatedFeatures = [...(features || []), feature]; // Append the new feature to the existing features
      setFieldValue('features', updatedFeatures); // Update Formik's state with the new features list
      setFeature('');
      setIsAddFeatureOpen(!isAddFeatureOpen); // Clear the input after saving
    }
  };

  const handleDeleteFeature = (index: number) => {
    const existingFeatures = features || [];

    const updatedFeatures = existingFeatures.filter(
      (_, i: number) => i !== index
    );

    setFieldValue('features', updatedFeatures);
  };

  return (
    <Wrapper>
      <FeaturesHead>
        <h3>Особливості</h3>
        <AddBtn
          type="button"
          onClick={() => setIsAddFeatureOpen(!isAddFeatureOpen)}
        >
          Додати
        </AddBtn>
      </FeaturesHead>
      {isAddFeatureOpen && (
        <AddFeatureWrap>
          <FeatureInput
            name="feature"
            value={feature}
            onChange={handleFeatureInputChange}
          />
          <SaveBtn
            type="button"
            onClick={handleSaveFeature} // Add the new feature when clicked
          >
            Зберегти
          </SaveBtn>
        </AddFeatureWrap>
      )}
      <ul>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureInput
              name={`features[${index}]`}
              value={feature}
              onChange={() => handleFeaturesChange}
              {...getFieldProps(`features[${index}]`)}
            />
            <RemoveBtn
              type="button"
              onClick={() => handleDeleteFeature(index)} // Delete the feature
            >
              Видалити
            </RemoveBtn>
          </FeatureItem>
        ))}
      </ul>
    </Wrapper>
  );
};

export default FeaturesForm;
