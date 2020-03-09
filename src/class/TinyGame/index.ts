import { RendererInterface } from '../../interfaces'
import { LineCap } from '../../types/LinaCap'
import { TextAlign } from '../../types/TextAlign'
import { Point2D } from '../../types/Point2D'
import { isPoint2D } from '../../helpers'
import { TickerInterface } from '../../interfaces/Ticker'
import { InputManagerInterface } from '../../interfaces/InputManager'
import { ComponentInterface } from '../../interfaces/Component'
import { KeyCode } from '../..'

/**
 * TinyGame class.
 */
export class TinyGame {
  /**
   * Renderer.
   */
  protected renderer: RendererInterface

  /**
   * Input manager.
   */
  protected inputManager: InputManagerInterface

  /**
   * Ticker.
   */
  protected ticker: TickerInterface

  /**
   * Components.
   */
  protected components: ComponentInterface[] = []

  /**
   * Cursor.
   */
  get cursor() {
    return this.cursorPos()
  }

  /**
   * Mouse.
   */
  get mouse() {
    return {
      leftPressed: this.leftPressed(),
      leftUp: this.leftUp(),
      leftDown: this.leftDown()
    }
  }

  /**
   * Center position.
   */
  get center(): Point2D {
    return {
      x: this.renderer.width / 2,
      y: this.renderer.height / 2
    }
  }

  /**
   * TinyGame constructor.
   *
   * @param renderer
   * @param inputManager
   * @param ticker
   */
  constructor(
    renderer: RendererInterface,
    inputManager: InputManagerInterface,
    ticker: TickerInterface
  ) {
    // Set components.
    this.renderer = renderer
    this.inputManager = inputManager
    this.ticker = ticker

    // Register components.
    this.register(this.renderer)
    this.register(this.inputManager)
    this.register(this.ticker)

    // Set ticker callback.
    this.ticker.setCallback(this.onFrameWrapper.bind(this))
  }

  /**
   * Register a component.
   *
   * @param component
   */
  protected register(component: ComponentInterface) {
    this.components.push(component)
  }

  /**
   * onFrame wrapper.
   */
  private onFrameWrapper() {
    this.components.forEach(component => component.onFrameStart())
    this.onFrame()
    this.components.forEach(component => component.onFrameEnd())
  }

  /**
   * Call on frame.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected onFrame() {}

  /**
   * Start application.
   */
  start() {
    this.ticker.start()
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
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): any

  /**
   * Draw filled rect with point.
   *
   * @param point
   * @param width
   * @param height
   * @param color
   */
  fillRect(point: Point2D, width: number, height: number, color: string)

