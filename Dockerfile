FROM node:12.5.0-alpine

RUN GRPC_HEALTH_PROBE_VERSION=v0.3.1 && \
    wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
    chmod +x /bin/grpc_health_probe

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile --non-interactive --production && yarn cache clean

COPY proto proto
COPY src src
COPY index.js .

RUN adduser -D -u 1001 -G root nonroot
USER 1001

EXPOSE 50051
CMD ["node", "index.js"]
