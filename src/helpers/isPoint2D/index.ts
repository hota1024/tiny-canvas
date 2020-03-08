import { Point2D } from '../../types/Point2D'

/**
 * Returns whether value is Point2D.
 *
 * @param value
 */
export function isPoint2D(value: any): value is Point2D {
  return (
    typeof value === 'object' &&
    typeof value.x === 'number' &&
    typeof value.y === 'number'
  )
}
