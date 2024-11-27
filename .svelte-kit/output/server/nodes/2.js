

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DU_w-6w1.js","_app/immutable/chunks/scheduler.BfJEPAwo.js","_app/immutable/chunks/index.fZALLJ52.js"];
export const stylesheets = [];
export const fonts = [];
