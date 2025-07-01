export const logSessionEvent = async (event: string, details: string) => {
  const sessionId = localStorage.getItem("sessionId");

  try {
    await fetch("http://3.149.229.174:8080/log-session-event/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event, details, session_id: sessionId }),
    });
  } catch (err) {
    console.error("⚠️ Failed to log session event:", err);
  }
};
