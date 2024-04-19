/** @type { import('@storybook/react').Preview } */
import { ThemeProvider, theme, CssReset, Box } from "@chakra-ui/react";
import { addDecorator } from "@storybook/react";

export const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
