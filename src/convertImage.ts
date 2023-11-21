import { Buffer } from "buffer"

// convertImage.ts
function pngToBase64(imageData: string): string {
  // Encode the image data to base64
  const base64Data = Buffer.from(imageData, "base64").toString("base64")

  // Create a data URL (base64-encoded) link
  const base64Link = `data:image/png;base64,${base64Data}`

  return base64Link
}

export default pngToBase64
