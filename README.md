# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


# implememtations.
# ReactJS Interview-style Problem Statements

1. Create a React app to render a random dog image and change on every click. While the image is being loaded, show a loading icon.

2. Create a React app for a counter. On click of a button, it should start a countdown from a user input number of seconds and on completion it should show "completed." If the user clicks reset in between, the timer will restart. The user should be able to see the timer clock on the UI.

3. Create a custom hook in ReactJS that calls the function passed to it as a parameter on the third render of the component.

4. Create a React app that fetches and displays a list of dog breeds from a public API. When a breed is clicked, show a random image of that breed below the list.

5. Build a stopwatch React app with Start, Stop, and Reset buttons. The timer should update every second and display minutes and seconds.

6. Create a React component with an input field that accepts only numbers. On typing, it should format the input as currency (e.g., 1000 → 1,000).

7. Build a custom hook `usePrevious` that stores and returns the previous value of a prop or state variable.

8. Implement a React app with a todo list where users can add, remove, and toggle completion status of tasks. Persist todos in `localStorage`.

9. Create a modal dialog component in React that traps focus within itself when open and returns focus to the trigger button on close.

10. Build a React component that renders a list of items. When an item is clicked, highlight it and display its details below the list.

11. Create a React app that implements infinite scrolling to load more items from an API as the user scrolls near the bottom of the page.

12. Develop a React app with a theme switcher (light/dark mode) using Context API, so the theme applies to all nested components.

13. Implement a React component with a search input that filters a list of users fetched from an API, updating results as the user types with debouncing.


# 20 ReactJS Problem Statements to Boost Your Skills

1. **Create a custom hook that calls a given function only once after the component mounts (like `componentDidMount`).**

2. **Build a controlled form component with validation that disables the submit button until all fields are valid.**

3. **Create a custom hook that calls a passed function on the 3rd render of the component.**

4. **Implement a reusable modal component that renders children content and can be opened/closed via props or context.**

5. **Create a component that fetches data from a public API and displays a loading indicator until data arrives.**

6. **Build a to-do list app where the tasks persist in `localStorage` and are loaded on component mount.**

7. **Make a custom hook that debounces an input value — updates only after the user stops typing for 500ms.**

8. **Design a higher-order component (HOC) that logs props changes every time the wrapped component re-renders.**

9. **Use React Context to implement a theme toggler (dark/light mode) affecting multiple nested components.**

10. **Create a paginated list component that fetches and displays data page by page on button click.**

11. **Build a form with dynamic input fields where users can add/remove inputs and submit all values.**

12. **Implement error boundaries to catch errors in child components and display a fallback UI.**

13. **Create a hook that tracks the window size and updates on resize events.**

14. **Build a multi-step form wizard that saves progress and allows moving between steps.**

15. **Implement a custom hook to detect clicks outside a given element (useful for dropdowns or modals).**

16. **Build a search component that filters a list in real-time as the user types.**

17. **Create a reusable accordion component where multiple items can expand/collapse independently.**

18. **Implement route-based code splitting with React.lazy and Suspense for a multi-route app.**

19. **Create a notification system where notifications appear for 5 seconds then disappear automatically.**

20. **Build a drag-and-drop list component allowing reordering of items using mouse events.**