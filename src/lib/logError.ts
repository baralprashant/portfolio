export const logErrorEvent = async (error: unknown, location: string) => {
  const sessionId = localStorage.getItem("sessionId");

  try {
    await fetch("http://localhost:8000/log-error/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: String(error),
        context: location,
        session_id: sessionId,
      }),
    });
  } catch (err) {
    console.error("❌ Failed to log error:", err);
  }
};
