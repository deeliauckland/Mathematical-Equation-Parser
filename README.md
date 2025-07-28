# Mathematical Equation Parser (React + Vite)

This is a lightweight web application built with **React** and **Vite**, designed to parse and evaluate mathematical expressions. It supports arithmetic operations and comparison logic (e.g., `=`, `!=`), with proper operator precedence and error handling.
The parser is implemented using **Nearley.js** and **Moo lexer**, and the UI is structured with modern React component patterns, without using Redux or other global state libraries.


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