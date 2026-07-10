## Goal

The intro paragraph currently appears in both the Hero and the About Me section. Keep it only in the Hero.

## Change

In `src/pages/Index.tsx`, About Me section (around lines 324–330):

- Remove the bio `<p>` paragraph that was recently added.
- Restore the heading's original bottom margin (`mb-16`).
- Leave the Education and Coursework cards untouched.

Result: About Me shows just the "About Me" heading plus the Education + Coursework grid. The Hero keeps the full intro paragraph, tagline, and social/contact buttons unchanged.
