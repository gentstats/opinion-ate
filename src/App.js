import { Provider } from 'react-redux';
import RestaurantScreen from './components/RestaurantScreen';
import store from './store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <RestaurantScreen />
      </Provider>
    </div>
  );
}

export default App;
