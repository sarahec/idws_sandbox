## ADDED Requirements

### Requirement: Responsive grid layout is available for page content
The layout system SHALL provide responsive grid utilities so that page content can arrange itself in columns that adapt to the viewport width.

#### Scenario: Single column on mobile
- **WHEN** the viewport width is below the `md` breakpoint
- **THEN** grid-based page content SHALL stack in a single column

#### Scenario: Multi-column on wider viewports
- **WHEN** the viewport width is at or above the `md` breakpoint
- **THEN** grid-based page content SHALL display in two or more columns as defined by the page template

### Requirement: Flex layout utilities are available for component-level composition
The layout system SHALL provide flex utilities so that components can arrange their internal elements in rows or columns with alignment control.

#### Scenario: Flex row alignment
- **WHEN** a component uses flex row layout
- **THEN** its children SHALL be arranged horizontally and respond to justify/align utility classes

### Requirement: Layout system works within the app shell main content area
The responsive layout utilities SHALL function correctly when used inside the main content area of the app shell, without interference from the shell's own layout structure.

#### Scenario: Grid layout inside main content area
- **WHEN** a page using a grid layout is rendered inside the app shell
- **THEN** the grid columns SHALL be calculated relative to the main content area width, not the full viewport
