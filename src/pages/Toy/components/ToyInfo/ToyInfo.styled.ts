import styled from 'styled-components';

export const SectionStyled = styled.section`
  border-radius: 15px;
  padding: 30px;
  background-color: ${({ theme: { colors } }) => colors.white};

  @media ${p => p.theme.device.tablet} {
    width: 460px;
    height: 100%;
  }
  @media ${p => p.theme.device.desktop} {
    width: 640px;
    border-radius: 30px;
  }
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
  transition: background-color
    ${p => p.theme.transition.function && p.theme.transition.duration};
  margin-top: 40px;

  &.add {
    background-color: ${({ theme: { colors } }) => colors.accent};

    @media (hover: hover) {
      &:hover {
        background-color: ${p => p.theme.colors.accentAlt};
      }
    }
    @media (hover: none) {
      &:active {
        color: #fff;
        background-color: ${p => p.theme.colors.accentAlt};
      }
    }
  }
  &.delete {
    background-color: ${({ theme: { colors } }) => colors.bgWhite};

    @media (hover: hover) {
      &:hover {
        background-color: ${p => p.theme.colors.redAlt};
      }
    }
    @media (hover: none) {
      &:active {
        background-color: ${p => p.theme.colors.redAlt};
      }
    }
  }

  @media ${p => p.theme.device.tablet} {
    width: 160px;
    margin-left: auto;
    margin-right: 0;
  }

  @media ${p => p.theme.device.desktop} {
    margin-top: 50px;
  }
`;

export const BtnContent = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
`;
