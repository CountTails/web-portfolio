FROM nginx:alpine

ENV GIT_REPO=https://github.com/nathancmendoza/web-portfolio.git 
ENV SRV_DIR=/srv/web-portfolio

# Install container dependencies
RUN apk update && apk add --no-cache git npm wget go hugo nginx

# Check out code
RUN git clone ${GIT_REPO} ${SRV_DIR}

WORKDIR ${SRV_DIR}

# Install site dependencies
RUN npm install 
RUN wget -c https://github.com/hugo-toha/toha/archive/refs/tags/v3.8.0.tar.gz -O - | tar -xz
RUN mv toha-3.8.0/* themes/toha && rm -rf toha-3.8.0/

# Configure server
COPY ./nginx.conf /etc/nginx/nginx.conf
RUN hugo --minify
