import styled from 'styled-components';
import { Content as SharedContent } from '../../../../shared/TableViewElements';
import { getColor } from '../../../../../utils/colors';

export const Content = styled(SharedContent)`
  color: ${props => getColor('wrong', 100, props.theme)};
`;