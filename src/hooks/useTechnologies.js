import { useEffect, useState } from "react";

/**
 * Fetches the technology list from the local JSON file (public/technologies.json)
 * and exposes a loading flag while the request is in flight.
 *
 * We deliberately fetch instead of importing the JSON directly so the
 * loading state has something real to represent (as it would with a
 * remote API), even though on localhost the request resolves in a
 * few milliseconds.
 */
export default function useTechnologies() {
  const [technologies, setTechnologies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadTechnologies() {
      try {
        setIsLoading(true);
        const response = await fetch("/technologies.json");
        if (!response.ok) {
          throw new Error("Failed to load technology data");
        }
        const data = await response.json();
        if (isMounted) {
          setTechnologies(data);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadTechnologies();

    return () => {
      isMounted = false;
    };
  }, []);

  return { technologies, isLoading, error };
}
