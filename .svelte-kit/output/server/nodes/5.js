import * as server from '../entries/pages/contacto/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contacto/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/contacto/+page.server.js";
export const imports = ["_app/immutable/nodes/5.Z44s9fw9.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js"];
export const stylesheets = ["_app/immutable/assets/5.DcwwITud.css"];
export const fonts = [];
