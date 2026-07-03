## Purpose

Defines requirements for the persistent app shell — the navbar, sidebar, and main content area that wraps all pages in the application.

## Requirements

### Requirement: App shell wraps all routes
The app SHALL render a persistent shell — comprising a navbar, a sidebar, and a main content area — around every page so that navigation and branding are always present.

#### Scenario: Shell present on every page
- **WHEN** a user navigates to any route in the app
- **THEN** the navbar, sidebar, and main content area SHALL all be rendered on the page

### Requirement: Sidebar is accessible on mobile via drawer
The sidebar SHALL be hidden by default on small viewports and accessible via a toggle button that opens it as an overlay drawer, so that mobile users can navigate without the sidebar consuming screen space.

#### Scenario: Sidebar hidden on mobile by default
- **WHEN** the viewport width is below the `md` breakpoint
- **THEN** the sidebar SHALL not be visible without user interaction

#### Scenario: Drawer toggle opens sidebar on mobile
- **WHEN** a user taps the sidebar toggle button on a small viewport
- **THEN** the sidebar SHALL slide in as an overlay and be fully navigable

### Requirement: Sidebar is persistently visible on large viewports
The sidebar SHALL be permanently visible and not collapsible on viewports at the `lg` breakpoint and above, so that desktop users always have access to navigation.

#### Scenario: Sidebar visible on desktop
- **WHEN** the viewport width is at or above the `lg` breakpoint
- **THEN** the sidebar SHALL be visible without any user interaction

### Requirement: Main content area renders page content
The main content area SHALL render the current route's page content via the SvelteKit layout slot, so that all pages appear inside the shell.

#### Scenario: Page content rendered inside shell
- **WHEN** a user navigates to any route
- **THEN** that route's page content SHALL appear inside the main content area of the shell
