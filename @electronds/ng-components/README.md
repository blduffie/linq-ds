# Ng-Components

## Guidelines

All branches are expected to be prefixed with "feature/bug/hotfix" and must always include the ticket number: "feature/ELECTRON-1606-eds-buttons".

### Deployments Instructions

- Ensure the version in the components/package.json is correct/updated.
- Push all code to "main" branch.
- The PR that was pushed to "main" will have a commit, click the commit.
- Now add a "tag" to this commit.
  - this tag **must** match the components/package.json version.
- Prod pipeline in concourse will kick off automagically.
  - Once deployed, the new/updated package will be available in our Nexus registry.

### Designs:

https://electron.duke-energy.com/resources/

### Storybook site:

https://electron.duke-energy.com/angular/
