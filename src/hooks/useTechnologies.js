import { useEffect, useState } from "react";

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
