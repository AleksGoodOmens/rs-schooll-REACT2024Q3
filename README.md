# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
	// other rules...
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json', './tsconfig.node.json'],
		tsconfigRootDir: __dirname,
	},
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

  Create a separate branch for this task. Branch name: "class-components".
  Language Requirement
  Use TypeScript for the project.
  Project Setup
  Initialize the project using Vite with the react-ts template.

  Code Quality Tools

  ESLint
  Set up ESLint to throw errors if TypeScript's any type is used.
  Set up eslint-plugin-react-compiler to throw errors if React rules are violated.
  Prettier
  Integrate Prettier for code formatting.
  Husky
  Add Husky and configure it to run linting on pre-commit.
  package.json commands
  Add the following npm scripts:
  lint: For running the lint command.
  format:fix: For running Prettier's --write command.
  Pick a RESTfull api which supports search and pagination (pagination might be reffered as offset and limit params). E.g. https://pokeapi.co/, for Star Wars fans https://swapi.dev/api, for Star Trek fans https://stapi.co/api-documentation (OpenApi spec can be checked here https://editor.swagger.io/?url=https://stapi.co/api/v1/rest/common/download/stapi.yaml), or you can select another one complying with the requirements.

Application Requirements

    Create a page comprised of 2 horizontal sections (a smaller top one, and a bigger bottom one).
    On the top section put Search input and the "Search" button. Search component should look for a previously saved search term in the local storage (LS), if there isn't any - leave the input empty.
    Bottom section should be used for displaying search results (name and a small description).
    By default application makes a call to the selected api to get the list of the items with the search term from the input (only first page). If the input is empty make a call to get all the items.
    When user modifies the Search input and clicks on "Search" button, application makes a call to an api with the newly provided search term (search term should not have any trailing spaces, process the input) to get the results (only first page).
    The provided search term should be saved to the LS, if the value exists overwrite it.
    Wrap application to an error boundary to catch errors. Report an error to a console and show fallback UI (use respective methods for this). Create a button which will throw an error on click to test the functionality.

Use class components to get access to lifecycle events or state. Using hooks is forbidden at this stage. Patience, it won't last long.

All logical parts should be set into separate components.
