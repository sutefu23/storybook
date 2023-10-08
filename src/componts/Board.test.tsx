import { render } from '@testing-library/react'
import * as stories from './Board.stories'
import { composeStories } from '@storybook/testing-react'
// https://lightbulbcat.hatenablog.com/entry/2019/08/08/040659
// https://zenn.dev/takepepe/articles/reusable-story-playfn
const { Default: BoarDefault, FilledTriangle: BoardTriangle } = composeStories(stories)

describe('Boardのスナップショットテスト', () => {
  test('Boardのデフォルト状態のSnapShot', () => {
    const component = render(<BoarDefault />)
    expect(component).toMatchSnapshot()
  })

  test('Boardが△になった状態のSnapShot', () => {
    const component = render(<BoardTriangle />)
    expect(component).toMatchSnapshot()
  })
})
