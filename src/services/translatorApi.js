const translateText = async (text, language) => {
  const url = `https://google-translate-api14.p.rapidapi.com/translate.php?input_text=${encodeURIComponent(
    text
  )}&to_language=${language}`;

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      "x-rapidapi-host": "google-translate-api14.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    console.log(data);

    if (data.message) {
  return "Translation service is temporarily unavailable because the free API limit has been reached. Please try again later.";
}
return data.translatedText || JSON.stringify(data);
  } catch (error) {
    console.error(error);
    return "Translation failed!";
  }
};

export default translateText;