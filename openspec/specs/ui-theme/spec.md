## Purpose

Defines requirements for DaisyUI theme integration — plugin registration, default theme application, and Tailwind CSS compatibility.

## Requirements

### Requirement: DaisyUI plugin is registered
The app SHALL register DaisyUI as a Tailwind CSS v4 plugin via the `@plugin "daisyui"` directive in the CSS entrypoint so that DaisyUI component classes are available globally.

#### Scenario: DaisyUI classes resolve at build time
- **WHEN** the app is built with `bun run build`
- **THEN** DaisyUI component utility classes (e.g., `btn`, `card`, `badge`) are present in the generated CSS output

### Requirement: A default theme is applied at the root
The app SHALL set a `data-theme` attribute on the `<html>` element in `app.html` so that DaisyUI theme tokens are resolved before any JavaScript executes, preventing a flash of unstyled content.

#### Scenario: Theme attribute is present on page load
- **WHEN** a user loads any page in the app
- **THEN** the `<html>` element SHALL have `data-theme="light"` (or the configured default theme)

#### Scenario: DaisyUI color tokens resolve correctly
- **WHEN** a component uses a DaisyUI semantic color class (e.g., `bg-primary`, `text-base-content`)
- **THEN** the color resolves to a valid CSS custom property defined by the active DaisyUI theme

### Requirement: Tailwind utility classes remain functional
The addition of DaisyUI SHALL NOT break existing Tailwind CSS utility class usage in the app.

#### Scenario: Existing layout utilities still apply
- **WHEN** DaisyUI is installed and the app is running
- **THEN** Tailwind utility classes such as `flex`, `grid`, `p-4`, and `text-sm` SHALL continue to apply their expected styles
