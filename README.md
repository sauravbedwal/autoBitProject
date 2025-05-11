
# autoBitProject

This is a React-based frontend project built using **Vite**, styled with **CSS** and **Bootstrap**, and enhanced with **Font Awesome** icons. The app is structured with scalability and maintainability in mind, following a clean folder setup for reusable components.

---

## 🚀 Technologies Used

- **React** – JavaScript library for building user interfaces
- **Vite** – Fast build tool and development server
- **Bootstrap** – For responsive and quick styling
- **Font Awesome** – Icon library
- **JavaScript**, **HTML**, **CSS**

---

## 🧠 Design Decisions

- Used **Vite** for faster development and optimized builds.
- Followed a scalable folder structure:
  - All reusable UI elements are in the `components/` folder.
  - Each component has its own folder (e.g., `Header/`, `Footer/`, `SearchBar/`).
  - Inside each component folder, there's a `.jsx` and a `.css` file, such as `Header.jsx` and `Header.css`.
  - This helps isolate concerns and makes debugging or updates easy in the future.
- Pages are structured in a `pages/` folder, where each page has its own folder.
- **Mock data** was used to simulate API data responses for UI display. A `utils/` folder was created containing a `MockData.js` file with an array of objects. This array was looped using `.map()` to dynamically render UI elements. This makes the app more modular and scalable for future integration with real APIs.
- Font Awesome is used for icons like `faPlus`, `faSignal`, `faUpload`, etc., imported properly from `@fortawesome` packages.
- Bootstrap is selectively used to help with layout and spacing for quicker UI building.

---

## 📁 Folder Structure

```
src/
│
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   ├── footer/
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── searchBar/
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   └── ... (other reusable components)
│
├── pages/
│   └── dataPage/
│       └── DataPage.jsx
│
├── utils/
│   └── MockData.js
│
├── App.jsx
└── main.jsx
```

---

## ▶️ How to Run This Project Locally

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/sauravbedwal/autoBitProject.git
```

### 2. Navigate to the Project Folder

```bash
cd autoBitProject
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

### 5. Open in Browser

Visit `http://localhost:5173` (or the port shown in your terminal).

---

## ✅ Prerequisites

- Node.js and npm installed on your system.

---

## 📌 Notes

- For Font Awesome icons, ensure you import them correctly, like:

```js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
```

- Bootstrap is used via npm installation, CDN is there in index.html inside <head></head>.
- Icons like `faSignal`, `faDownload`, `faUpload` are from `@fortawesome/free-solid-svg-icons`.

---

## 👨‍💻 Author

[Saurav Bedwal](https://github.com/sauravbedwal)
