import styled from 'styled-components';
import { getColor } from '../../utils/colors';

export const AppContainer = styled.div`
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', 'Roboto', 'Arial', sans-serif;
  background: ${props => getColor('page-background', 100, props.theme)};
  min-height: 100vh;
`;