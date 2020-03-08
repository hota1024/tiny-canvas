/*
 * TickerInterface.
 */
export interface TickerInterface {
  /**
   * Set callback.
   */
  setCallback(callback: () => any): any

  /**
   * Start tick.
   */
  start(): any

  /**
   * End tick.
   */
  end(): any

  /**
   * Returns current frames.
   */
  currentFrames(): number

  /**
   * Whether is started.
   */
  isStarted(): boolean

  /**
   * Whether is ended.
   */
  isEnded(): boolean
}
