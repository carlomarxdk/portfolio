# Tailwind CSS v4 Migration Notes

This project has been upgraded from Tailwind CSS v3.4.14 to v4.1.18.

## Changes Made

### 1. Dependencies Updated
- **tailwindcss**: `^3.4.14` → `4.1.18`
- **@tailwindcss/cli**: Added `4.1.18` (new requirement for v4)
- **@tailwindcss/typography**: `^0.5.15` → `^0.5.19`

### 2. CSS Configuration (static/src/input.css)
Migrated from JavaScript-based config to CSS-based configuration:

- **Import syntax**: Changed from `@tailwind base/components/utilities` to `@import "tailwindcss"`
- **Content scanning**: Added `@source` directives to specify content paths
- **Plugin loading**: Changed from JS `require()` to CSS `@plugin` directive
- **Theme configuration**: Moved from `tailwind.config.js` to CSS `@theme` directive
- **Typography customizations**: Moved from JS function to CSS `@layer base` rules using CSS variables
- **Custom utilities**: Changed from `@layer utilities` and `@layer components` to `@utility` directive
- **Theme function**: Replaced `theme()` function calls with CSS variables using `var(--color-*)` syntax

### 3. Configuration File
- **tailwind.config.js**: Renamed to `tailwind.config.js.v3-backup` (no longer needed)
- All configuration now lives in `static/src/input.css`

### 4. Bug Fixes
- Fixed typo: `font-funel-display` → `font-funnel`

## Key Differences in Tailwind v4

1. **CSS-first configuration**: Theme and plugins are now configured in CSS instead of JavaScript
2. **Simplified imports**: Single `@import "tailwindcss"` replaces three separate `@tailwind` directives
3. **Content scanning**: Use `@source` directives in CSS or CLI flags instead of `tailwind.config.js`
4. **Plugin syntax**: Plugins use `@plugin` directive instead of JS `require()`
5. **CSS variables**: Use `var(--color-red-500)` instead of `theme(colors.red.500)` for theme values
6. **Custom utilities**: Use `@utility` directive instead of `@layer utilities` or `@layer components`

## Build Process

The build process remains the same:
```bash
npm run build:css  # Build CSS only
npm run build      # Build CSS + Hugo site
```

## Custom Theme

Custom theme values are now defined using CSS custom properties in the `@theme` block:
- Font families: `--font-funnel`, `--font-cabin`
- Breakpoints: `--breakpoint-sm`, `--breakpoint-md`, etc.
- Animations: `--animate-blob`

## Typography Plugin

The `@tailwindcss/typography` plugin is loaded via `@plugin` directive, and all customizations are applied through CSS selectors in the `@layer base` block.

## References

- [Tailwind CSS v4.0 Documentation](https://tailwindcss.com/docs)
- [Upgrading to v4](https://tailwindcss.com/docs/upgrade-guide)
