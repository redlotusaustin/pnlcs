import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                // Admin-only dark mode sheet; loaded after app.css so its
                // overrides win the cascade. Scoped to html[data-app="admin"].
                "resources/css/admin-dark.css",
                "resources/js/app.js",
                // Dialogs on their own, for layouts that do not load app.js
                // (the Flavor theme).
                "resources/js/dialogs.js",
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
});
