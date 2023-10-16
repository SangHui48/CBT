import uvicorn
from fastapi import FastAPI, APIRouter
from app.config import db
from app.service.auth_service import generate_role

def init_app():
    db.init()
    
    app = FastAPI(
        title="CBT",
        description="demo",
        version="1"
    )
    
    @app.on_event("startup")
    async def startup():
        await db.create_all()
        await generate_role()
        
    @app.on_event("shutdown")
    async def shutdown():
        await db.close()
    
    return app

app = init_app()

def start():
    uvicorn.run("main:app", host="localhost", port=8888, reload=True)
    

if __name__ == "__main__":
    start()