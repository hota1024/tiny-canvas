import { GridInterface } from '../../../interfaces/Grid'

/*
 * Grid class.
 */
export class Grid<T> implements GridInterface<T> {
  /**
   * Width.
   */
  readonly width: number

  /**
   * Height.
   */
  readonly height: number

  /**
   * Number of items.
   */
  get count() {
    return this.width * this.height
  }

  /**
   * Data.
   */
  private readonly data: T[]

  /**
   * Grid constructor.
   *
   * @param width
   * @param height
   */
  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.data = []

    for (let i = 0; i < this.count; ++i) {
      this.data.push(undefined)
    }
  }

  /**
   * Get point data.
   *
   * @param x
   * @param y
   */
  get(x: number, y: number) {
    if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1)
      return undefined
    return this.data[this.getPointIndex(x, y)]
  }

  /**
   * Set point data.
   *
   * @param x
   * @param y
   * @param data
   */
  set(x: number, y: number, data: T) {
    this.data[this.getPointIndex(x, y)] = data

    return this
  }

  /**
   * Fill data.
   *
   * @param data
   */
  fill(data: T) {
    for (let i = 0; i < this.count; ++i) {
      this.data[i] = data
    }

    return this
  }

  /**
   * Each data.
   *
   * @param callback
   */
  each(callback: (x: number, y: number, data: T) => void) {
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        callback(x, y, this.get(x, y))
      }
    }

    return this
  }

  /**
   * Set each data.
   *
   * @param callback
   */
  setEach(callback: (x: number, y: number, data: T) => T) {
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        this.set(x, y, callback(x, y, this.get(x, y)))
      }
    }

    return this
  }

  /**
   * Map data.
   *
   * @param callback
   */
  map<R>(callback: (x: number, y: number, data: T) => R) {
    const result = new Grid<R>(this.width, this.height).setEach((x, y) =>
      callback(x, y, this.get(x, y))
    )

    return result
  }

  /**
   * Every data.
   *
   * @param callback
   */
  every(callback: (x: number, y: number, data: T) => boolean) {
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        if (callback(x, y, this.get(x, y)) === false) return
      }
    }
    return true
  }

  /**
   * Some data.
   *
   * @param callback
   */
  some(callback: (x: number, y: number, data: T) => boolean) {
    for (let y = 0; y < this.height; ++y) {
      for (let x = 0; x < this.width; ++x) {
        if (callback(x, y, this.get(x, y))) return true
      }
    }
    return false
  }

  /**
   * Returns point index.
   *
   * @param x
   * @param y
   */
  private getPointIndex(x: number, y: number) {
    return y * this.width + x
  }
}
