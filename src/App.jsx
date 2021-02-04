import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
// import { ThemeProvider } from 'theme-ui';
// import { ThemeProvider } from 'emotion-theming';
// import { ThemeProvider } from '@emotion/react';
import theme from '@rebass/preset';
import Box from './Box';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box
          image="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=2048&q=20"
          title="Tmp"
          description="tmp tmp"
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
