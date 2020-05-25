import styled from 'styled-components';
import { getColor } from '../../../../../utils/colors';
import * as TableView from '../../../../shared/TableViewElements';

export const Container = styled(TableView.Container)`
  height: 200px;
`;

export const UserName = styled.div`
  display: flex;
  font-size: 13px;
  line-height: 19px;
  white-space: nowrap;

  & > strong {
    color: ${props => getColor('accent', 85, props.theme)};
    margin-right: 4px;
  }

  & > span {
    width: 100px;
    color: ${props => getColor('content-light', 85, props.theme)};
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export const Content = styled(TableView.Content)`
  flex-direction: column;
  height: 136px;
  top: 28px;
  overflow: visible;

  a:not(:first-child) {
    margin-top: 4px;
  }
`;

export const More = styled.div`
  display: flex;
  width: 100%;
  margin-top: 7px;
`;

export const Hidden = styled.span`
  color: ${props => getColor('content-light', 85, props.theme)};
`;

export const Errors = styled.span`
  color: ${props => getColor('wrong-dark', 85, props.theme)};
  font-weight: bold;
`;