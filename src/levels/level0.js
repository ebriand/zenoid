import { BUMP } from '../helpers/brick'
import { SHORT_BAR, LONG_BAR, FAST_GAME, SLOW_GAME } from '../helpers/modifier'

export default {
  cols: 80,
  rows: 24,
  bricks: [
    { x: 18, y: 2, width: 4, height: 2, type: BUMP },
    { x: 28, y: 2, width: 4, height: 2, modifier: FAST_GAME },
    { x: 38, y: 2, width: 4, height: 2, modifier: LONG_BAR },
    { x: 38, y: 8, width: 8, height: 2 },
    { x: 48, y: 2, width: 4, height: 2, modifier: SHORT_BAR },
    { x: 58, y: 2, width: 4, height: 2, modifier: SLOW_GAME },
    { x: 68, y: 2, width: 4, height: 2, type: BUMP },
  ],
}
