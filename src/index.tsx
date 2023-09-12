import ReactDOM from 'react-dom/client';
import { setupWorker } from 'msw';
import { handlers } from 'mocks/handler';
import App from 'App';

const work = setupWorker(...handlers);
if (process.env.REACT_APP_API_URL === undefined) {
  work.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
