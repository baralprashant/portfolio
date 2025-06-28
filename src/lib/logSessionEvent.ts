export const logSessionEvent = async (event: string, details: string) => {
  const sessionId = localStorage.getItem("sessionId");
  try {
    await fetch("http://localhost:8000/log-session-event/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, details, session_id: sessionId }),
    });
  } catch (err) {
    console.error("⚠️ Failed to log session event:", err);
  }
};
