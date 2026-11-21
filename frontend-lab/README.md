# Frontend Lab

A Vite + React 19 single-page application for Assignment 1.2.

## Run

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Features

- React Router layout with Home, Users, User Detail, Login, Profile, and 404 routes
- Hard-coded user data
- Theme and authentication React Context providers
- Protected `/profile` route
- Persistent users search using `useLocalStorage`
- Window resize listener with effect cleanup

## Short answers

**CSR vs SSR vs SSG:** CSR is useful for dashboards and authenticated applications because the browser builds the interface. SSR is useful for personalised or frequently changing pages that benefit from server-rendered HTML. SSG is useful for documentation and blogs whose content can be generated at build time.

**Hydration:** Hydration is the process of attaching React event handlers and state to HTML that was already rendered on the server, making it interactive without replacing the server HTML.

**When is Context the wrong tool:** Context is a poor fit for frequently changing or large data sets, server state, and complex derived state. It can cause broad re-renders and should not replace a data-fetching or state-management library.

## StrictMode cleanup

React StrictMode intentionally mounts, unmounts, and remounts effects in development. The resize listener demonstrates why each effect must clean up resources: the cleanup removes the listener before the second setup, preventing duplicate listeners and stale state updates.
