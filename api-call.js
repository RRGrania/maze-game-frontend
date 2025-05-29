async function getPredictedLabel(landmarks) { 
  try {
    // landmarks should be an array of 63 floats
    const response = await fetch("https://hand-gesture-api-production.up.railway.app/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ landmarks }),  // send landmarks here
    });

    const data = await response.json();
    console.log("Predicted label:", data.prediction);
    return data.prediction;  // Note: backend returns { prediction: "up" }
  } catch (error) {
    console.error("Prediction error:", error);
    return null;
  }
}
