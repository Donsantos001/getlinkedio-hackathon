import ErrorBoundary from 'components/ErrorBoundary';
import Contact from 'pages/Contact';
import Landing from 'pages/Landing';
import Register from 'pages/Register';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/theme';
import { queryClient } from 'utils/query';

const App = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <BrowserRouter>
            <Routes>
              <Route index element={<Landing />} />
              <Route path="register" element={<Register />} />
              <Route path="contact" element={<Contact />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
