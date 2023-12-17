import './App.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from '../contexts/index';
import { AppRoutes } from '../pages/route';


function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    height: 100%;
    margin: 0;
    font-family: 'Exo', sans-serif;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`