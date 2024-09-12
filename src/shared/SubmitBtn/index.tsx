import LoadSpinner from '../LoadSpinner';
import { Btn } from './SubmitBtn.styled';

interface SubmitBtnProps {
  isLoading?: boolean;
  title: string;
}

const spinnerSettings = {
  height: '48',
  width: '48',
  color: '#2F2960',
};

const SubmitBtn = ({ isLoading, title }: SubmitBtnProps) => {
  return (
    <Btn type="submit" disabled={isLoading}>
      {!isLoading ? (
        title
      ) : (
        <LoadSpinner
          height={spinnerSettings.height}
          width={spinnerSettings.width}
          color={spinnerSettings.color}
        />
      )}
    </Btn>
  );
};

export default SubmitBtn;
