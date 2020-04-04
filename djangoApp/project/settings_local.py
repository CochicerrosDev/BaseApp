
import dj_database_url
import os
from project.settings import *  # noqa: F403

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get("POSTGRES_DB", "djangoApp"),  # noqa: F405
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': os.environ.get("POSTGRES_HOST", "db")  # noqa: F405
    }
}

MIDDLEWARE = [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
] + MIDDLEWARE

database_url = os.environ.get('DATABASE_URL', None)

if database_url:
    DATABASES['default'] = dj_database_url.parse(
        database_url, conn_max_age=600)
