# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install a simple HTTP server
RUN npm install -g http-server

COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["http-server", "dist", "-p", "8080"]
