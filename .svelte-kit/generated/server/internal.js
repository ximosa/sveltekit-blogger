
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!DOCTYPE html>\r\n<html lang=\"es\">\r\n\t<head>\r\n\t\t<meta charset=\"utf-8\" />\r\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n\t\t<meta name=\"viewport\" content=\"width=device-width\" />\r\n\t\t<link href=\"https://cdn.jsdelivr.net/npm/beercss@3.7.12/dist/cdn/beer.min.css\" rel=\"stylesheet\" />\r\n\t\t<script type=\"module\" src=\"https://cdn.jsdelivr.net/npm/beercss@3.7.12/dist/cdn/beer.min.js\"></script>\r\n\t\t" + head + "\r\n\t\t<script>// Function to get the current mode from localStorage\r\n\t\t\tconst getStoredMode = () => {\r\n\t\t\t\treturn localStorage.getItem('mode') || 'light';\r\n\t\t\t  };\r\n\t\t\t  // Function to apply the mode\r\n\t\t\t  const applyMode = (mode) => {\r\n\t\t\t\tui('mode', mode);\r\n\t\t\t\tlocalStorage.setItem('mode', mode);\r\n\t\t\t  \r\n\t\t\t\t// Update the checkbox state\r\n\t\t\t\tconst checkbox = document.querySelector('.switch input[type=\"checkbox\"]');\r\n\t\t\t\tif (checkbox) {\r\n\t\t\t\t  checkbox.checked = mode === 'dark';\r\n\t\t\t\t}\r\n\t\t\t  };\r\n\t\t\t  // Function called when clicking the checkbox (renamed to toggleMode)\r\n\t\t\t  const toggleMode = () => {\r\n\t\t\t\tconst newMode = getStoredMode() === 'dark' ? 'light' : 'dark';\r\n\t\t\t\tapplyMode(newMode);\r\n\t\t\t  };\r\n\t\t\t  // Function to initialize the mode when the page loads\r\n\t\t\t  const initializeMode = () => {\r\n\t\t\t\tconst storedMode = getStoredMode();\r\n\t\t\t\tapplyMode(storedMode);\r\n\t\t\t  };\r\n\t\t\t  // Initialize the mode when the DOM is ready\r\n\t\t\t  document.addEventListener('DOMContentLoaded', initializeMode);\r\n\t\t\t  var prevScrollpos = window.pageYOffset;\r\n\t\t\t  window.onscroll = function() {\r\n\t\t\t  var currentScrollPos = window.pageYOffset;\r\n\t\t\t\tif (prevScrollpos > currentScrollPos) {\r\n\t\t\t\t  document.getElementById(\"navbar\").style.top = \"0\";\r\n\t\t\t\t} else {\r\n\t\t\t\t  document.getElementById(\"navbar\").style.top = \"-90px\";\r\n\t\t\t\t}\r\n\t\t\t\tprevScrollpos = currentScrollPos;\r\n\t\t\t  }</script>\r\n\t</head>\r\n\t<body data-sveltekit-preload-data=\"hover\">\r\n\t\t<div style=\"display: contents\">" + body + "</div>\r\n\t</body>\r\n</html>",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "d48y1g"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
