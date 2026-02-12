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
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AIPLAT</h1>
      <h2>AI Tools Directory</h2>

      {tools.map((tool, index) => (
        <div key={index} style={{
          border: "1px solid #ddd",
          padding: "15px",
          marginBottom: "10px",
          borderRadius: "8px"
        }}>
          <h3>{tool.name}</h3>
          <p>{tool.description}</p>
          <a href={tool.link} target="_blank">Open</a>
        </div>
      ))}
    </div>
  );
}

export default App;
