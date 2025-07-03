# --- Built-in ---
import os
# --- Built-in ---
import os

# --- Third-party ---
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# ---------------------- FastAPI Setup ----------------------
app = FastAPI()

print("✅ Starting backend...")

# CORS
origins = os.getenv("NEXT_PUBLIC_FRONTEND_URL", "").split(",")
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

print("✅ CORS configured")

# Ping route for health check
@app.get("/ping")
def ping():
    return {"status": "pong"}

@app.get("/")
def home():
    return {"message": "Backend is running with RAG and PostgreSQL!"}

# Safe init tables
try:
    from database.init_db import create_all_tables
    create_all_tables()
    print("✅ Tables initialized")
except Exception as e:
    print("❌ Table init failed:", e)

# Safe router imports
try:
    from routes.gemai import router as gemai_router
    from routes.contact import router as contact_router
    from routes.logging_routes import router as logging_router

    app.include_router(gemai_router)
    app.include_router(contact_router)
    app.include_router(logging_router)
    print("✅ Routers included")
except Exception as e:
    print("❌ Router import failed:", e)

# --- Third-party ---
from dotenv import load_dotenv
load_dotenv()
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# --- Local ---



from routes.gemai import router as gemai_router
from routes.contact import router as contact_router
from routes.logging_routes import router as logging_router
from routes.ping import router as ping_router

# ---------------------- FastAPI Setup ----------------------

app = FastAPI()

print("✅ Starting backend...")

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


try:
    from database.init_db import create_all_tables
    create_all_tables()
    print("✅ Tables initialized")
except Exception as e:
    print("❌ DB Init Error:", e)


# Include routes
app.include_router(gemai_router)
app.include_router(contact_router)
app.include_router(logging_router)
app.include_router(ping_router)