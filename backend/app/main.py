import uvicorn
from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware

from domain.question import question_router

app = FastAPI()

origins = ["http://localhost:5173"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(question_router.router)


@app.get("/hello")
def hello():
    return {"message": "안녕하세요."}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
