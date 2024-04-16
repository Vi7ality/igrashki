import { ThreeDots } from 'react-loader-spinner';

type Props = {
    height: string;
    width: string;
    color: string;
}

const LoadSpinner = ({height = '48', width = '48', color = '#2F2960'}: Props) => (
  <ThreeDots
    visible={true}
    height={height}
    width={width}
    color={color}
    radius="9"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
);

export default LoadSpinner;
