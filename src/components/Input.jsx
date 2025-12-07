export default function Input({ label, ...props }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <label>{label}</label>
      <br />
      <input
        {...props}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginTop: "5px",
        }}
      />
    </div>
  );
}
