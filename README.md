# Dev Stack

Dev Stack is a responsive React website I built to explore and organize modern web technologies. It includes frontend libraries, backend tools, databases, styling frameworks, and DevOps tools.

The main idea is simple: technologies can be added to a personal "Your Stack" section, where they can be reviewed, adjusted, or cleared whenever needed.

## About the Project

The app loads a curated list of technologies from a local JSON file. Each technology is displayed as a card with its rating, difficulty level, category, and a short description.

I added the option to add or remove technologies from the "Your Stack" panel, along with toast notifications to give immediate feedback when an action is performed.

The UI uses a single orange → pink → violet gradient throughout the project. I defined the gradient in one place so the overall theme can be changed without updating multiple files.

The layout, copy, colors, and card structure are based on the provided DevStack Penpot design file. This also includes the exact gradient stops, badge colors, and both the empty and filled states of the stack sidebar.

## Technologies Used

- **React 18** — used to build the component-based UI
- **Vite** — development server and build tool
- **Tailwind CSS + DaisyUI** — used for styling and UI components
- **React-Toastify** — used for toast notifications
- **JavaScript (ES6+)** — application logic
- **JSON** — technology data source

## Key Features

1. **Interactive stack builder** — technologies can be added to "Your Stack" with one click. Duplicate additions are blocked with a warning toast. After a technology is added, its button becomes disabled and shows "✓ Added to Stack".

2. **Fully responsive layout** — the technology grid uses three columns on desktop, two columns on tablet, and one column on mobile. There is also a dedicated mobile navbar with a hamburger menu, centered logo, and auth buttons.

3. **Single-source gradient theme** — the main orange → pink → violet gradient is defined once in `src/index.css` as `--brand-gradient`. I reused it for the brand name, hero heading highlight, and every primary button, so changing the whole site's theme only requires editing one value.

## Running Locally

First, install the project dependencies:

```bash
npm install
npm run dev
```

After starting the development server, the local URL printed in the terminal can be opened in a browser.

For a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
src/
  components/   Navbar, Hero, TechCard, TechGrid, YourStack, Footer
  hooks/        useTechnologies.js (fetches + tracks loading state)
  App.jsx       Top-level state: the stack, add/remove/remove-all logic
  main.jsx      App entry point, mounts <ToastContainer />
public/
  technologies.json   The technology dataset, fetched at runtime
```

---

## React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that makes it possible to write HTML-like markup directly inside JavaScript files. I find it useful in React because it keeps the UI structure easier to read compared with writing `React.createElement()` manually. JSX is eventually compiled into those calls behind the scenes.

**2. What is the difference between props and state?**

Props are data passed into a component from its parent, and the component receiving them treats them as read-only.

State is data managed by the component itself. It can change over time, for example through `useState`, and those changes can cause the component to re-render.

**3. What does the `useState` hook do, and where did I use it in this project?**

`useState` allows a functional component to store and update its local data.

In this project, I used it in `App.jsx` to store the `stack` array, which contains the technologies selected by the user. I also used it in `Navbar.jsx` to keep track of whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did I need it to load the JSON data?**

`useEffect` is used for side effects, such as fetching data or running code outside React's normal rendering process.

I used it in `useTechnologies.js` because the JSON data is fetched asynchronously. The fetch operation should not run directly during rendering, so `useEffect` runs the `fetch` call when the component mounts and updates the state after the data is loaded.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` prop to identify individual items in a list between renders. This helps React understand which items were added, removed, or reordered instead of treating the entire list as new.

Without a stable and unique key, React can mismatch items and update the wrong DOM nodes, which can lead to unexpected behavior and unnecessary rendering.

**6. What is conditional rendering? Show one place I used it (example: the empty stack message).**

Conditional rendering means displaying different UI depending on a particular condition.

In `YourStack.jsx`, I used `count === 0` to check whether the stack is empty. If there are no technologies in the stack, the component shows the "Your stack is empty…" message. Otherwise, it displays the list of added technologies.

**7. How do I pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent component can pass data to a child through props. For example, in this project, `App.jsx` passes `technologies` and `stackIds` to `TechGrid`.

For sending information back to the parent, the parent can pass a function as a prop. The child then calls that function when an event happens. Here, functions such as `onAdd` and `onRemove` are used for this purpose. When the button in `TechCard` is clicked, it calls the appropriate function and allows `App.jsx` to update the stack.

---

## Submission

- **GitHub Repository Link:** _add after pushing to GitHub_
- **Live Site Link:** _add after deploying to Vercel/Netlify/Cloudflare Pages_
