## Context

The project uses Tailwind CSS v4, which moved from a JS config file to a CSS-first configuration model. DaisyUI v5 supports Tailwind v4 via a CSS `@plugin` directive. The app currently has a minimal layout with `layout.css` and `+layout.svelte`. There are no existing component styles that conflict with DaisyUI.

## Goals / Non-Goals

**Goals:**
- Refer to https://daisyui.com/docs/install/sveltekit/ for installation instructions
- Install DaisyUI as specified
- Set a default theme (light) with dark mode support via `data-theme` attribute
- Apply `data-theme` to the root `<html>` element in `app.html`

**Non-Goals:**
- Migrating existing pages to use DaisyUI component classes (that is follow-on work)
- Building a theme switcher UI (covered separately if needed)
- Replacing or removing any Tailwind utility usage

## Decisions

Use the installation instructions from https://daisyui.com/docs/install/sveltekit/ to install DaisyUI.
### Set theme via `data-theme` on `<html>`

DaisyUI resolves theme tokens from a `data-theme` attribute on the root element. Setting it in `app.html` ensures it applies before any JS runs (no flash of unstyled content).

**Alternatives considered:**
- Setting theme via a Svelte store + reactive class: Adds JS dependency and risks FOUC.

### Default theme: `light`

Keeps the baseline predictable. Dark mode can be toggled later by changing `data-theme` on `<html>` at runtime.

## Risks / Trade-offs

- **DaisyUI v4 vs v5** → DaisyUI v5 targets Tailwind v4; v4 targets Tailwind v3. Using the wrong major version will cause plugin registration to fail. Mitigation: pin `daisyui@^5` in package.json.
- **Existing utility classes** → DaisyUI's base reset may subtly affect existing raw Tailwind utility styling. Mitigation: visually verify the app after install; changes are purely additive.
- **`@tailwindcss/forms` and `@tailwindcss/typography` interaction** → Both plugins are already installed. DaisyUI is compatible but may override some form base styles. Mitigation: test form elements after integration.
