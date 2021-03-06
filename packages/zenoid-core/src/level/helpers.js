import { BREAKABLE, BUMP } from './constants'

import { getModifier } from '../modifier/model'

const getColor = ({ type, modifier }) => {
  if (type === BUMP) return 'grey'

  const modifierColor = getModifier(modifier).color
  return modifierColor || 'yellow'
}

export const initBrick = (brick, id) => ({
  ...brick,
  id: brick.id || id,
  points: brick.points || 1,
  dead: false,
  type: brick.type || BREAKABLE,
  modifier: brick.modifier,
  color: brick.color || getColor(brick),
})

const isType = (type) => (brick) => brick.type === type

export const isBreakable = isType(BREAKABLE)

export const isBump = isType(BUMP)

export const isAlive = (brick) => !brick.dead

export const getBricks = (level) => level.bricks.filter(isAlive)

export const getBricksRemaining = (level) => {
  return getBricks(level).filter(isBreakable)
}

export const isFinished = (level) => {
  return getBricksRemaining(level).length === 0
}
