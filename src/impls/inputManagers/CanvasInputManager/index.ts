import { InputManagerInterface } from '../../../interfaces/InputManager'
import { Component } from '../../../abstracts'
import { Point2D, KeyCode } from '../../../types'

/**
 * CanvasInputManagerKeyState type.
 */
export type CanvasInputManagerKeyState = {
  /**
   * Whether is pressed.
   */
  isPressed: boolean

  /**
   * Whether is up.
   */
  isUp: boolean

  /**
   * Whether is down.
   */
  isDown: boolean
}

/*
 * CanvasInputManager class.
 */
export class CanvasInputManager extends Component
  implements InputManagerInterface {
  /**
   * Mouse left pressed.
   */
  private mLeftPressed = false

  /**
   * Mouse left down.
   */
  private mLeftDown = false

  /**
   * Mouse left up.
   */
  private mLeftUp = false

  /**
   * Cursor position.
   */
  private mCursorPos: Point2D = {
    x: 0,
    y: 0
  }

  /**
   * Keys state.
   */
  private mKeysState: {
    [K in KeyCode]: CanvasInputManagerKeyState
  }

  /**
   * CanvasInputManager constructor.
   *
   * @param canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    super()

    this.mKeysState = {} as any
    Object.keys(KeyCode).forEach(code => {
      this.mKeysState[code] = {
        isPressed: false,
        isUp: false,
        isDown: false
      }
    })

    canvas.addEventListener('mousedown', () => {
      this.mLeftPressed = true
      this.mLeftDown = true
    })

    canvas.addEventListener('mouseup', () => {
      this.mLeftPressed = false
      this.mLeftDown = false
    })

    canvas.addEventListener('mousemove', event => {
      const rect = canvas.getBoundingClientRect()

      this.mCursorPos.x = event.clientX - rect.left
      this.mCursorPos.y = event.clientY - rect.top
    })

    document.addEventListener('keydown', event => {
      if (typeof this.mKeysState[event.code] === 'undefined') return

      const state: CanvasInputManagerKeyState = this.mKeysState[event.code]
      state.isPressed = true
      state.isDown = true
    })

    document.addEventListener('keyup', event => {
      if (typeof this.mKeysState[event.code] === 'undefined') return

      const state: CanvasInputManagerKeyState = this.mKeysState[event.code]
      state.isPressed = false
      state.isUp = true
    })
  }

  /**
   * Returns cursor position.
   */
  cursorPos() {
    return this.mCursorPos
  }

  /**
   * Returns whether mouse left clicking.
   */
  leftPressed() {
    return this.mLeftPressed
  }

  /**
   * Returns whether mouse left up.
   */
  leftUp() {
    return this.mLeftUp
  }

  /**
   * Returns whether mouse left down.
   */
  leftDown() {
    return this.mLeftDown
  }

  /**
   * Returns whether key pressed.
   */
  keyPressed(code: KeyCode) {
    return this.mKeysState[code].isPressed
  }

  /**
   * Returns whether key up.
   */
  keyUp(code: KeyCode) {
    return this.mKeysState[code].isUp
  }

  /**
   * Returns whether key down.
   */
  keyDown(code: KeyCode) {
    return this.mKeysState[code].isDown
  }

  /**
   * Call on frame end.
   */
  onFrameEnd() {
    this.mLeftDown = false
    this.mLeftUp = false

    Object.keys(this.mKeysState).forEach(key => {
      this.mKeysState[key].isUp = false
      this.mKeysState[key].isDown = false
    })
  }
}
