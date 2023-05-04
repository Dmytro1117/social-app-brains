// Це технічний файл, який автоматично генерується технологією react.js
// Імпортуємо потрібні функції технології react.js
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Імпортуємо наш додаток
import App from "./App";

// Генеруємо місце в браузері, куди ми будемо вбудовувати наш інтерфейс
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Генеруємо наш інтерфейс в браузері
root.render(
  <StrictMode>
    <BrowserRouter basename="/social-app-brains">
      <App />
    </BrowserRouter>
  </StrictMode>
);
