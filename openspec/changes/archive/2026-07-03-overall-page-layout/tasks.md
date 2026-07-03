## 1. Create AppShell Component

- [x] 1.1 Create `src/lib/components/AppShell.svelte` with DaisyUI drawer structure (sidebar + navbar + main content slot)
- [x] 1.2 Add a navbar bar with app name/branding and a sidebar drawer toggle button for mobile
- [x] 1.3 Add a sidebar with placeholder navigation links (e.g., "Home", "Projects")
- [x] 1.4 Ensure sidebar is hidden on mobile (drawer overlay) and persistently visible on `lg+` viewports

## 2. Wire AppShell into Root Layout

- [x] 2.1 Update `src/routes/+layout.svelte` to import and render `AppShell` wrapping `{@render children()}`
- [x] 2.2 Replace the default content in `src/routes/+page.svelte` with a minimal placeholder (e.g., a heading)

## 3. Verify App Shell Behavior

- [x] 3.1 Run `bun run dev` and confirm the navbar and sidebar render on the home page
- [x] 3.2 Resize to a mobile viewport and confirm the sidebar is hidden; tap the toggle and confirm the drawer opens
- [x] 3.3 Resize to a desktop viewport (`lg+`) and confirm the sidebar is persistently visible

## 4. Verify Layout System

- [x] 4.1 Add a temporary grid layout demo to `+page.svelte` (e.g., a 2-column grid) and confirm it stacks on mobile and splits on `md+`
- [x] 4.2 Confirm grid layout renders correctly within the main content area (not full viewport width)
- [x] 4.3 Remove the temporary demo content from `+page.svelte` after verification

## 5. Final Checks

- [x] 5.1 Run `bun run check` and confirm 0 errors and 0 warnings
- [x] 5.2 Run `bun run build` and confirm the build succeeds
