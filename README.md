# 🎨 Imagify – AI Image Generator SaaS 🚀

> Generate AI-powered images from text using CLIPDrop API, manage your credits, and enjoy a seamless experience with Razorpay payments! 💳✨

---

## 🔥 Features

- 🧠 Generate stunning AI images from text prompts using CLIPDrop API  
- 💸 Credit-based system: 1 image = 1 credit  
- 🖼️ Instant image preview & download using Base64 conversion  
- 💰 Razorpay integration for secure payments & credit top-ups  
- 🔐 Webhook-enabled credit update after successful transactions  

---

## 🗂 Project Structure

```
Imagify/
├── client/        # React frontend
├── backend/       # Node.js backend (Express)
└── README.md
```

---

## 🚀 Getting Started

> You'll need **Node.js**, **npm/yarn**, and a **MongoDB** instance. Razorpay credentials & CLIPDrop API key are also required.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/CodeJr10/imagify.git
cd imagify
```

---

### 2️⃣ Setup Environment Variables

#### 🔐 Backend `.env` file (in `/backend`)

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
CLIPDROP_API_KEY=your_clipdrop_api_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
FRONTEND_URL=http://localhost:3000
```

#### ⚙️ Frontend `.env` file (in `/client`)

```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

### 3️⃣ Install Dependencies

#### 📦 Backend

```bash
cd backend
npm install
```

#### 🧱 Client

```bash
cd ../client
npm install
```

---

### 4️⃣ Start the Development Servers

#### ▶️ Backend

```bash
cd backend
npm run server
```

#### 💻 Client

```bash
cd ../client
npm run dev
```

---

## ✨ Usage

1. Enter a creative **text prompt** 📝  
2. Click **Generate** and let the AI create a stunning image 🧠🎨  
3. Preview & download your image instantly 🖼️⬇️  
4. Buy more credits securely using Razorpay 🔐💳  
5. Keep generating and creating magic! 🌟

---

## 🛠️ Tech Stack

- **Frontend**: React, TailwindCSS, Axios  
- **Backend**: Node.js, Express, MongoDB, Razorpay SDK  
- **APIs**: CLIPDrop API for image generation  
- **Payment Gateway**: Razorpay with Webhook Support  

---

## 🧠 Future Improvements

- User dashboard with generation history  
- OAuth login (Google/GitHub) 
- Image upscaling options  
- Credit rewards for referrals

---

## 🤝 Contributing

Pull requests are welcome! Feel free to fork and make your magic. ✨  
Don’t forget to ⭐ the repo if you found it helpful!

---

## 📬 Contact
🔗 [Your GitHub Profile](https://github.com/CodeJr10)
