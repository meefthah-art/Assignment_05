import { useMemo, useState } from "react";
import { toast } from "react-toastify";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TechGrid from "./components/TechGrid.jsx";
import YourStack from "./components/YourStack.jsx";
import Footer from "./components/Footer.jsx";
import useTechnologies from "./hooks/useTechnologies.js";

export default function App() {
  const { technologies, isLoading } = useTechnologies();
  const [stack, setStack] = useState([]);

  const stackIds = useMemo(() => new Set(stack.map((item) => item.id)), [stack]);

  function handleAddToStack(tech) {
    if (stackIds.has(tech.id)) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemoveFromStack(id) {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;
    setStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section
          id="technologies"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24"
        >
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Explore <span className="gradient-text">Technologies</span>
            </h2>
            <p className="text-base-content/60 mt-2 max-w-2xl">
              Pick the tools that fit your next project and build a stack
              you can come back to anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
            <TechGrid
              technologies={technologies}
              isLoading={isLoading}
              stackIds={stackIds}
              onAdd={handleAddToStack}
            />
            <YourStack
              stack={stack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
