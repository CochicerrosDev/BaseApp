#!/bin/bash

cd djangoApp

pipenv run python3 manage.py migrate
pipenv run python3 manage.py compilemessages
pipenv run python3 manage.py runserver 0.0.0.0:8000
