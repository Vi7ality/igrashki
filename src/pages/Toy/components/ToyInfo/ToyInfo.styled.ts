import styled from 'styled-components';

export const SectionStyled = styled.section`
  border-radius: 15px;
  padding: 30px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

export const PageTitle = styled.h1`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const RowFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const CategoryWrap = styled(RowFlex)`
  gap: 10px;
  margin-right: 30px;
`;

export const AgeWrap = styled(RowFlex)`
  gap: 10px;
`;

export const Title2 = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const MadeName = styled.p`
  margin-top: 10px;

  span {
    font-weight: 600;
    margin-left: 10px;
  }
`;

export const FeatureList = styled.ul`
  padding-left: 25px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemStyled = styled.li`
  list-style: inherit;
`;

export const CartBtn = styled.button`
  width: 100%;
  font-weight: 600;
  border-radius: 20px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: background-color
    ${p => p.theme.transition.function && p.theme.transition.duration.standart};
  margin-top: 40px;

  &.add {
    background-color: ${({ theme: { colors } }) => colors.accent};
    &:hover {
      background-color: ${p => p.theme.colors.accentAlt};
    }

    &:focus {
      background-color: ${p => p.theme.colors.accentAlt};
    }
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.bgWhite};
    &:hover {
      background-color: ${p => p.theme.colors.redAlt};
    }

    &:focus {
      background-color: ${p => p.theme.colors.redAlt};
    }
  }
`;
export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
