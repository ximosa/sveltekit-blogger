

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sobremi/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.ClxLz5Mf.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js"];
export const stylesheets = [];
export const fonts = [];
