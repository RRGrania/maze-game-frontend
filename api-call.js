async function getPredictedLabel(base64Image) {
  try {
    const response = await fetch("https://hand-gesture-api-production.up.railway.app/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ image: base64Image }),
    });

    const data = await response.json();
    console.log("Predicted label:", data.label);
    return data.label; // Example: "up"
  } catch (error) {
    console.error("Prediction error:", error);
    return null;
  }
}
