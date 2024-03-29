import uvicorn
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from app.config import db
from app.service.auth_service import generate_role

origins= [
    "http://localhost:3000"
]

def init_app():
    db.init()
    
    app = FastAPI(
        title="CBT",
        description="demo",
        version="1"
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=origins,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"]
    )
    
    @app.on_event("startup")
    async def startup():
        await db.create_all()
        await generate_role()
        
    @app.on_event("shutdown")
    async def shutdown():
        await db.close()
        
    from app.controller import authentification, users
    
    app.include_router(authentification.router)
    app.include_router(users.router)
    
    return app

app = init_app()

def start():
    uvicorn.run("main:app", host="localhost", port=8888, reload=True)
    

if __name__ == "__main__":
    start()