FROM node:20 AS build
COPY . /app
WORKDIR /app
ENV NUXT_UI_PRO_LICENSE B83E9F5C-D49B-4444-9F5F-839DC3C57F73
RUN set -x \
    && npm config set registry https://mirrors.huaweicloud.com/repository/npm/ \
    && npm i -g pnpm@latest-9 \
    && npm install \
    && pnpm generate

FROM nginx:alpine
RUN rm -r /usr/share/nginx/html/
COPY --from=build /app/.output/public/ /usr/share/nginx/html/
