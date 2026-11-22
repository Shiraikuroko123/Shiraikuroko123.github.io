# Zhangwei Chen personal site design

## Direction

A light academic homepage for inference systems and robotics. The page starts with identity, research interests, and experience, then moves into projects and evidence. The work carries the technical detail through real simulation frames, measured traces, and public source links.

## Type

- Chinese display and body: DM Sans, with Noto Sans CJK SC and Microsoft YaHei fallbacks.
- English display: Newsreader for large editorial headings, with DM Sans for supporting copy.
- Measurements and interface labels: Space Mono.
- Display scale uses large, tightly set headlines with readable body measures and explicit hierarchy.

## Tokens

```css
--bg: #ffffff;
--surface: #f1f3ef;
--surface-strong: #e7ece7;
--ink: #18211f;
--muted: #5e6966;
--dim: #7d8883;
--line: #d9dfda;
--accent: #176b61;
--result: #b6502d;
```

## Composition

- A centered header holds the name, research direction, GitHub link, and section navigation.
- The first viewport introduces the researcher, research questions, contact path, and a reserved portrait area.
- Experience and education appear before research focus and selected projects.
- Research and personal projects use the same compact evidence row, with a small media preview, a short result, and direct links.
- The mobile layout preserves the order identity → experience → awards → focus → projects → contact.

## Interaction

- The Sawyer rescue video appears in the research project list with a visible pause/play control and poster fallback.
- The 1920 × 1080 Fetch demo remains visible beside the other research project rows.
- More Projects highlights AI Trade and Paperfield as personal GitHub work outside the main robotics line.
- The rail tracks the visible section using IntersectionObserver and respects reduced motion.
- Project links lead to real demos and GitHub repositories. External sources remain explicit.
- All media has alt text, visible focus, keyboard-accessible controls and static fallbacks.

## Provenance

- Sawyer rescue video and poster are sourced from the public `rss-cartesian-target-replay` project.
- Fetch pick-and-place video and poster are sourced from the public `ral-controller-target-readback` project.
- ArmBench still and video remain sourced from the public `armbench-vla-runtime` repository.
- Immediate Refill timeline, Cartesian Replay, Controller Target Readback, and Paperfield stills are sourced from their public project repositories.
- Contact and education facts come from the supplied résumé and the public profile.
