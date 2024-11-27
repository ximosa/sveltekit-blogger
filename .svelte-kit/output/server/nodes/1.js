

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DtXtqw7s.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js","_app/immutable/chunks/entry.iVz1lWfC.js"];
export const stylesheets = [];
export const fonts = [];
