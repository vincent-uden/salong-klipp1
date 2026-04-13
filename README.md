# Salong Klipp-1
The source code for [https://www.salongklipp-1.se/](https://www.salongklipp-1.se/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

## Environment Variables

Create a .env file in the project root containing:

```
ANALYTICS_URL            = https://stats.uden.dev/api/routeaccesslog/log
ANALYTICS_PROJECT_ID     = your_project_id
ANALYTICS_PROJECT_SECRET = your_project_secret
```
