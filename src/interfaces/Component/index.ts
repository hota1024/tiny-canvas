/*
 * Component interface.
 */
export interface ComponentInterface {
  /**
   * Call on frame start.
   */
  onFrameStart(): any

  /**
   * Call on frame end.
   */
  onFrameEnd(): any
}
