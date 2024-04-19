/** @type { import('@storybook/react').Preview } */
// import { ThemeProvider, theme, CssReset, Box } from "@chakra-ui/react";
// import { addDecorator, addParameters } from "@storybook/react";
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
// import '@storybook/addon-console'

export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
      defaultViewport: 'iphone14promax',
    },
  },
};

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <CssReset />
//       <Box m="4">
//         <Story />
//       </Box>
//     </ThemeProvider>
//   ),
// ];
