import { Point2D, KeyCode } from '../../types'
import { ComponentInterface } from '../Component'

/*
 * InputManager interface.
 */
export interface InputManagerInterface extends ComponentInterface {
  /**
   * Returns cursor position.
   */
  cursorPos(): Point2D

  /**
   * Returns whether mouse left clicking.
   */
  leftPressed(): boolean

  /**
   * Returns whether mouse left up.
   */
  leftUp(): boolean

  /**
   * Returns whether mouse left down.
   */
  leftDown(): boolean

  /**
   * Returns whether key pressed.
   */
  keyPressed(code: KeyCode): boolean

  /**
   * Returns whether key up.
   */
  keyUp(code: KeyCode): boolean

  /**
   * Returns whether key down.
   */
  keyDown(code: KeyCode): boolean
}
