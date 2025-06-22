# Password Generator

A simple, secure password generator built with React and Node.js. Create strong passwords with customizable length and character types.

## ✨ Features

- **Adjustable Length**: 4-50 characters using slider or text input
- **Character Options**: Letters, numbers, and special symbols
- **One-Click Copy**: Copy generated passwords instantly
- **Responsive Design**: Works on desktop and mobile
- **Real-time Generation**: Fast, secure password creation

## 🚀 Live Demo

- **Frontend**: [https://generate-random-password-mu.vercel.app](https://generate-random-password-mu.vercel.app)
- **API**: [https://generate-random-password-k1cw.onrender.com](https://generate-random-password-k1cw.onrender.com)

## 🛠️ Tech Stack

- **Frontend**: React, CSS3, Axios
- **Backend**: Node.js, Express
- **Deployment**: Vercel (client) + Render (server)

## 📦 Quick Start

```bash
# Clone repository
git clone https://github.com/yourusername/password-generator.git
cd password-generator

# Install dependencies
npm run install-all

# Start development
npm run dev
```

Opens at `http://localhost:3000`


## 🔧 Environment Setup

Create `.env` files:

**Client (.env)**:
```env
REACT_APP_API_URL=http://localhost:5000
```

**Server (.env)**:
```env
NODE_ENV=development
PORT=5000
```

## 📱 Usage

1. Set password length (4-50 characters)
2. Choose character types:
   - Letters (A-Z, a-z)
   - Numbers (0-9) 
   - Symbols (!@#$...)
3. Click "Generate Password"
4. Copy and use your secure password


## 📄 License

MIT License - feel free to use for personal or commercial projects.

---

Built with ❤️ by me for better password security