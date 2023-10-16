# Responsible AI Workshops


## About This Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

```bash
# Installation
$ yarn

# Local Development
# Starts Dev Server
$ yarn start

# Build
# Creates static distribution in `build` directory
$ yarn build
```

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
