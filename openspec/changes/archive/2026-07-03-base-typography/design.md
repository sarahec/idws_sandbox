## Context

Tailwind CSS v4 sets no default `font-family` on `body` (unlike v3, which applied `font-sans`). DaisyUI also does not impose a font stack. The app needs an explicit global rule. The Rounded Sans stack from [modern-font-stacks](https://github.com/system-fonts/modern-font-stacks#rounded-sans) is a zero-dependency, cross-platform approach.

Font stack:
```css
font-family: ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari,
             'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif;
```

Key platform mappings:
- **macOS/iOS Safari**: `ui-rounded` → SF Pro Rounded
- **macOS/iOS (non-Safari)**: `Hiragino Maru Gothic ProN`
- **Windows**: `Arial Rounded MT` / `Arial Rounded MT Bold`
- **Android**: `source-sans-pro` (best available approximation)
- **Fallback**: `sans-serif`

## Goals / Non-Goals

**Goals:**
- Apply the Rounded Sans font stack globally to `body` so all text inherits it
- Zero added dependencies, zero web font requests

**Non-Goals:**
- Custom heading sizes or type scale (Tailwind utilities handle that per-component)
- Monospace font stack (separate concern)
- Dark/light mode font variations

## Decisions

### Apply via `body` rule in `layout.css`

Setting `font-family` on `body` in the existing `src/routes/layout.css` is the minimal, idiomatic approach for Tailwind v4. All elements inherit from `body` by default.

**Alternatives considered:**
- Tailwind v4 `@theme` override for `--font-sans`: Valid, but would rename the semantic token from `font-sans` to this stack, which may surprise future contributors. A plain `body` rule is more explicit.
- CSS custom property on `:root`: Equivalent, but adds indirection with no benefit here.

## Risks / Trade-offs

- **`Arial Rounded MT Bold` name quirk** → This font is required for iOS/Mac installs where the non-bold variant isn't available. Having both in the stack is intentional per the spec.
- **`Hiragino Maru Gothic ProN` includes Japanese glyphs** → It covers all Latin characters correctly; no issue for an English-language app.
- **Calibri on Windows** → Not a rounded typeface, but the best fallback before `sans-serif`. Acceptable.
