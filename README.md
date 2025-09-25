# 🤖 ChatGPT Clone (Django + React)

A full-stack **ChatGPT-like web app** built with **Django (backend)** and **React (frontend)**.  
It allows you to chat with an AI assistant in real time, with a modern UI similar to ChatGPT.

---

## Features

- **Modern ChatGPT-style UI** (React + TailwindCSS)
- **Django REST API** backend
- **Chat with AI (OpenAI API integrated)**
- Responsive design (mobile-friendly)
- Sidebar for managing conversations
- Clean and minimal design

---

## Tech Stack

**Frontend:**
- React.js
- TailwindCSS

**Backend:**
- Django
- Django REST Framework
- OpenAI API
- CORS Headers

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/chatgpt-clone.git
cd chatgpt-clone
```

### 2. Backend (Django)
- Create and activate virtual environment
```python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
```

- Install dependencies
```
pip install django djangorestframework openai python-dotenv django-cors-headers
```
- Start Django project
```
cd backend
python manage.py migrate
python manage.py runserver
```

- Create a .env file inside your backend/ folder:
```
OPENAI_API_KEY=your_openai_api_key_here

```
- API will be available at:
```
 http://127.0.0.1:8000/api/chat/
```
### 3. Frontend (React)
```
cd ../frontend
```
- Install dependencies
```
npm install
```
- Install TailwindCSS
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
- Run frontend
```
npm start
```

- React app will run at:
```
 http://localhost:3000
```
## Screenshots

<img width="915" height="610" alt="te" src="https://github.com/user-attachments/assets/54d0330a-b856-40cf-9c3d-83e578a064af" />
<img width="965" height="553" alt="t" src="https://github.com/user-attachments/assets/95f058aa-95e4-4fcb-a448-42949e5e5124" />

### Project Structure
```
chatgpt-clone/
│── backend/        # Django backend (API)
│   ├── chat/       # Chat app
│   ├── backend/    # Django project settings
│   └── db.sqlite3
│
│── frontend/       # React frontend
│   ├── src/
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
└── README.md
```

## Future Improvements

- User authentication (login / register)
- Save chat history to database
- Deploy on Vercel + Render/Heroku
- Add speech-to-text and text-to-speech
