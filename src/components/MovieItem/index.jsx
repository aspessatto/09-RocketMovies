import { FiPlus, FiX } from 'react-icons/fi';

import { Container } from './styles';

export function MovieItem({ isnew, value, onClick, ...rest }) {
  return (
    <Container $isnew="true">
      <input type="text" value={value} readOnly={!isnew} {...rest} />
      <button type="button" onClick={onClick}>
        {isnew ? <FiPlus /> : <FiX />}
      </button>

    </Container>
  )
}