import Contact from 'pages/Contact';
import Landing from 'pages/Landing';
import Register from 'pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Landing />} />
          <Route path="register" element={<Register />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
