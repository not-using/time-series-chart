import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Layout from 'components/styles/Layout';
import NotFound from 'components/error/NotFound';
import TimeFlow from 'components/timeflow/TimeFlow';

const App = () => {
  const routeElement = createRoutesFromElements(
    <Route element={<Layout />} errorElement={<NotFound />}>
      <Route path="/" element={<TimeFlow />} />
    </Route>,
  );
  return <RouterProvider router={createBrowserRouter(routeElement)} />;
};

export default App;
