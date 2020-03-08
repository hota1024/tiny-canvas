/**
 * Returns whether value is Point2D.
 *
 * @param value
 */
export function isPoint2D(value: any) {
  return (
    typeof value === 'object' &&
    typeof value.x === 'number' &&
    typeof value.y === 'number'
  )
}