  /**
   * Fill rect.
   *
   * @param args
   */
  fillRect(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.fillRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3]
      )
    } else {
      return this.renderer.fillRect(args[0], args[1], args[2], args[3], args[4])
    }
  }

  /**
   * Draw stroked rect.
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
   * Draw stroked rect with point.
   *
   * @param point
   * @param width
   * @param height
   * @param color
   * @param lineWidth
   */
  strokeRect(
    point: Point2D,
    width: number,
    height: number,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw filled rect.
   *
   * @param args
   */
  strokeRect(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.strokeRect(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4]
      )
    } else {
      return this.renderer.strokeRect(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5]
      )
    }
  }

  /**
   * Draw filled circle.
   *
   * @param x
   * @param y
   * @param radius
   * @param color
   */
  fillCircle(x: number, y: number, radius: number, color: string)

  /**
   * Draw filled circle with point.
   *
   * @param point
   * @param radius
   * @param color
   */
  fillCircle(point: Point2D, radius: number, color: string)

  /**
   * Draw filled circle.
   *
   * @param args
   */
  fillCircle(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.fillCircle(args[0].x, args[0].y, args[1], args[2])
    } else {
      return this.renderer.fillCircle(args[0], args[1], args[2], args[3])
    }
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
  ): any

  /**
   * Draw stroked circle with point.
   *
   * @param point
   * @param radius
   * @param color
   * @param lineWidth
   */
  strokeCircle(point: Point2D, radius: number, color: string, lineWidth: number)

  /**
   * Draw stroked circle.
   *
   * @param args
   */
  strokeCircle(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.strokeCircle(
        args[0].x,
        args[0].y,
        args[2],
        args[3],
        args[4]
      )
    } else {
      return this.renderer.strokeCircle(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4]
      )
    }
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
  )

  /**
   * Draw line.
   *
   * @param p0
   * @param p1
   * @param color
   * @param lineWidth
   * @param lineCap
   */
  line(
    p0: Point2D,
    p1: Point2D,
    color: string,
    lineWidth: number,
    lineCap: LineCap
  )

  /**
   * Draw line.jj
   *
   * @param x0
   * @param y1
   * @param p1
   * @param color
   * @param lineWidth
   */
  line(
    x0: number,
    y1: number,
    p1: Point2D,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw line.
   *
   * @param p0
   * @param x1
   * @param y1
   * @param color
   * @param lineWidth
   */
  line(
    p0: Point2D,
    x1: number,
    y1: number,
    color: string,
    lineWidth: number
  ): any

  /**
   * Draw line.
   *
   * @param args
   */
  line(...args: any[]) {
    if (typeof args[0] === 'number' && typeof args[1] === 'number') {
      if (isPoint2D(args[2])) {
        // line(x0, y0, Point2D, color, lineWidth)
        return this.renderer.line(
          args[0],
          args[1],
          args[2].x,
          args[2].y,
          args[3],
          args[4],
          args[5]
        )
      } else {
        // line(x0, y0, x1, y1, color, lineWidth)
        return this.renderer.line(
          args[0],
          args[1],
          args[2],
          args[3],
          args[4],
          args[5],
          args[6]
        )
      }
    }

    if (isPoint2D(args[0])) {
      if (isPoint2D(args[1])) {
        // line(Point2D, Point2D, color, lineWidth)
        return this.renderer.line(
          args[0].x,
          args[0].y,
          args[1].x,
          args[1].y,
          args[2],
          args[3],
          args[4]
        )
      } else {
        // line(Point2D, x1, y1, color, lineWidth)
        return this.renderer.line(
          args[0].x,
          args[0].y,
          args[1],
          args[2],
          args[3],
          args[4],
          args[5]
        )
      }
    }
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
  )

  /**
   * Draw filled polygon.
   *
   * @param point
   * @param radius
   * @param corners
   * @param offsetAngle
   * @param color
   */
  fillPolygon(
    point: Point2D,
    radius: number,
    corners: number,
    offsetAngle: number,
    color: string
  ): any

  /**
   * Draw filled polygon.
   *
   * @param args
   */
  fillPolygon(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.fillPolygon(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4]
      )
    } else {
      return this.renderer.fillPolygon(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5]
      )
    }
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
  ): any

  /**
   * Draw stroked polygon.
   *
   * @param point
   * @param radius
   * @param corners
   * @param offsetAngle
   * @param color
   * @param lineWidth
   */
  strokePolygon(
    point: Point2D,
    radius: number,
    corners: number,
    offsetAngle: number,
    color: string,
    lineWidth: number
  )

  /**
   * Draw stroked polygon.
   *
   * @param args
   */
  strokePolygon(...args: any[]) {
    if (isPoint2D(args[0])) {
      return this.renderer.strokePolygon(
        args[0].x,
        args[0].y,
        args[1],
        args[2],
        args[3],
        args[4],
        args[5]
      )
    } else {
      return this.renderer.strokePolygon(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6]
      )
    }
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
  )

  /**
   * Draw filled text.
   *
   * @param text
   * @param point
   * @param font
   * @param size
   * @param align
   * @param color
   */
  fillText(
    text: string,
    point: Point2D,
    font: string,
    size: number,
    align: TextAlign,
    color: string
  )

  /**
   * Draw filled text.
   *
   * @param args
   */
  fillText(...args: any[]) {
    if (isPoint2D(args[1])) {
      this.renderer.fillText(
        args[0],
        args[1].x,
        args[1].y,
        args[2],
        args[3],
        args[4],
        args[5]
      )
    } else {
      this.renderer.fillText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6]
      )
    }
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
  ): any

  /**
   * Draw stroked text.
   *
   * @param text
   * @param point
   * @param font
   * @param size
   * @param align
   * @param color
   */
  strokeText(
    text: string,
    point: Point2D,
    font: string,
    size: number,
    align: TextAlign,
    color: string,
    lineWidth: number
  )

  /**
   * Draw stroked text.
   *
   * @param args
   */
  strokeText(...args: any[]) {
    if (isPoint2D(args[1])) {
      this.renderer.strokeText(
        args[0],
        args[1].x,
        args[2].y,
        args[3],
        args[4],
        args[5],
        args[6],
        args[7]
      )
    } else {
      this.renderer.strokeText(
        args[0],
        args[1],
        args[2],
        args[3],
        args[4],
        args[5],
        args[6],
        args[7]
      )
    }
  }

  /**
   * Rotate.
   *
   * @param x
   * @param y
   * @param angle
   */
  rotate(x: number, y: number, angle: number) {
    this.renderer.rotate(x, y, angle)
  }

  /**
   * Returns cursor position.
   */
  cursorPos() {
    return this.inputManager.cursorPos()
  }

  /**
   * Returns whether mouse left clicking.
   */
  leftPressed() {
    return this.inputManager.leftPressed()
  }

  /**
   * Returns whether mouse left up.
   */
  leftUp() {
    return this.inputManager.leftUp()
  }

  /**
   * Returns whether mouse left down.
   */
  leftDown() {
    return this.inputManager.leftDown()
  }

  /**
   * Returns whether key pressed.
   */
  keyPressed(code: KeyCode) {
    return this.inputManager.keyPressed(code)
  }

  /**
   * Returns whether key up.
   */
  keyUp(code: KeyCode) {
    return this.inputManager.keyUp(code)
  }

  /**
   * Returns whether key down.
   */
  keyDown(code: KeyCode) {
    return this.inputManager.keyDown(code)
  }
}
