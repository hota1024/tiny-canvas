import { Grid } from '../../impls/grids'
import { Point2D } from '../../types'
import { isPoint2D } from '../../helpers'

/*
 * TinyGrid class.
 */
export class TinyGrid<T> {
  /**
   * Grid.
   */
  protected readonly grid: Grid<T>

  /**
   * Width.
   */
  get width() {
    return this.grid.width
  }

  /**
   * Height.
   */
  get height() {
    return this.grid.height
  }

  /**
   * Number of items.
   */
  get count() {
    return this.grid.count
  }

  /**
   * Get point data.
   *
   * @param x
   * @param y
   */
  get(x: number, y: number): T

  /**
   * Get point data.
   *
   * @param point
   */
  get(point: Point2D): T

  /**
   * Get point data.
   *
   * @param args
   */
  get(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.get(args[0].x, args[0].y)
    } else {
      return this.get(args[0], args[1])
    }
  }

  /**
   * Set point data.
   *
   * @param x
   * @param y
   * @param data
   */
  set(x: number, y: number, data: T): void

  /**
   * Set point data.
   *
   * @param point
   * @param data
   */
  set(point: Point2D, data: T): void

  /**
   * Get point data.
   *
   * @param args
   */
  set(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.set(args[0].x, args[0].y, args[1])
    } else {
      return this.set(args[0], args[1], args[2])
    }
  }

  /**
   * Fill data.
   *
   * @param data
   */
  fill(data: T) {
    this.grid.fill(data)
  }

  /**
   * Each data.
   *
   * @param callback
   */
  each(callback: (x: number, y: number, data: T) => void) {
    this.grid.each(callback)
  }
}
