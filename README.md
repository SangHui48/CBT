python -m venv env
pip install -r requirements.txt


cd backend
<!-- alembic revision --autogenerate -m "add initial tables" -->
alembic upgrade head
python main.py