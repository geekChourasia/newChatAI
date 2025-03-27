# Chat App with Feedback System

This project is a chat application built with **React.js**, **TypeScript**, and **Material-UI**. It includes a **Feedback System** that allows users to rate their chat experience and provide feedback. The project follows a **Redux-based state management** approach.

## Features

### 1. **Chat System**

- Users can send and receive messages.
- Messages are displayed in a chat interface.
- Message state is managed using Redux.

### 2. **Feedback System**

- Users can provide feedback on their chat experience.
- Feedback includes a **rating (1-5 stars)** and an **optional comment**.
- Feedback is submitted and stored using Redux.

### 3. **Material-UI Theming**

- The UI follows **Material-UI** design principles.
- Custom theme applied using `ThemeProvider`.
- Primary color: `#075e54` (WhatsApp-like theme).

### 4. **State Management with Redux**

- Redux stores and manages the **messages** and **feedback**.
- Uses `useSelector` and `useDispatch` hooks for efficient state updates.

### 5. **Accessibility & User Experience**

- Interactive UI with `Button`, `TextField`, and `Rating` components.
- `onClose` functionality for dismissing the feedback form.
- Styled using `sx` prop for better theme consistency.


## Installation & Setup

### **1. Clone the Repository**

```sh
git clone https://github.com/********/*****.git
cd chat-app
```

### **2. Install Dependencies**

```sh
yarn install  # or npm install
```

### **3. Start the Development Server**

```sh
yarn start  # or npm start
```

## Usage

- Open `localhost:3000` in your browser.
- Type a message and press **Send**.
- Click on the **Feedback Button** to rate your experience.
- Submit feedback to store it in Redux.

## Future Enhancements

- Implement a **backend API** for persistent data storage.
- Add **WebSocket** support for real-time chat.
- Improve **UI animations** and **mobile responsiveness**.

---

### **Author**: [Abhishek Chourasia](https://www.linkedin.com/in/abhichourasia/)

