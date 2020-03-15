/*
 * Grid interface.
 */
export interface GridInterface<T> {
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
  readonly count: number

  /**
   * Get point data.
   *
   * @param x
   * @param y
   */
  get(x: number, y: number): T

  /**
   * Set point data.
   *
   * @param x
   * @param y
   * @param data
   */
  set(x: number, y: number, data: T): void

  /**
   * Fill data.
   *
   * @param data
   */
  fill(data: T): void

  /**
   * Each data.
   *
   * @param callback
   */
  each(callback: (x: number, y: number, data: T) => void): void

  /**
   * Every data.
   *
   * @param callback
   */
  every(callback: (x: number, y: number, data: T) => boolean): boolean

  /**
   * Some data.
   *
   * @param callback
   */
  some(callback: (x: number, y: number, data: T) => boolean): boolean
}
