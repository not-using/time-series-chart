import { useLoaderData } from 'react-router-dom';

const TimeFlow = () => {
  const response = useLoaderData();
  console.log(response);
  return (
    <main>
      <h2>TimeFlow</h2>
    </main>
  );
};

export default TimeFlow;
