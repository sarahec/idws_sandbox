## Why

The app currently inherits browser default fonts with no intentional typography. Establishing a base font stack now — before the app shell and pages are built out — ensures a consistent, friendly visual tone from the start. The Rounded Sans system font stack gives a softer, approachable feel without any font loading overhead, using fonts already present on every major OS.

## What Changes

- Set the Rounded Sans system font stack as the base `font-family` for the app
- Apply it globally via the CSS entrypoint so all text inherits it by default

## Capabilities

### New Capabilities

- `base-typography`: The app's base font stack and typographic defaults applied globally.

### Modified Capabilities

<!-- No existing spec-level requirements are changing. -->

## Impact

- **`src/routes/layout.css`**: A `@layer base` or `:root` / `body` rule added to apply the font stack
- **No new dependencies**: The Rounded Sans stack is entirely system fonts — no web font loading
- **DaisyUI compatibility**: DaisyUI inherits `font-family` from the base styles; this will apply to all DaisyUI components automatically
