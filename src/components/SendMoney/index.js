import SendMoneyContainer from './SendMoneyContainer';
import withResolution from '../HOC/withResolution';

export default withResolution({extraProp: 'someAdditProps'})(SendMoneyContainer);  // TODO: implement