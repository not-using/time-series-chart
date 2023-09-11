import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Layout from 'components/styles/Layout';
import NotFound from 'components/error/NotFound';
import TimeFlow from 'components/timeflow/TimeFlow';
import { getTimeFlow } from 'components/api/getTimeFlow';

const App = () => {
  const routeElement = createRoutesFromElements(
    <Route element={<Layout />} errorElement={<NotFound />}>
      <Route path="/" element={<TimeFlow />} loader={getTimeFlow} />
    </Route>,
  );
  return <RouterProvider router={createBrowserRouter(routeElement)} />;
};

export default App;
