import { z } from "zod";

export const visualMoodSchema = z.enum([
  "roadside-urgent",
  "workshop-trust",
  "precision-service",
  "neighborhood-direct",
  "fleet-utility",
]);

export const compositionSchema = z.enum([
  "split-command",
  "poster-bay",
  "route-card",
  "service-ledger",
  "photo-board",
]);

export const creativeLayoutSchema = z.enum([
  "studio-detail",
  "wash-flow",
  "oil-bay",
  "roadside-rescue",
  "bodyshop-craft",
  "parts-counter",
  "mechanic-ledger",
]);

export const creativeTextureSchema = z.enum([
  "polished-glass",
  "water-ripple",
  "oil-label",
  "road-markings",
  "primer-dust",
  "parts-shelf",
  "service-ledger",
]);

export const creativeBlockTypeSchema = z.enum([
  "service-board",
  "process",
  "quote-strip",
  "quick-actions",
  "material-story",
  "metric-grid",
]);

export const agentFrontendModeSchema = z.enum(["static-files", "framework-build"]);

export const agentFrontendSchema = z.object({
  mode: agentFrontendModeSchema,
  source_dir: z.string().min(1),
  output_dir: z.string().min(1).optional(),
  build_command: z.string().min(1).optional(),
  libraries: z.array(z.string().min(1)).optional(),
  notes: z.string().min(1),
});

const creativeCardSchema = z.object({
  label: z.string().min(1),
  value: z.string().min(1),
  note: z.string().min(1).optional(),
});

const creativeBlockSchema = z.object({
  type: creativeBlockTypeSchema,
  eyebrow: z.string().min(1),
  title: z.string().min(1),
  body: z.string().min(1),
  items: z.array(creativeCardSchema).min(2).max(5),
  callout: z.string().min(1).optional(),
});

export const creativeSpecSchema = z.object({
  concept: z.string().min(1),
  audience: z.string().min(1),
  visual_direction: z.string().min(1),
  layout: creativeLayoutSchema,
  texture: creativeTextureSchema,
  hero_angle: z.string().min(1),
  hero_cards: z.array(creativeCardSchema).min(2).max(4),
  sections: z.array(creativeBlockSchema).min(3).max(5),
});

export const siteSpecSchema = z.object({
  business_id: z.string().min(1),
  slug: z.string().min(1),
  visual_mood: visualMoodSchema,
  composition: compositionSchema,
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  primary_cta: z.string().min(1),
  secondary_cta: z.string().min(1),
  service_tags: z.array(z.string().min(1)).min(3).max(5),
  proof_points: z.array(z.string().min(1)).min(3).max(4),
  resource_title: z.string().min(1),
  resource_items: z.array(z.string().min(1)).min(3).max(4),
  review_heading: z.string().min(1),
  contact_heading: z.string().min(1),
  image_prompt: z.string().min(1),
  design_notes: z.string().min(1),
  creative: creativeSpecSchema.optional(),
  agent_frontend: agentFrontendSchema.optional(),
});

export const siteSpecDatasetSchema = z.array(siteSpecSchema);

export type SiteSpec = z.infer<typeof siteSpecSchema>;
export type VisualMood = z.infer<typeof visualMoodSchema>;
export type Composition = z.infer<typeof compositionSchema>;
export type CreativeSpec = z.infer<typeof creativeSpecSchema>;
export type CreativeBlockType = z.infer<typeof creativeBlockTypeSchema>;
export type AgentFrontendSpec = z.infer<typeof agentFrontendSchema>;
