

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0._JX-ilZs.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js","_app/immutable/chunks/entry.iVz1lWfC.js"];
export const stylesheets = ["_app/immutable/assets/0.BevFeP3_.css"];
export const fonts = [];
