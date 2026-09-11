# 🧱 Dev Stack — Build Your Perfect Tech Stack

Dev Stack is a responsive React website where developers can browse modern
web technologies — frontend libraries, backend tools, databases, styling
frameworks, and DevOps tools — and collect the ones they like into a
personal "stack" they can review, adjust, and clear at any time.

## 🌟 About the Project

The app loads a curated list of technologies from a local JSON file,
displays each one as a card with its rating, difficulty level, category,
and a short description, and lets the user add or remove items from a
"Your Stack" panel with instant toast feedback. The whole UI is themed
around a single orange → pink → violet gradient defined in one place, so
re-theming the site is a one-line change. The layout, copy, colors, and
card structure follow the provided DevStack Penpot design file, including
its exact gradient stops, badge colors, and the empty/filled states of
the stack sidebar.

## 🛠️ Technologies Used

- **React 18** — component-based UI
- **Vite** — dev server and build tool
- **Tailwind CSS + DaisyUI** — utility-first styling and UI components
- **React-Toastify** — toast notifications
- **JavaScript (ES6+)** — application logic
- **JSON** — technology data source

## ✨ Key Features

1. **Interactive stack builder** — add any technology to "Your Stack" with
   one click; duplicate adds are blocked with a warning toast, and an
   added card's button becomes disabled and reads "✓ Added to Stack".
2. **Fully responsive layout** — a 3-column technology grid on desktop
   that collapses to 2 columns on tablet and 1 column on mobile, with a
   dedicated mobile navbar (hamburger + centered logo + auth buttons).
3. **Single-source gradient theme** — the brand gradient (orange → pink →
   violet) is defined once in `src/index.css` (`--brand-gradient`) and
   reused for the brand name, hero heading highlight, and every primary
   button, so the whole site can be re-themed by editing one value.

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. To create a production
build:

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
src/
  components/   Navbar, Hero, TechCard, TechGrid, YourStack, Footer
  hooks/        useTechnologies.js (fetches + tracks loading state)
  App.jsx       Top-level state: the stack, add/remove/remove-all logic
  main.jsx      App entry point, mounts <ToastContainer />
public/
  technologies.json   The technology dataset, fetched at runtime
```

---

## 🧠 React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension that lets us write HTML-like markup directly
inside JavaScript files. React uses it because it's easier to read and
write UI structure this way than calling `React.createElement()` by hand
— JSX gets compiled down to those calls behind the scenes.

**2. What is the difference between props and state?**
Props are data passed *into* a component from its parent, and the
component receiving them cannot change them — they're read-only. State is
data a component manages *itself*, and it can change over time (for
example, with `useState`), causing the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this
project?**
`useState` lets a functional component hold and update its own local
data. In this project, `App.jsx` uses it to store the `stack` array (the
technologies the user has selected) and `Navbar.jsx` uses it to track
whether the mobile menu is open or closed.

**4. What does the `useEffect` hook do, and why did you need it to load
the JSON data?**
`useEffect` runs side effects — code that reaches outside of React's
normal rendering, like fetching data — after a component renders. We
needed it in `useTechnologies.js` because fetching the JSON file is
asynchronous: it can't happen during render, so `useEffect` runs the
`fetch` call once when the component mounts and then updates state when
the data arrives.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to tell list items apart between renders, so it
knows which items were added, removed, or reordered instead of just
re-rendering the whole list from scratch. Without a stable, unique key,
React can mismatch items and update the wrong DOM nodes, which leads to
bugs and worse performance.

**6. What is conditional rendering? Show one place you used it (example:
the empty stack message).**
Conditional rendering means showing different UI depending on some
condition, instead of always rendering the same thing. In
`YourStack.jsx`, we check `count === 0` — if the stack is empty we render
a short "Your stack is empty…" message, and otherwise we render the list
of added technologies.

**7. How do you pass data from a parent component to a child component,
and how does a child send something back to the parent?**
A parent passes data down to a child through props — for example,
`App.jsx` passes `technologies` and `stackIds` down to `TechGrid`. For a
child to send something back up, the parent passes a function down as a
prop (like `onAdd` or `onRemove`), and the child calls that function
whenever the event happens — this is how `TechCard`'s button click tells
`App.jsx` to add that technology to the stack.

---

## 📤 Submission

- **GitHub Repository Link:** _add after pushing to GitHub_
- **Live Site Link:** _add after deploying to Vercel/Netlify/Cloudflare Pages_
