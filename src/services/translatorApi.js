const translateText = async (text, targetLanguage) => {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
        text
      )}&langpair=en|${targetLanguage}`
    );

    if (!response.ok) {
      throw new Error("Translation request failed");
    }

    const data = await response.json();

    return data.responseData.translatedText;
  } catch (error) {
    console.error("Translation Error:", error);
    throw error;
  }
};

export default translateText;