# Zhangwei Chen personal site design

## Direction

An editorial research notebook with the visual discipline of a lab memo. Warm paper, ink, cobalt, and a measured signal green carry the page. The hero uses a real VLA-Sync rollout poster as proof, while rules, labels, and monospace metadata create the feeling of a working research archive.

## Type

- Display: `Georgia`, `Times New Roman`, serif fallback.
- Body: `Inter`, `Segoe UI`, `Arial`, sans-serif fallback.
- Metadata and metrics: `IBM Plex Mono`, `Consolas`, monospace fallback.

## Tokens

```css
--paper: #f3f2ec;
--ink: #172023;
--muted: #667175;
--rule: #cfd2ca;
--cobalt: #2452e8;
--signal: #c8ef53;
--soft-blue: #dfe7ff;
--warm: #e8e1d3;
```

## Composition

- A thin sticky top rail establishes identity and anchors.
- The first viewport uses an asymmetric two-column grid and a clipped proof image.
- Project links and metrics are compact horizontal evidence rails.
- Repeated work items use open rows and small thumbnail blocks rather than nested cards.
- The mobile layout collapses to one column and keeps the proof image above the fold.

## Interaction

- Anchor links scroll smoothly unless reduced motion is requested.
- The hero proof has a visible “Open VLA-Sync” action.
- Project filters expose the research and adjacent work views without hiding content from assistive technology.
- Email and citation controls copy text and announce the result.
