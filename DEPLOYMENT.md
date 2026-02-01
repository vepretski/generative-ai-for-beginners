# GitHub Pages Deployment Setup

This repository is configured to deploy to GitHub Pages using GitHub Actions.

## Configuration Required

To enable GitHub Pages deployment for this repository:

1. Go to your repository's **Settings** > **Pages**
2. Under **Build and deployment**, select:
   - **Source**: GitHub Actions
3. The deployment workflow (`.github/workflows/deploy-pages.yml`) will automatically run on:
   - Pushes to the `main` branch
   - Manual workflow dispatch

## Accessing the Site

Once GitHub Pages is enabled and the workflow runs successfully, your site will be available at:
- `https://<username>.github.io/<repository-name>/`

For this repository:
- `https://vepretski.github.io/generative-ai-for-beginners/`

## Local Development

To preview the site locally:

1. Start a local web server in the repository root:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using Node.js
   npx http-server
   ```

2. Open your browser to `http://localhost:8000`

The site uses [Docsify](https://docsify.js.org/) to render documentation from Markdown files dynamically.

## Workflow Details

The deployment workflow:
- Triggers on pushes to `main` or manual dispatch
- Checks out the repository
- Configures GitHub Pages
- Uploads the entire repository as a Pages artifact
- Deploys the artifact to GitHub Pages

No build step is required since Docsify renders the documentation client-side.
