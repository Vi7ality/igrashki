import { Field } from 'formik';
import styled from 'styled-components';


export const LocationWrap = styled.div`
  margin-bottom: 20px;
`;

export const TitleStyled = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  gap: 20px;

  @media ${p => p.theme.device.mobileOnly} {
    flex-direction: column;
    gap: 10px;
  }
`;

// export const StyledSelect = styled.select`
// border-radius: 30px;
// padding: 15px 20px;
// width: 350px;

// font-size: 16px;
// `

// fsaffffff

