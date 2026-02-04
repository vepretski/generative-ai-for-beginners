# Copilot Instructions for Generative AI for Beginners

## Repository Overview

This is an educational curriculum repository containing 21 comprehensive lessons teaching everything needed to start building Generative AI applications. The course is maintained by Microsoft Cloud Advocates and provides hands-on learning with code examples in Python, TypeScript, and .NET.

## Project Purpose

- **Primary Goal**: Provide a comprehensive, beginner-friendly curriculum for learning Generative AI
- **Target Audience**: Developers looking to learn Generative AI fundamentals and build practical applications
- **Learning Format**: Mix of "Learn" lessons (explaining concepts) and "Build" lessons (with hands-on code examples)
- **Multi-Language Support**: Content translated into 40+ languages via GitHub Actions

## Repository Structure

### Lesson Organization (00-21)
- Each numbered directory (e.g., `01-introduction-to-genai`, `06-text-generation-apps`) is a lesson module
- Lessons contain:
  - `README.md` - Main lesson content with theory and instructions
  - `images/` - Visual assets for the lesson
  - Code samples in subdirectories:
    - `python/` - Python examples (Jupyter notebooks and scripts)
    - `typescript/` - TypeScript examples
    - `js-githubmodels/` - JavaScript examples using GitHub Models
    - `dotnet/` - .NET/C# examples

### Key Directories
- `.github/` - GitHub Actions workflows, issue templates, and repository configuration
- `translations/` - Translated versions of all lessons in 40+ languages
- `translated_images/` - Localized images for translations
- `docs/` - Additional documentation
- `presentations/` - Presentation materials for the course

### Important Files
- `requirements.txt` - Python dependencies for the course
- `package.json` - Node.js dependencies (primarily for documentation tools)
- `.env.copy` - Template for environment variables (API keys, endpoints)
- `CONTRIBUTING.md` - Contribution guidelines with strict link formatting rules
- `.devcontainer/` - Development container configuration for consistent environments

## Code Standards and Best Practices

### General Guidelines
1. **Minimal Changes**: Make surgical, focused changes. Don't refactor unrelated code.
2. **Educational Code**: Code should be clear, well-commented, and beginner-friendly
3. **Multi-Provider Support**: Examples support Azure OpenAI, OpenAI API, and GitHub Models
4. **File Naming Conventions**:
   - `aoai-*.py` / `aoai-*.ipynb` - Azure OpenAI examples
   - `oai-*.py` / `oai-*.ipynb` - OpenAI API examples
   - `githubmodels-*.py` / `githubmodels-*.ipynb` - GitHub Models examples

### Link Formatting Rules (CRITICAL)
- **ALL relative links** must include tracking ID: `?WT.mc_id=academic-105485-koreyst`
- **ALL URLs** from github.com, microsoft.com, visualstudio.com, aka.ms, azure.com must include tracking ID
- Links must NOT contain country-specific locales (no `/en-us/` or `/en/`)
- Relative links must start with `./` (current dir) or `../` (parent dir)
- Links must be formatted as `[text](url)` with no extra spaces

### Image Standards
- Store images in `./images` folder within each lesson
- Use descriptive names with English characters, numbers, and dashes only
- Format: `descriptive-name-with-dashes.png`

### Python Code Standards
- Use Python 3.x compatible syntax
- Keep code simple and educational (not production-optimized)
- Include clear comments explaining key concepts
- Use `python-dotenv` for environment variable management
- Follow PEP 8 style guidelines for readability
- Dependencies listed in `requirements.txt`:
  - `openai>=0.28.0` - OpenAI/Azure OpenAI SDK
  - `python-dotenv` - Environment variable management
  - `tiktoken` - Token counting
  - `azure-ai-inference` - Azure AI services
  - Data science libraries: `pandas`, `numpy`, `matplotlib`

### TypeScript/JavaScript Code Standards
- Use modern ES6+ syntax
- Include `tsconfig.json` for TypeScript projects
- Use `npm` for package management
- Dependencies in lesson-specific `package.json` files
- Keep examples straightforward and documented

### Documentation Standards
- Write in clear, beginner-friendly language
- Include code comments explaining the "why" not just the "what"
- Provide context for AI/ML concepts being demonstrated
- Link to additional resources in "Keep Learning" sections
- All lessons should have a banner image and video introduction section

## Build and Test Procedures

### Python Examples
```bash
# Install dependencies
pip install -r requirements.txt

# Run Python scripts
python path/to/script.py

# Run Jupyter notebooks (requires Jupyter)
jupyter notebook path/to/notebook.ipynb
```

