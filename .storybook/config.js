import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withKnobs } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider } from '@mui/styles'
import theme from '~/styles/theme'

withOptions({
  theme: {
    brandTitle: 'XTI react typescript boilerplate',
    brandUrl: 'https://dev.azure.com/indikaenergygroup/XTI%20Skeleton%20Code/_git/https://dev.azure.com/indikaenergygroup/XTI%20Skeleton%20Code/_git/xti-react-ts',
  },
  showPanel: true,
});

const MaterialUIDecorator = storiesFn => (
  <ThemeProvider theme={theme}>
    {storiesFn()}
  </ThemeProvider>
)

addParameters({
  backgrounds: [
    { name: 'default', value: '#eceff1', default: true },
    { name: 'dark', value: '#37474f' },
  ],
});

addDecorator(withKnobs)
addDecorator(StoryRouter())
addDecorator(MaterialUIDecorator)

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.tsx$/), module);
