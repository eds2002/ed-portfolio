import React, { useState, useEffect } from "react";

export default function usePalette(imgLink: string) {
  const [extractedColors, setExtractedColors] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define an async function
    const fetchColors = async () => {
      try {
        // Start by setting loading to true
        setLoading(true);
        // Fetch the data from the API
        const response = await fetch(`/api/extract-color?imgLink=${imgLink}`);
        if (!response.ok) {
          // If the response is not ok, throw an error
          throw new Error("Network response was not ok " + response.statusText);
        }
        const { extractedColors } = await response.json();
        // Set the extracted colors
        setExtractedColors(extractedColors);
      } catch (error: any) {
        // Catch and set any error occurred during fetching
        setError(error);
      } finally {
        // Set loading to false once data is fetched
        setLoading(false);
      }
    };

    // Call the async function
    fetchColors();
  }, [imgLink]); // Dependency array

  // Return the extracted colors, error and loading state
  return { extractedColors, error, loading };
}
