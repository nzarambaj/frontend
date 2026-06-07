"use client";
import { useState } from "react";

export default function AIReportBox() {
  const [text, setText] = useState("");

  const handleGenerate = async () => {
    alert("Sending to AI service...");
  };

  return (
    <div>
      <h2>AI Radiology Report</h2>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter findings..."
      />

      <button onClick={handleGenerate}>
        Generate Report
      </button>
    </div>
  );
}