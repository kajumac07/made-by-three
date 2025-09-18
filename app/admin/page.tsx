"use client";
import React, { useState, useEffect } from "react";

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) return setError(data.error || "Login failed");
      setToken(data.token);
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    }
  };

  useEffect(() => {
    if (!token) return;
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/contact", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch messages");
        setMessages(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [token]);

  const toggleMessage = (id: string) =>
    setExpandedId(expandedId === id ? null : id);

  if (!token)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className="bg-white p-4 rounded shadow flex flex-col"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold">{msg.name}</p>
                <p className="text-gray-600">{msg.subject}</p>
              </div>
              <button
                onClick={() => toggleMessage(msg._id)}
                className="text-blue-600 font-bold"
              >
                {expandedId === msg._id ? "▲" : "▼"}
              </button>
            </div>
            {expandedId === msg._id && (
              <div className="mt-2 text-gray-700">{msg.message}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
