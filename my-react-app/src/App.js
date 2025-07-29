function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Image Load Test</h1>
      <img
        src="/Gallery/test.jpg"
        alt="Test Image"
        style={{ width: "400px", borderRadius: "8px" }}
      />
    </div>
  );
}

export default App;
