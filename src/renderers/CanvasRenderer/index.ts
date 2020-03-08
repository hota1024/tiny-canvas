import { RendererInterface } from '../../interfaces/Renderer'
import { LineCap } from '../../types/LinaCap'
import { TextAlign } from '../../types/TextAlign'

/*
 * CanvasRenderer class.
 */
export class CanvasRenderer implements RendererInterface {
  /**
   * Canvas.
   */
  private readonly canvas: HTMLCanvasElement

  /**
   * Canvas context.
   */
  private readonly context: CanvasRenderingContext2D

  /**
   * CanvasRenderer constructor.
   *
   * @param canvas
   */
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    const context = canvas.getContext('2d')

    if (!context) {
      throw new Error('[tiny-canvas] Canvas rendering context is not defined.')
    }

    this.context = context
    this.context.save() // Save initial state.
  }

  /**
   * Draw filled rect.
   *
   * @param x
   * @param y
   * @param width
   * @param height
   * @param color
   */
  fillRect(x: number, y: number, width: number, height: number, color: string) {
    this.restore()
    this.setFillStyle(color)
    this.context.fillRect(x, y, width, height)
  }

  /**
   * Draw filled rect.
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
  ) {
    this.restore()
    this.setStroke(color, lineWidth)
    this.context.strokeRect(x, y, width, height)
  }

  /**
   * Draw filled circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param color
   */
  fillCircle(x: number, y: number, radius: number, color: string) {
    this.restore()
    this.setFillStyle(color)
    this.beginPath()
    this.context.arc(x, y, radius, 0, Math.PI * 2)
    this.fill()
  }

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
  ) {
    this.restore()
    this.setStroke(color, lineWidth)
    this.beginPath()
    this.context.arc(x, y, radius, 0, Math.PI * 2)
    this.stroke()
  }

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
  ) {
    this.setStroke(color, lineWidth)
    this.setLineCap(lineCap)
    this.beginPath()
    this.moveTo(x0, y0)
    this.context.lineTo(x1, y1)
    this.closePath()
    this.stroke()
  }

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
  ) {
    this.setFillStyle(color)
    this.beginPath()
    let degree = offsetAngle

    for (let i = 0; i < corners; ++i) {
      const rad = (degree / 360) * Math.PI * 2
      const ax = x + Math.cos(rad) * radius
      const ay = y + Math.sin(rad) * radius

      if (i === 0) {
        this.moveTo(ax, ay)
      } else {
        this.context.lineTo(ax, ay)
      }

      degree += 360 / corners
    }

    this.fill()
  }

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
  ) {
    this.setStroke(color, lineWidth)
    this.beginPath()
    let degree = offsetAngle

    for (let i = 0; i < corners; ++i) {
      const rad = (degree / 360) * Math.PI * 2
      const ax = x + Math.cos(rad) * radius
      const ay = y + Math.sin(rad) * radius

      if (i === 0) {
        this.moveTo(ax, ay)
      } else {
        this.context.lineTo(ax, ay)
      }

      degree += 360 / corners
    }

    this.stroke()
  }

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
  ) {
    this.setFillStyle(color)
    this.setFont(font, size)
    this.context.textAlign = align
    this.context.fillText(text, x, y)
  }

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
  ) {
    this.setStroke(color, lineWidth)
    this.setFont(font, size)
    this.context.textAlign = align
    this.context.strokeText(text, x, y)
  }

  /**
   * Rotate.
   *
   * @param x
   * @param y
   * @param angle
   */
  rotate(x: number, y: number, angle: number) {
    this.context.translate(x, y)
    this.context.rotate(angle)
  }

  /**
   * Set font.
   *
   * @param fontFamily
   * @param size
   */
  private setFont(fontFamily: string, size: number) {
    this.context.font = `${size}px "${fontFamily}"`
  }

  /**
   * Set line cap.
   *
   * @param cap
   */
  private setLineCap(cap: LineCap) {
    this.context.lineCap = cap
  }

  /**
   * Set context line width.
   *
   * @param width
   */
  private setLineWidth(width: number) {
    this.context.lineWidth = width
  }

  /**
   * Set context fill style.
   *
   * @param style
   */
  private setFillStyle(style: string) {
    this.context.fillStyle = style
  }

  /**
   * Set context stroke style.
   *
   * @param style
   */
  private setStrokeStyle(style: string) {
    this.context.strokeStyle = style
  }

  /**
   * Set context stroke style and line width.
   *
   * @param style
   * @param lineWidth
   */
  private setStroke(style: string, lineWidth) {
    this.setStrokeStyle(style)
    this.setLineWidth(lineWidth)
  }

  /**
   * Restore context state.
   */
  private restore() {
    this.context.restore()
  }

  /**
   * Begin path.
   */
  private beginPath() {
    this.context.beginPath()
  }

  /**
   * Close path.
   */
  private closePath() {
    this.context.closePath()
  }

  /**
   * Fill.
   */
  private fill() {
    this.context.fill()
  }

  /**
   * Stroke.
   */
  private stroke() {
    this.context.stroke()
  }

  /**
   * Move to.
   *
   * @param x
   * @param y
   */
  private moveTo(x: number, y: number) {
    this.context.moveTo(x, y)
  }
}
