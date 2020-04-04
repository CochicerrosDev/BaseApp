FROM nikolaik/python-nodejs:python3.7-nodejs10

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /code

WORKDIR /code
COPY . /code/

RUN pip install pipenv
RUN pipenv --python 3.7
ADD Pipfile /code/
RUN pipenv install --dev

RUN npm install --dev

EXPOSE 8080