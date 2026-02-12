import "./App.css";

function App() {
  const tools = [
    {
      name: "ChatGPT",
      description: "AI chatbot for writing, coding and questions",
      link: "https://chat.openai.com"
    },
    {
      name: "Midjourney",
      description: "AI image generator",
      link: "https://www.midjourney.com"
    },
    {
      name: "Runway",
      description: "AI video generation",
      link: "https://runwayml.com"
    },
    {
      name: "ElevenLabs",
      description: "AI voice generator",
      link: "https://elevenlabs.io"
    }
  ];

  return (
    <div className="container">
      <div className="header">
        <div className="title">AI-PLATFORM</div>
        <div className="subtitle">AI Tools Directory</div>
      </div>

      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <div className="tool-name">{tool.name}</div>
            <div className="tool-desc">{tool.description}</div>
            <a href={tool.link} target="_blank" className="open-link">
              Open →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
