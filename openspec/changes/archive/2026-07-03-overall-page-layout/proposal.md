## Why

The app currently has no structural layout — just a bare SvelteKit root route. Before building any features, we need a persistent app shell that provides navigation and a consistent visual frame for all pages. Now that DaisyUI is installed, we can use its drawer/sidebar primitives to build this efficiently.

## What Changes

- Create a persistent app shell component with a collapsible sidebar and a main content area
- Add a top navigation bar (navbar) with app branding and user actions
- Update `+layout.svelte` to render the app shell wrapping all routes
- Add placeholder navigation links in the sidebar (to be populated as features are built)
- Remove the bare SvelteKit default content from `+page.svelte`
- Define a responsive grid/flex layout system with breakpoint-aware utility classes for use within page content areas

## Capabilities

### New Capabilities

- `app-shell`: The persistent layout frame — sidebar, navbar, and main content area — that wraps all pages in the app.
- `layout-system`: Responsive grid and flex layout primitives that page content uses to arrange itself at different viewport sizes.

### Modified Capabilities

<!-- No existing spec-level requirements are changing. -->

## Impact

- **`src/routes/+layout.svelte`**: Updated to render the app shell around `{@render children()}`
- **`src/routes/+page.svelte`**: Default placeholder content replaced
- **`src/lib/`**: New `AppShell.svelte` (or equivalent layout components) added
- **`src/routes/layout.css`**: Layout system utility classes or custom properties added
- **DaisyUI**: Uses drawer, navbar, and menu components — no new dependencies required
- **No breaking changes** to routing — the shell is purely a layout wrapper
