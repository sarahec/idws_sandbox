## Context

The app is a SvelteKit project with Tailwind CSS v4 and DaisyUI v5. Currently `+layout.svelte` is a thin wrapper with no visual structure. All pages need a consistent frame before feature work begins. DaisyUI's `drawer` component provides a sidebar+content split natively; Tailwind CSS v4's grid/flex utilities provide the responsive layout primitives.

```
┌─────────────────────────────────────────────────────┐
│                      Navbar                         │
├──────────────┬──────────────────────────────────────┤
│              │                                      │
│   Sidebar    │          Main Content                │
│  (nav links) │        {@render children()}          │
│              │                                      │
│              │                                      │
└──────────────┴──────────────────────────────────────┘
  hidden on mobile, drawer overlay on md, fixed on lg+
```

## Goals / Non-Goals

**Goals:**
- App shell: sidebar (collapsible on mobile via DaisyUI drawer), navbar, main content slot
- Layout system: responsive grid/flex classes available globally for page content composition
- Mobile-first: sidebar collapses to a drawer toggle on small viewports

**Non-Goals:**
- Populating sidebar nav items (placeholder links only; routes added as features are built)
- Authentication-gated nav (follow-on work)
- Theming or dark mode toggle (separate change)
- Page-specific layouts (each route composes from the layout system independently)

## Decisions

### Use DaisyUI `drawer` for sidebar

DaisyUI's `drawer` component handles the show/hide toggle, overlay, and responsive behavior declaratively via CSS. No JS state management needed for the open/close toggle on mobile.

**Alternatives considered:**
- Custom CSS sidebar: More control but duplicates what DaisyUI already provides well.
- Svelte store-driven visibility: Adds JS overhead; CSS-only drawer is sufficient for this use case.

### Layout system: Tailwind utilities, no custom classes

The layout system is expressed through Tailwind v4 responsive utility classes (`grid`, `flex`, `sm:`, `md:`, `lg:` prefixes) applied directly in components. No custom CSS layer needed at this stage.

**Alternatives considered:**
- Custom CSS grid templates in `layout.css`: Useful if we need named grid areas; defer until there's a concrete need.

### AppShell as a Svelte component in `src/lib/`

The shell is extracted to `src/lib/components/AppShell.svelte` so it can be imported and tested independently of the route layout.

**Alternatives considered:**
- Inline all shell markup in `+layout.svelte`: Works but harder to isolate and reuse.

## Risks / Trade-offs

- **DaisyUI drawer requires a checkbox toggle input** → The drawer open/close on mobile is controlled by a hidden `<input type="checkbox">`. This is accessible but slightly unusual. Mitigation: follow DaisyUI docs exactly; add `aria-label` to the toggle button.
- **Sidebar width on desktop** → Fixed sidebar width may conflict with future wide-content pages. Mitigation: use `lg:w-64` (adjustable) and let main content fill remaining space with `flex-1`.
- **Tailwind purge and dynamic classes** → Dynamically constructed class strings may be purged. Mitigation: keep all classes as static strings in templates.
