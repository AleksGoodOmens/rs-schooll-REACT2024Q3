# Theory 📖

## Hooks

### Introduction to Hooks:

* [X]  [Introducing Hooks](https://react.dev/reference/react/hooks)

### Basic Hooks:

* [X]  [Using the State Hook](https://react.dev/reference/react/useState)
* [X]  [Using the Effect Hook](https://react.dev/reference/react/useEffect)
* [ ]  [Context in Hooks](https://react.dev/reference/react/useContext)
* [ ]  [Ref in Hooks](https://react.dev/reference/react/useRef)

### Advanced Hooks:

* [ ]  [Using the Reducer Hook](https://react.dev/reference/react/useReducer)
* [ ]  [Memoization in Hooks](https://react.dev/reference/react/useMemo)
* [ ]  [Cache a function in Hooks](https://react.dev/reference/react/useCallback)

### Custom Hooks:

* [ ]  [Building Your Own Hooks](https://react.dev/learn/reusing-logic-with-custom-hooks#custom-hooks-sharing-logic-between-components)
* [ ]  [React Custom Hooks Examples](https://usehooks.com/)

## React Router

### Getting Started with React Router:

* [ ]  [React Router: Overview](https://reactrouter.com/en/main/start/overview)
* [ ]  [React Router: Tutorial](https://reactrouter.com/en/main/start/tutorial)

### Basic Routing:

* [ ]  [Router Provider](https://reactrouter.com/en/main/routers/router-provider)
* [ ]  [Browser Router](https://reactrouter.com/en/main/router-components/browser-router)
* [ ]  [Route](https://reactrouter.com/en/main/route/route)

### Navigation and Parameters:

* [ ]  [Navigating with React Router](https://reactrouter.com/en/main/components/navigate)
* [ ]  [Link](https://reactrouter.com/en/main/components/link)
* [ ]  [NavLink](https://reactrouter.com/en/main/components/nav-link)
* [ ]  [Using Parameters in Routes](https://reactrouter.com/web/example/url-params)

### Protected Routes and Authentication:

* [ ]  [Private Routes](https://www.robinwieruch.de/react-router-private-routes/)
* [ ]  [Auth Example](https://github.com/remix-run/react-router/tree/dev/examples/auth)
* [ ]  [Authentication](https://www.robinwieruch.de/react-router-authentication/)

### Hooks in React Router v6:

* [ ]  [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate)
* [ ]  [useParams](https://reactrouter.com/en/main/hooks/use-params)
* [ ]  [useRoutes](https://reactrouter.com/en/main/hooks/use-routes)
* [ ]  [useLocation](https://reactrouter.com/en/main/hooks/use-location)
* [ ]  [useSearchParams](https://reactrouter.com/en/main/hooks/use-search-params)


## Technical Requirements

[](https://github.com/rolling-scopes-school/tasks/blob/master/react/modules/tasks/routing.md#technical-requirements)

1. [X]  Create a separate branch for this task from the previous task's branch. Branch name: "hooks-and-routing".
2. [X] All components must be changed to **functional components**, except **Error Boundary** components, as error boundaries in React still need to be class components.[ ]  Implement custom hook to restore search query from the local storage  (LS) and put it to the LS on unmount. Use respective React lifecycle  hook as a basis.
3. [ ]  All logic should be split into components:
   * [ ]  If you need an access either to the component's lifecycle or the state **use hooks**.
   * [ ]  All data should be stored in the **component's state**.
4. [ ]  Add routing to your application using **React Router**.
5. [ ]  Add a 404 page when user navigates to non-existing route.
6. [ ]  Add and configure a test runner: Jest or Vitest. Test runner should  show the test coverage. You should aim to reach at least 80% of the test  coverage.
7. [ ]  Add a testing library: React Testing Library. You should add tests  for the several scenarios keeping in mind that mocked data should be  used instead of real API calls.
8. [ ]  Tests for the Card List component:
   * [ ]  Verify that the component renders the specified number of cards;
   * [ ]  Check that an appropriate message is displayed if no cards are present.
9. [ ]  Tests for the Card component:
   * [ ]  Ensure that the card component renders the relevant card data;
   * [ ]  Validate that clicking on a card opens a detailed card component;
   * [ ]  Check that clicking triggers an additional API call to fetch detailed information.
10. [ ]  Tests for the Detailed Card component:

* Check that a loading indicator is displayed while fetching data;
* Make sure the detailed card component correctly displays the detailed card data;
* Ensure that clicking the close button hides the component.

11. Tests for the Pagination component:

* Make sure the component updates URL query parameter when page changes.

12. Tests for the Search component:

* Verify that clicking the Search button saves the entered value to the local storage;
* Check that the component retrieves the value from the local storage upon mounting.

13. Lastly, update Husky to run tests on the pre-push hook, ensuring  that tests are automatically executed before any code is pushed.
