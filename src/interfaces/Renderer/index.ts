import { TextAlign } from '../../types/TextAlign'
import { LineCap } from '../../types/LinaCap'

/*
 * Renderer interface.
 */
export interface RendererInterface {
  /**
   * Draw filled rectangle.
   *
   * @param x
   * @param y
   * @param width
   * @param height
   * @param color
   */
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): any

  /**
   * Draw stroked rectangle.
   *
   * @param x
   * @param y
   * @param width
   * @param height
   * @param color
   * @param lineWidth
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw filled circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param color
   */
  fillCircle(x: number, y: number, radius: number, color: string): any

  /**
   * Draw stroked circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param color
   * @param lineWidth
   */
  strokeCircle(
    x: number,
    y: number,
    radius: number,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw line.
   *
   * @param x0
   * @param y0
   * @param x1
   * @param y1
   * @param color
   * @param lineWidth
   * @param lineCap
   */
  line(
    x0: number,
    y0: number,
    x1: number,
    y1: number,
    color: string,
    lineWidth: number,
    lineCap: LineCap
  ): any

  /**
   * Draw filled polygon.
   *
   * @param x
   * @param y
   * @param radius
   * @param corners
   * @param offsetAngle
   * @param color
   */
  fillPolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    color: string
  ): any

  /**
   * Draw stroked polygon.
   *
   * @param x
   * @param y
   * @param radius
   * @param corners
   * @param offsetAngle
   * @param color
   * @param lineWidth
   */
  strokePolygon(
    x: number,
    y: number,
    radius: number,
    corners: number,
    offsetAngle: number,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw filled text.
   *
   * @param text
   * @param x
   * @param y
   * @param font
   * @param size
   * @param align
   * @param color
   */
  fillText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    align: TextAlign,
    color: string
  ): any

  /**
   * Draw stroked text.
   *
   * @param text
   * @param x
   * @param y
   * @param font
   * @param size
   * @param align
   * @param color
   */
  strokeText(
    text: string,
    x: number,
    y: number,
    font: string,
    size: number,
    align: TextAlign,
    color: string,
    lineWidth: number
  ): any

  /**
   * Rotate.
   *
   * @param x
   * @param y
   * @param angle
   */
  rotate(x: number, y: number, angle: number): any
}
