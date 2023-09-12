import { FlexCenter } from 'components/styles/FlexCenter';
import { styled } from 'styled-components';

const NotFound = () => {
  return (
    <Center>
      <p>⚠️ NotFound ⚠️</p>
      <p>페이지 주소를 다시 확인해주세요</p>
    </Center>
  );
};

export default NotFound;

const Center = styled(FlexCenter)`
  height: 30rem;
  font-size: 3.6rem;
  font-weight: bold;
  & > :last-child {
    font-size: 2rem;
  }
`;
