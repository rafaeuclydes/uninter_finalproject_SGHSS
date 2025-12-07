import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import logo from "../assets/logo.png";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <form onSubmit={handleLogin} style={styles.form}>
          <img src={logo} alt="Logo SGHSS" className="login-logo" />
          <Input label="E-mail" type="email" required />
          <Input label="Senha" type="password" required />

          <button style={styles.button}>Entrar</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f7fb",
  },
  box: {
    width: "100%",
    maxWidth: "350px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    background: "#003366",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    marginTop: "15px",
    fontSize: "16px",
  },
};
