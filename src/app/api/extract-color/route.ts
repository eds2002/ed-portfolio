// Import the required libraries
import Vibrant from 'node-vibrant';

import { type NextRequest } from 'next/server'

export async function GET(req:NextRequest) {
  const url = new URL(req.url)

  const imgLink = url.searchParams.get("imgLink")

  // Validate the imgLink query parameter
  if (!imgLink) {
    return new Response(JSON.stringify({extractedColors:[]}),{
      status: 400,
      statusText: 'Bad Request',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }

  try {
    // Create a new Vibrant instance and get the color palette
    const vibrant = new Vibrant(imgLink);
    const palette = await vibrant.getPalette();

    // Extract the hex color values from the palette
    const extractedColors = Object.values(palette)
      .filter(swatch => swatch)
      .map(swatch => {
        return swatch?.getHex() //Depricated method
      });

    // Respond with the extracted colors
    return new Response(JSON.stringify({ extractedColors }), {
      status: 200,
      statusText: 'OK',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    });
  } catch (error) {
    new Response(JSON.stringify({extractedColors:[]}), {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }
  
}