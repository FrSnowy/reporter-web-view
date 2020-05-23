import styled from 'styled-components';
import { Content as SharedContent } from '../../../../shared/TableViewElements';
import { getColor } from '../../../../../utils/colors';

export const Content = styled(SharedContent)`
  display: flex;
  flex-direction: row;
  top: 48px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Text = styled.div`
  display: block;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${props => getColor('content-light', 85, props.theme)};
  white-space: nowrap;

  &:not(:last-of-type) {
    margin-bottom: 4px;
  }
`;

export const Errors = styled(Text)`
  color: ${props => getColor('wrong-dark', 85, props.theme)};
  display: flex;
  justify-content: flex-start;

  strong {
    color: ${props => getColor('wrong-dark', 85, props.theme )};
    margin-right: 4px;
  }

  img {
    height: 14px;
  }
`;

export const Footprints = styled(Errors)`
  color: ${props => getColor('warning-dark', 85, props.theme )};
  
  strong {
    color: ${props => getColor('warning-dark', 85, props.theme )};
  }
`;