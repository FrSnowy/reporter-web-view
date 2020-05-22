import styled from 'styled-components';
import { Container as SharedContainer } from '../elements'
import { getColor } from '../../../utils/colors';

export const Container = styled(SharedContainer)`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const LeftContainer = styled.div`
  display: flex;
  position: sticky;
  left: 0;
  top: 20px;
  flex-direction: column;
  width: 264px;
  margin-right: 24px;
`;

export const Instruments = styled(SharedContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px 25px;
  background: ${props => getColor('clear-white', 100, props.theme)};
  border-radius: 5px;
  box-shadow: 0 0 10px ${props => getColor('shadow', 15, props.theme)};
  border: 1px solid ${props => getColor('shadow', 20, props.theme)};
  box-sizing: border-box;
`;

export const InstrumentsTitle = styled.span`
  display: block;
  width: 100%;
  font-size: 16px;
  line-height: 23px;
  color: ${props => getColor('content-main', 85, props.theme)};
  border-bottom: 1px solid ${props => getColor('content-main', 25, props.theme)};
  padding-bottom: 8px;
`;

export const Pagination = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
`;

export const View = styled.div`
  display: flex;
  width: calc(100% - 288px);
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  width: 50%;
`;

export const Empty = styled.div`
  width: 100%;

  img {
    width: 128px;
    height: 128px;
  }
`;

export const Nothing = styled.div`
  font-size: 24px;
  line-height: 36px;
  color: ${props => getColor('accent', 85, props.theme)};
  width: 100%;
  text-align: center;
  font-weight: bold;
`;