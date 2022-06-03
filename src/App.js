import { Provider } from 'react-redux';
import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RestaurantScreen from './components/RestaurantScreen';
import store from './store';

const theme = createTheme({
  palette: {
    primary: blueGrey,
  },
});
function App() {
  return (
    <div>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">Opinion Ate</Typography>
            </Toolbar>
          </AppBar>
          <Container>
            <RestaurantScreen />
          </Container>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
