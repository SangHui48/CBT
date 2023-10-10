from pydantic import BaseModel, Field
from datetime import datetime

class TimeMixin(BaseModel):
    """Mxin to for datetime value of when the entity was created and when it was last modified"""

    created_at: datetime = Field(default_factory=datetime.now)
    modified_at: datetime = Field(
        sa_column = Column(DateTime, default=datetime.now, onupdate=datetime.now, nullable=False)
    )