### TypeScript Examples
```bash
# Navigate to specific lesson typescript directory
cd lesson-dir/typescript/app-name/

# Install dependencies
npm install

# Build TypeScript
npm run build

# Run the application
npm start
```

### No Automated Tests
- This is an educational repository without a comprehensive test suite
- Validation is primarily manual verification of examples
- Code review ensures examples work correctly

## GitHub Actions and Workflows

### Automated Workflows
1. **validate-markdown.yml** - Validates markdown links and formatting
2. **co-op-translator.yml** - Automated translation system
3. **deploy-pages.yml** - Deploys documentation to GitHub Pages
4. **welcome-issue.yml / welcome-pr.yml** - Welcomes new contributors
5. **stale.yml** - Manages stale issues
6. **lock.yml** - Locks old issues/PRs

### Link Validation Checks
When contributing, PRs trigger workflows to validate:
- No broken relative paths
- All relative paths have tracking IDs
- All URLs have tracking IDs where required
- URLs don't contain country-specific locales

## Development Environment

### Recommended Setup
- **IDE**: Visual Studio Code with Python and TypeScript extensions
- **DevContainer**: `.devcontainer/devcontainer.json` provides consistent environment
- **Python**: 3.8+
- **Node.js**: 16+ for TypeScript examples
- **Git**: For version control

### Environment Variables
Copy `.env.copy` to `.env` and configure:
- `AZURE_OPENAI_API_KEY` - Azure OpenAI API key
- `AZURE_OPENAI_ENDPOINT` - Azure OpenAI endpoint URL
- `OPENAI_API_KEY` - OpenAI API key
- Model deployment names and versions as needed

## AI Model Configuration

### Supported Providers
1. **Azure OpenAI Service** - Recommended for production, requires Azure subscription
2. **GitHub Marketplace Model Catalog** - Free tier available for experimentation
3. **OpenAI API** - Direct OpenAI API access

### Common Model Parameters
- `temperature` - Controls randomness (0.0 = deterministic, 1.0 = creative)
- `max_tokens` - Maximum length of generated response
- `top_p` - Nucleus sampling parameter
- Model names vary by provider (e.g., `gpt-4`, `gpt-35-turbo`)

## Translation System

### Automated Translation
- GitHub Actions automatically translate content to 40+ languages
- Translations stored in `translations/{language-code}/`
- Images are localized in `translated_images/`
- **NEVER use machine translation for contributions** - community verifies translations

### Translation Languages
Includes: Arabic, Bengali, Chinese (multiple variants), French, German, Hindi, Japanese, Korean, Portuguese, Russian, Spanish, and 30+ more.

## Common Pitfalls to Avoid

1. **Missing Tracking IDs**: Always include `?WT.mc_id=academic-105485-koreyst` on required links
2. **Breaking Changes**: Don't refactor working code unless fixing a bug
3. **Machine Translations**: Never contribute machine-translated content
4. **Absolute Paths**: Use relative paths for repository links
5. **Large Changes**: Keep PRs focused on single issues
6. **Adding Test Infrastructure**: Don't add new testing tools unless required
7. **Production Patterns**: Keep code educational, not production-optimized
8. **API Key Exposure**: Never commit API keys or secrets

## Making Changes

### Before Making Changes
1. Understand the educational context of the lesson
2. Test code examples locally with valid API keys
3. Verify links follow formatting rules
4. Check existing GitHub Actions will pass
5. Keep changes minimal and surgical

### After Making Changes
1. Test Python code with `python script.py`
2. Test TypeScript code with `npm install && npm start`
3. Verify Jupyter notebooks run without errors
4. Check all links are valid and properly formatted
5. Ensure no API keys or secrets are committed

## Security Considerations

- **API Keys**: Store in `.env` files (never commit)
- **Dependencies**: Use specific version pinning when needed
- **Educational Code**: Security is secondary to clarity, but avoid obvious vulnerabilities
- **Data Privacy**: Don't include real user data in examples

## Getting Help

- **Discord**: Join the official Azure AI Foundry Discord server
- **Forum**: Azure AI Foundry Developer Forum on GitHub
- **Issues**: Use GitHub issues for bugs and feature requests
- **PRs**: Follow contribution guidelines in CONTRIBUTING.md

## Special Notes for Copilot

- This is a fork maintained by Igor Vepretski (7ya.io)
- Original repository: microsoft/generative-ai-for-beginners
- Focus on educational clarity over code efficiency
- Preserve the beginner-friendly nature of examples
- Maintain consistency across Python, TypeScript, and .NET versions
- Respect the multi-language translation system
- Follow the strict link formatting rules to pass CI checks
