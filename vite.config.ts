// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Outside a Lovable sandbox the nitro deploy plugin is skipped, so `vite build` emits
  // an SSR bundle with no server entry to boot. Force-enable it only when NITRO_PRESET
  // names a target — Railway sets node-server (see railway.json). With the variable
  // unset this stays `undefined`, so the sandbox still builds for Cloudflare and every
  // other builder keeps the exact behaviour it had before.
  nitro: process.env.NITRO_PRESET ? { preset: process.env.NITRO_PRESET } : undefined,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
