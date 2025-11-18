# TxWebsite - Trading Platform

A full-stack trading platform with React frontend, Node.js/Express backend, MongoDB Atlas database, and Python trading bot integration.

## 🚀 Features

### Frontend
- ✅ Modern React + TypeScript + Vite
- ✅ Tailwind CSS with Dark/Light mode
- ✅ Global State Management (Zustand)
- ✅ Authentication System (JWT)
- ✅ Protected Routes
- ✅ Dashboard with Real-time Data
- ✅ Responsive Design

### Backend
- ✅ MVC Architecture
- ✅ RESTful API
- ✅ JWT Authentication
- ✅ MongoDB Atlas Integration
- ✅ User Management
- ✅ Trade Management
- ✅ Protected Routes & Middleware

### Trading Bot
- ✅ Python-based Hedging Bot
- ✅ MetaTrader 5 Integration
- ✅ XAU/USD Trading Strategy
- ✅ Risk Profile Management

## 📁 Project Structure

```
TxWebsite/
├── frontend/          # React + TypeScript frontend
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── contexts/      # React contexts (Auth, Theme)
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── store/         # Zustand global state
│   │   └── types/         # TypeScript types
│   └── package.json
│
├── backend/           # Node.js + Express backend
│   ├── src/
│   │   ├── config/        # Configuration (database, etc.)
│   │   ├── controllers/   # Business logic
│   │   ├── middleware/    # Custom middleware
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── utils/         # Utility functions
│   │   └── server.js      # Entry point
│   └── package.json
│
└── Hedging/          # Python trading bot
    ├── bot.py        # Main bot logic
    ├── config.py     # Bot configuration
    └── requirements.txt
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- Python 3.8+
- MongoDB Atlas account
- MetaTrader 5 (for bot)

### 1. Backend Setup

```bash
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MongoDB Atlas connection string
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/txwebsite
# JWT_SECRET=your-secret-key
# JWT_REFRESH_SECRET=your-refresh-secret
# FRONTEND_URL=http://localhost:5173

# Run development server
npm run dev
```

Backend will run on `http://localhost:3000`

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file (optional, defaults to localhost:3000)
# VITE_API_BASE_URL=http://localhost:3000/api

# Run development server
npm run dev
```

Frontend will run on `http://localhost:5173`

### 3. MongoDB Atlas Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. Whitelist your IP (or use `0.0.0.0/0` for development)
5. Get connection string and add to backend `.env`

### 4. Trading Bot Setup (Optional)

```bash
cd Hedging

# Install Python dependencies
pip install -r requirements.txt

# Configure bot in config.py
# Set MT5 credentials and trading parameters

# Run bot
python bot.py
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/refresh` - Refresh access token
- `GET /api/auth/me` - Get current user (Protected)
- `POST /api/auth/logout` - Logout (Protected)
- `PUT /api/auth/profile` - Update profile (Protected)

### Users
- `GET /api/users` - Get all users (Admin only)
- `GET /api/users/:id` - Get user (Protected)
- `PUT /api/users/trading-account` - Update trading account (Protected)

### Trades
- `GET /api/trades` - Get all trades (Protected)
- `GET /api/trades/:id` - Get single trade (Protected)
- `POST /api/trades` - Create trade (Protected)
- `PUT /api/trades/:id` - Update trade (Protected)
- `GET /api/trades/stats` - Get trade statistics (Protected)

## 🔐 Authentication Flow

1. User registers/logs in
2. Backend returns JWT token + refresh token
3. Frontend stores tokens in localStorage
4. All protected API calls include `Authorization: Bearer <token>`
5. Token refresh handled automatically

## 🎨 Frontend State Management

- **AuthContext**: User authentication state
- **ThemeContext**: Dark/Light mode
- **Zustand Store**: Trading data (trades, stats)

## 🗄️ Database Models

### User
- Email, password (hashed)
- First name, last name
- Role (user/admin)
- Trading account settings
- Refresh token

### Trade
- User reference
- Symbol, type, lot size
- Entry/exit prices
- Stop loss, take profit
- Status, profit, level
- MT5 ticket reference

## 🚦 Running the Application

1. Start MongoDB Atlas (cloud)
2. Start backend: `cd backend && npm run dev`
3. Start frontend: `cd frontend && npm run dev`
4. Open browser: `http://localhost:5173`

## 📝 Environment Variables

### Backend (.env)
```
PORT=3000
NODE_ENV=development
MONGODB_URI=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
JWT_REFRESH_SECRET=your-refresh-secret
JWT_EXPIRE=24h
JWT_REFRESH_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
```

### Frontend (.env)
```
VITE_API_BASE_URL=http://localhost:3000/api
```

## 🧪 Testing

### Test Backend API
```bash
# Health check
curl http://localhost:3000/api/health

# Register user
curl -X POST http://localhost:3000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123","firstName":"Test","lastName":"User"}'
```

## 📚 Tech Stack

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Zustand
- React Router

### Backend
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- bcryptjs

### Bot
- Python 3.8+
- MetaTrader5
- Custom Hedging Strategy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For issues or questions, please contact the development team.

