import { FlexCenter } from 'components/styles/FlexCenter';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { styled } from 'styled-components';

const Error = () => {
  const error = useRouteError();
  return (
    <Center>
      <p>❌ Oops! ❌</p>
      <p>예상치 못한 문제가 발생했습니다</p>
      <p>오류 파악 및 해결을 위해 버그 제보 부탁드립니다</p>
      <p>{isRouteErrorResponse(error) ? error.error?.message : JSON.stringify(error)}</p>
    </Center>
  );
};

export default Error;

const Center = styled(FlexCenter)`
  height: 30rem;
  font-size: 2rem;
  font-weight: bold;
  & > :first-child {
    font-size: 3.6rem;
  }
`;
