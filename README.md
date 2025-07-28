# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Project Notes

### `npm run build-parser` generates CommonJS-style output
The script:

```bash
npm run build-parser

```
compiles `src/grammar.ne` into `src/parser.js` using Nearley. However, the generated code is in **CommonJS format**, which may not be compatible with this ES module-based Vite project.  
To fix this, the script prepends an ESLint disable comment and replaces the file with an ESM-compatible version automatically:

```json
"build-parser": "nearleyc src/grammar.ne -o src/parser.js && echo '/* eslint-disable no-undef */' | cat - src/parser.js > src/parser.tmp.js && mv src/parser.tmp.js src/parser.js"
```

If you modify the grammar, **always rerun this script** to regenerate the parser.

### No Redux or external state libraries

This app is designed to be lightweight. It **does not use Redux**, Zustand, or other external state libraries.  
Instead, it uses **React's built-in `useState` and `useEffect` hooks** to manage UI state, making it easier to maintain and understand.

### How to Run the Project

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

   Then visit: [http://localhost:5173](http://localhost:5173)

3. **Run unit tests**

   ```bash
   npm run test
   ```

   > Uses [Vitest](https://vitest.dev/) for testing.

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview the production build**

   ```bash
   npm run preview
   ```