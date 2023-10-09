import uvicorn
from fastapi import FastAPI

app = FastAPI()

def start():
    """Launched with 'poetry run start' at root level"""
    uvicorn.run("app.main:app", host="localhost", port=8888, reload=True)