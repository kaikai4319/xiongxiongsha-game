# Development Guide

## Prerequisites
- Node.js 18+
- PostgreSQL 14+
- npm or yarn

## Project Structure
```
xiongxiongsha-game/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── database/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── websocket/
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── views/
│   │   ├── components/
│   │   ├── router/
│   │   ├── store/
│   │   └── assets/
│   ├── Dockerfile
│   └── package.json
└── docs/
    ├── API.md
    ├── DATABASE.md
    ├── GAME_RULES.md
    └── DEVELOPMENT.md
```

## Backend Setup

1. Install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create .env file:
   ```bash
   cp .env.example .env
   ```

3. Setup database:
   ```bash
   npm run db:init
   ```

4. Start server:
   ```bash
   npm run dev
   ```

## Frontend Setup

1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Docker Setup

1. Build images:
   ```bash
   docker-compose build
   ```

2. Start services:
   ```bash
   docker-compose up
   ```

## Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Contributing
1. Create a feature branch
2. Make your changes
3. Write tests
4. Submit a pull request

## Code Style
- Use ESLint for JavaScript
- Use Prettier for formatting
- Follow Vue.js style guide
- Add JSDoc comments for functions

## Debugging

### Backend
- Use `DEBUG=* npm run dev` for verbose logging
- Use VS Code debugger with launch config

### Frontend
- Use Vue DevTools browser extension
- Use browser DevTools for debugging

## Performance Optimization
- Use code splitting in frontend
- Implement database query optimization
- Cache frequently accessed data
- Monitor WebSocket connections

## Deployment

### Production Build
```bash
cd frontend
npm run build
```

### Environment Variables
Set the following for production:
- DB_HOST
- DB_PORT
- DB_NAME
- DB_USER
- DB_PASSWORD
- JWT_SECRET
- NODE_ENV=production

## Troubleshooting

### Port already in use
```bash
lsof -i :3000
kill -9 <PID>
```

### Database connection issues
- Verify PostgreSQL is running
- Check connection string in .env
- Ensure database exists

### WebSocket connection issues
- Check firewall settings
- Verify WS_PORT is accessible
- Check browser console for errors
