from typing import Optional
from app.model.mixins import TimeMixin
from sqlmodel import SQLModel, Field

class UsersRole(SQLModel, TimeMixin, table=True):
    __tablename__ = "user_role"

    user_id: Optional[str] = Field(default=None, foreign_key="users.id", primary_key=True)
    role_id: Optional[str] = Field(default=None, foreign_key="role.id", primary_key=True)
