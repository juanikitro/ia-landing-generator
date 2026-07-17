import type { Business } from "./business-schema.js";

/** Name intended for client-facing copy; `name` remains the source-record value. */
export function businessDisplayName(business: Business): string {
  return business.brand_name ?? business.name;
}
