export async function generateAI(prompt) {

  const image =
    "https://source.unsplash.com/1024x1024/?" +
    encodeURIComponent(prompt);

  return {
    text: "AI generated idea for: " + prompt,
    image
  };
}
