import Employees from './features/employees/Employees'

import { Provider } from 'react-redux';
import createStore from './store/store';
export const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <Employees />
    </Provider>
  );
}

export default App;
