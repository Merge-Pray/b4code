"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WelcomeScreen({ onStart }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1>B4code</h1>
      <button
        onClick={onStart}
        style={{ padding: "10px 20px", fontSize: "1.2em", cursor: "pointer" }}
      >
        Start
      </button>
    </div>
  );
}
