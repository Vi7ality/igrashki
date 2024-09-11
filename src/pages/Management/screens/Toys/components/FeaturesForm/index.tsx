import { useState } from 'react';
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
  setFeatures(arg: string[]): void;
}

const FeaturesForm = ({ features, setFeatures }: FeaturesProp) => {
  const [isAddFeatureOpen, setIsAddFeatureOpen] = useState(false);
  const [feature, setFeature] = useState<string>('');
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
            type="text"
            value={feature}
            onChange={e => setFeature(e.target.value)}
          />
          <SaveBtn
            type="button"
            onClick={() => {
              setFeatures([...features, feature]);
              setFeature('');
            }}
          >
            Зберегти
          </SaveBtn>
        </AddFeatureWrap>
      )}
      <ul>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureInput />
            <RemoveBtn
              type="button"
              onClick={() => {
                setFeatures(features.filter((_, i) => i !== index));
              }}
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
