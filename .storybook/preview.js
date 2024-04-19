/** @type { import('@storybook/react').Preview } */
import {ThemeProvider, theme, CssReset, Box} from '@chakra-ui/react'
import { addDecorator } from '@storybook/react'

// addDecorator (story => (
//   <ThemeProvider theme={theme}>
//     <CssReset/>
//     <Box m='4'>{story()}</Box>

//   </ThemeProvider>
// ))
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  
};

export default preview;

