# Activity 02 - Organize the Command Center

## Checks
- Narrow viewport (320px): [one column, no horizontal scrolling]
- Desktop viewport: [two columns]
- Keyboard Tab: [orange outline appears on every link]
- 200% zoom: [all content still reachable]
- Stylesheet removed: [page still reads in a logical order]

## Layout decision I can explain
The `.panel` rule uses `padding: 1rem` for space inside the border and
`margin-block: 1rem` for space between panels. The `@media (min-width: 48rem)`
rule changes `.status-grid` from one column to two columns on wider screens.

## Contrast
Dark text (#1b1b1b) on a light background (#f4f1ea) is easy to read.

## Independent task
The "Remote relay offline" panel uses the words "Status: OFFLINE", a warning
icon, and a dashed border, so it is understandable without color.

## Git
Commit/PR link: [paste your GitHub commit link here]