# /src structure

- /features   — one folder per domain (transactions, budgets, auth) — screens, hooks, and logic specific to that feature
- /components — shared, reusable UI components (Button, Card, Input) used across features
- /lib        — external service clients (Supabase client, API wrappers) and non-React utilities
- /hooks      — shared hooks not tied to a specific feature
- /constants  — colors, spacing, config values