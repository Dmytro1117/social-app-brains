// Підключаємо потрібні технології
import React from "react";

// ============================================

// Імпортуємо компонент "Шапка"
import Header from "../component/Header";
// Імпортуємо компонент "Меню"
import Menu from "../component/Menu";
// Імпортуємо компонент "Сторінка"
import Page from "../component/Page";
// Імпортуємо компонент "Пусто"
import Empty from "../component/Empty";
import ChatList from "../component/ChatList";
// ============================================
// Імпортуємо файли потрібних картинок

import PhotoCloth from "../file/photo/man-cloth.png";
import PhotoFriend from "../file/photo/footh-new.png";
import PhotoFamily from "../file/photo/family-natur.png";
import PhotoSon from "../file/photo/son-gnat.png";
// ============================================
// Генеруємо константи, в яких тримаємо дані про список чатів

const CHATS_LIST = [
  {
    id: 1,
    photo: PhotoCloth,
    name: "Одяг",
    message: "Столиця моди...",
    notifyOff: true,
    messageAmount: 30,
    time: "14:22",
  },
  {
    id: 2,
    photo: PhotoFriend,
    name: "Дмитро",
    message: "Футбол?",
    isUnread: true,
    time: "11:22",
  },
  {
    id: 3,
    photo: PhotoFamily,
    name: "Родина",
    message: "Їдемо?",
    messageAmount: 3,
    time: "18:22",
    user: "Дружина",
    hasteg: "#Family",
  },
  {
    id: 4,
    photo: PhotoSon,
    name: "Син",
    message: "Незабаром буду",
    isRead: true,
    time: "16:22",
  },
];

// ============================================
// Генеруємо сторінку "Чати"

export default function Chats() {
  return (
    <Page>
      {/* В title передаємо текст заголовка сторінки */}
      <Header title="Чати" />
      <div>
        <ChatList list={CHATS_LIST} />
      </div>
      {/* В activePage передаємо посилання поточної сторінки */}
      <Menu activePage="/chats" />
    </Page>
  );
}
