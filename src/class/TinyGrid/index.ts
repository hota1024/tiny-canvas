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

  constructor(width: number, height: number)
  constructor(lines: T[][])

  /**
   * TinyGrid constructor.
   *
   * @param args
   */
  constructor(...args) {
    if (typeof args[0] === 'number') {
      this.grid = new Grid(args[0], args[1])
    } else {
      this.grid = new Grid(args[0].length, args.length)
      this.grid.map((x, y) => args[y][x])
    }
  }

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

  /**
   * Map data.
   *
   * @param callback
   */
  map(callback: (x: number, y: number, data: T) => T) {
    this.grid.map(callback)
  }

  /**
   * Every data.
   *
   * @param callback
   */
  every(callback: (x: number, y: number, data: T) => boolean) {
    this.grid.every(callback)
  }

  /**
   * Some data.
   *
   * @param callback
   */
  some(callback: (x: number, y: number, data: T) => boolean) {
    this.grid.some(callback)
  }

  /**
   * Set data.
   *
   * @param lines
   */
  setData(lines: T[][]) {
    this.grid.map((x, y) => {
      return lines[y][x]
    })
  }

  /**
   * Clone the grid.
   */
  clone() {
    return new TinyGrid<T>(this.width, this.height).map((x, y) =>
      this.get(x, y)
    )
  }
}