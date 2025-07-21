# 🔐 PaasOP - Password Manager

PaasOP is a simple, intuitive password manager built using **React** and **localStorage**. It allows you to securely store, view, edit, and delete your passwords—all in the browser without any backend.


## 🚀 Features

- Add, view, edit, and delete passwords
- Password visibility toggle
- Clipboard copy support
- Instant toast notifications for actions
- Data persistence using `localStorage`
- Responsive and user-friendly UI
- Secure UUID-based identification

## 📂 Project Structure

```
📁 src
 ┣ 📁 components
 ┃ ┣ 📄 Footer.jsx
 ┃ ┣ 📄 Manager.jsx ← Main password manager logic
 ┃ ┗ 📄 Navbar.jsx
 ┣ 📄 App.jsx
 ┣ 📄 App.css
 ┣ 📄 index.css
 ┗ 📄 main.jsx

📁 public
 ┣ 📁 icons
 ┃ ┣ 📄 eye.png
 ┃ ┗ 📄 eyecross.png
 ┣ 📄 favicon.png
 ┗ 📄 vite.svg
```

## 🛠️ Tech Stack

- React.js
- Vite
- TailwindCSS (utility classes in JSX)
- Toastify for notifications
- localStorage (for data persistence)
- UUID (for unique password IDs)
- Lordicon (for animated icons)

## 📸 Screenshots

<img width="1916" height="905" alt="image" src="https://github.com/user-attachments/assets/91413d4e-6a43-40cf-b656-bce20984b1b7" />
<img width="345" height="642" alt="image" src="https://github.com/user-attachments/assets/c3a9e8c7-f122-4eac-8607-548cc5ef040b" />

## 🧪 How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/Tarun-Gautam-915/PassOP-Mongo-Version.git
cd password-manager
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open in browser:**

```
http://localhost:5173
```

## ✅ Future Improvements

- Add master password protection
- Sync with cloud/back-end (Firebase/MongoDB)
- Export/import passwords
- Dark mode support

## 📄 License

This project is licensed under the [MIT License](LICENSE).
