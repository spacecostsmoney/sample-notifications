import { NotificationProvider } from './context/NotificationContext';
import { Notification } from './Notification';
import { Results } from './Results';

const App = (): JSX.Element => {
  return (
    <NotificationProvider>
      <Notification />
      <Results />
    </NotificationProvider>
  );
}

export default App;