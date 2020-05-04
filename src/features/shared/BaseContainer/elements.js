import styled, { css } from 'styled-components';

export const InnerElement = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
`;

export const ContainerElement = styled.div`
  display: flex;
  flex-direction: ${({ direction = 'column' }) => direction};
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  width: ${({ fullWidth = false }) => fullWidth ? '100%' : '1280px'};
  margin: 0 auto;

  ${InnerElement} {
    flex-direction: ${({ direction = 'column' }) => direction};
    justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  }

  ${props => !props.fullWidth && css`
    ${InnerElement} {
      padding: 16px 24px;
    }

    @media (max-width: 1279px) {
      width: 1024px;
      ${InnerElement} {
        padding: 8px 16px;
      }
    }

    @media (max-width: 1023px) {
      width: 768px;
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  `}
`;