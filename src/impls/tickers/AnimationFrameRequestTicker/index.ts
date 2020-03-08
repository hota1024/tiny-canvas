import { TickerInterface } from '../../../interfaces/Ticker'

/*
 * AnimationFrameRequestTicker class
 */
export class AnimationFrameRequestTicker implements TickerInterface {
  /**
   * Whether is started.
   */
  private started = false

  /**
   * Current frames.
   */
  private mCurrentFrames = 0

  /**
   * Callback function.
   */
  private callback?: () => any

  /**
   * Set callback function.
   *
   * @param callback
   */
  setCallback(callback: () => any) {
    this.callback = callback
  }

  /**
   * Start tick.
   */
  start() {
    if (this.started) return
    this.started = true
    requestAnimationFrame(this.callbackWrapper.bind(this))
  }

  /**
   * Callback wrapper function.
   */
  private callbackWrapper() {
    this.callback()
    ++this.mCurrentFrames
  }

  /**
   * End tick.
   */
  end() {
    this.started = false
  }

  /**
   * Current frames.
   */
  currentFrames() {
    return this.mCurrentFrames
  }

  /**
   * Whether is started.
   */
  isStarted() {
    return this.started
  }

  /**
   * Whether is ended.
   */
  isEnded() {
    return !this.started
  }
}
