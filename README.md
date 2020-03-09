# tiny-canavs

tiny-canvas is a simple HTML canvas library for TypeScript/JavaScript.

## Installation

```bash
yarn add tiny-canvas
# or
npm install tiny-canvas
```

## Usage

Simple usage(Draw circle at cursor position).

```typescript
import {
  TinyGame,
  CanvasRenderer,
  AnimationFrameRequestTicker,
  CanvasInputManager
} from 'tiny-canvas'

// Game class that extends TinyGame class
export class Game extends TinyGame {
  constructor(canvas: HTMLCanvasElement) {
    // TinyGame constructor (Renderer, InputManager, Ticker)
    super(
      new CanvasRenderer(canvas),
      new CanvasInputManager(canvas),
      new AnimationFrameRequestTicker()
    )
  }

  /**
   * Call on frame.
   */
  onFrame() {
    // Fill background.
    this.fillRect(this.leftTop, this.rightBottom, 'black')

    // Draw circle at cursor position.
    this.fillCircle(this.cursor, 32, 'white')
  }
}

```

## Build

Build `yarn build`
Watch build `yarn dev`
