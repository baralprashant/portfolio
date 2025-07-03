# --- Built-in ---
import os

# --- Third-party ---
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# --- Local ---

from database.init_db import create_all_tables
# Run once on startup
create_all_tables()

from routes.gemai import router as gemai_router
from routes.contact import router as contact_router
from routes.logging_routes import router as logging_router
from routes.ping import router as ping_router

# ---------------------- FastAPI Setup ----------------------

app = FastAPI()

# origins = os.getenv("NEXT_PUBLIC_FRONTEND_URL", "").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
      "http://localhost:3000",
      "https://prashantbaral.com.np",
      "https://www.prashantbaral.com.np"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Backend is running with RAG and PostgreSQL!"}


# Include routes
app.include_router(gemai_router)
app.include_router(contact_router)
app.include_router(logging_router)
app.include_router(ping_router)