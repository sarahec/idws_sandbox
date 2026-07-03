## Why

This project needs a consistent, theme-aware component system. Raw Tailwind CSS alone requires hand-rolling every interactive component pattern and lacks a unified theming layer. DaisyUI provides a semantic component class system built on top of Tailwind v4, giving us accessible, themeable UI primitives without replacing Tailwind's utility foundation.

## What Changes

- Install `daisyui` as a Tailwind CSS v4 plugin
- Configure DaisyUI in the Tailwind/Vite setup (CSS-based plugin registration for Tailwind v4)
- Establish a base theme configuration (light/dark or a named DaisyUI theme)
- Update the app layout and root CSS to activate DaisyUI's base styles
- Remove or update any existing raw Tailwind component patterns that DaisyUI now covers

## Capabilities

### New Capabilities

- `ui-theme`: DaisyUI theme configuration — defines the active theme(s), light/dark mode support, and how theming integrates with the app layout.

### Modified Capabilities

<!-- No existing specs require behavioral changes. -->

## Impact

- **Dependencies**: `daisyui` added as a dev dependency alongside `tailwindcss@^4`
- **CSS entrypoint**: Tailwind v4 uses `@import "tailwindcss"` + `@plugin "daisyui"` in CSS rather than `tailwind.config.js`
- **Existing styles**: `src/routes/layout.css` and `+layout.svelte` will be updated to use DaisyUI base styles
- **No breaking changes** to existing route components — DaisyUI is purely additive at this stage
