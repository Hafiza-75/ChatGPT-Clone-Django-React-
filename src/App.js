import React, { useState } from "react";

export default function App() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! 👋 How can I help you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="p-4 bg-gray-800 text-center text-xl font-bold shadow">
        ChatGPT Clone ⚡
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 max-w-lg rounded-2xl ${
              msg.sender === "user"
                ? "bg-blue-600 ml-auto"
                : "bg-gray-700 mr-auto"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      {/* Input Box */}
      <footer className="p-4 bg-gray-800 flex space-x-2">
        <input
          className="flex-1 p-3 rounded-xl bg-gray-700 focus:outline-none"
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="px-4 py-2 bg-green-600 rounded-xl hover:bg-green-500"
          onClick={handleSend}
        >
          Send
        </button>
      </footer>
    </div>
  );
}
