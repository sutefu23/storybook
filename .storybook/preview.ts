import type { Preview } from '@storybook/react'
import '../src/index.css'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^(on|handle)[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
