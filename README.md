# 🌐 Personal Portfolio Website

This is my personal **portfolio website**, designed and developed using modern web technologies. It showcases my skills, experience, and featured projects as a **MERN Stack Developer**.

🚀 **Live Demo**: [https://portfolio-frontend-beige-nine.vercel.app](https://portfolio-frontend-beige-nine.vercel.app)

---

## 🖼️ Features

- ⚡ Fast and optimized with **Vite**
- 💻 Built with **React.js** and styled using **Tailwind CSS**
- 📱 Fully responsive design
- 📂 Clean UI to showcase my projects, skills, and contact info
- 🔗 External links to GitHub and live demos
- 📬 Contact section with email and social profiles

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Redux Toolkit, Vite, Tailwind CSS.
- **Backend**: Express.js, Node.js, MongoDB, cloudinary.
- **Deployment**: Vercel

---

## 📁 Folder Structure

portfolio/ 
    ├── public/ # Static files 
    ├── src/ │ 
        ├── assets/ # Images, icons, etc. │ 
        ├── components/ # Reusable components │ 
        ├── pages/ # Different sections like Home, Projects, Contact │ 
    └── App.jsx # Main app component 
    ├── index.html 
    └── vite.config.js

---

## **Installation**  
### **1. Clone the repository**  
```bash
https://github.com/krishna-bata/portfolio-krishna-bata.git
cd portfolio
```

### **2. Install dependencies**  
#### **Frontend**  
```bash
cd frontend
npm install
```

#### **Backend**  
```bash
cd backend
npm install
```

### **3. Configure Environment Variables**  
Create a `.env` file in the **backend** directory and add:  
```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRETE_KEY=your_cloudinary_secret_key
CLOUDINARY_NAME=your_cloudinary_name
```

Create a `.env` file in the **frontend** directory and add:  
```env
VITE_BACKEND_URL=your_backend_url
```


### **4. Start the Application**  
#### **Backend**  
```bash
cd backend
npm run server
```
#### **Frontend**  
```bash
cd frontend
npm run dev
```

---

## 🌍 Deployment

# This project is deployed on Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Set the build command: npm run build
5. Set the output directory: dist
6. Click Deploy 🚀

---

## **Upcoming Features**  
🚀 I will add admin panel for this portfolio website to edit all the information in the database.      

---

## **Contributing**  
Contributions are welcome! Feel free to fork the repo, create a new branch, and submit a pull request.
