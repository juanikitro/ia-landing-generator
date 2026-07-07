# Agent-authored frontend generation

## Decision

The final pipeline should prefer quality over speed or cheap generation. The agent is no longer limited to filling a `SiteSpec` for a fixed renderer. For each business, the agent may author the real frontend directly with HTML/CSS or use a framework/library when that materially improves the UI.

## Architecture

- `SiteSpec.agent_frontend` points to the authored artifact for a business.
- `mode: "static-files"` copies a repo-local folder with `index.html` and assets.
- `mode: "framework-build"` copies a static build output from `output_dir`.
- The generator does not run arbitrary framework build commands. The agent must run them explicitly and then point the spec to the static output.
- `generate:preview` may still use the old renderer as a fallback for quick inspection.
- Final `generate` and `qa` require agent-authored frontends.

## Barandas

- Data validation remains strict: no invented services, claims, prices, brands, awards, guarantees, or stock.
- Frontend source/output paths must stay inside the repo.
- Generated sites still need an image, the required footer, isolated business data, and valid metadata.
- Frameworks and libraries are allowed only when they improve the final landing, not as default ceremony.

## Expected workflow

1. Research and approve 10 real businesses.
2. Generate briefs.
3. Agent designs each landing with a distinct visual direction.
4. Agent creates `data/frontends/<run>/<slug>/` or a framework project/export.
5. Agent adds `agent_frontend` to each `SiteSpec`.
6. Validate specs.
7. Generate preview/final.
8. Run QA, including visual review before deploy.

## Tradeoff

This makes generation slower and more manual, but it moves the quality gate to the right place: the agent must produce real frontend work instead of relying on a shared template renderer.
