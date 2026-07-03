## Purpose

Defines requirements for the app's base font stack and global typographic defaults.

## Requirements

### Requirement: Rounded Sans font stack is applied globally
The app SHALL set the Rounded Sans system font stack on `body` so that all text in the app inherits a consistent, rounded sans-serif typeface without loading any external fonts.

The font stack SHALL be:
```
ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif
```

#### Scenario: Body font stack is set in CSS
- **WHEN** the app's CSS is loaded
- **THEN** the `body` element SHALL have a `font-family` matching the Rounded Sans stack

#### Scenario: No external font requests are made
- **WHEN** any page in the app loads
- **THEN** the browser SHALL make zero font file network requests for body text

#### Scenario: DaisyUI components inherit the font stack
- **WHEN** a DaisyUI component (e.g., `btn`, `card`) is rendered
- **THEN** its text SHALL render in the Rounded Sans font stack via CSS inheritance
