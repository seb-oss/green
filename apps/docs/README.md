# Green Design System — Documentation Site

This is the documentation site for the Green Design System.
This project is built using Next.js version 14 and Contentlayer for managing content.
Part of the `Green` mono repo, using NX as the build tool.

### The documentation is deployed at the following environments:

Production: seb.io
Staging: stg.seb.io

We utilize Yarn as our package manager.

## Running the project

To start the development server, run:

```bash
nx run docs:serve
```

To build the project, run:

```bash
nx run docs:build
```

## Environment Variables

To successfully run the documentation, certain environment variables need to be set up. These variables are crucial for fetching images from Figma and for toggling specific features based on the environment (development or production).

Please refer to the `.env.example` file in the root directory for a list of required environment variables. Copy this file to a new file named `.env` and fill in the appropriate values.

Remember, never commit your .env file to the repository. It contains sensitive information and should be kept local to your development environment.

Example of the `.env` file:

```
FIGMA_ACCESS_KEY=
FIGMA_PROJECT_ID=
DEV_ENV=true
NEXT_PUBLIC_DEV_ENV=true
```
