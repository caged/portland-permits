FROM python:3.6

ENV NPM_CONFIG_COLOR false
ENV NPM_CONFIG_PROGRESS false
ENV NPM_CONFIG_SPIN false

RUN touch /etc/inside-container

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get -y update && apt-get install -y nodejs

# Install Pipenv
RUN set -ex && pip install pipenv --upgrade

# -- Install Application into container:
RUN set -ex && mkdir /app

WORKDIR /app

# -- Install Python requirements
COPY Pipfile Pipfile
COPY Pipfile.lock Pipfile.lock
RUN set -ex && pipenv install --deploy --system

# -- Install node requirements
COPY package.json package-lock.json ./
RUN npm install

# FROM python:3.6
#
# RUN set -ex && pip install pipenv --upgrade
#
# # -- Install Application into container:
# RUN set -ex && mkdir /app
#
# WORKDIR /app
#
# # -- Adding Pipfiles
# COPY Pipfile Pipfile
# COPY Pipfile.lock Pipfile.lock
#
# # -- Install dependencies:
# RUN set -ex && pipenv install --deploy --system
#
COPY . .
# WORKDIR /root/
# COPY --from=0 /go/src/github.com/alexellis/href-counter/app .
# CMD ["./app"]
