import * as server from '../entries/pages/blog/_slug_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.BkAcN_S4.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js","_app/immutable/chunks/each.CsPiZb6n.js"];
export const stylesheets = ["_app/immutable/assets/4.Bv8YP8BB.css"];
export const fonts = [];
