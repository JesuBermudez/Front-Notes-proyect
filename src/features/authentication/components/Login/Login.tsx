import { useState } from "react";
import { NotebookPen } from "../../../../components/icons/NotebookPen";
import { EyeOff } from "../../../../components/icons/EyeOff";
import { Eye } from "../../../../components/icons/Eye";
import "./Login.css";
import login from "../../services/login";
import { useNavigate } from "react-router-dom";

interface LoginProps {
  onLogin: () => void;
}

export default function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await login(formData.email, formData.password);
    if (response == "Login failed")
      return alert("Ocurrió un error, intente de nuevo");
    onLogin();
    navigate("/", { state: { user: response } });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <div className="login-wrapper">
        <section className="login-form">
          <article className="header">
            <div className="icon-container">
              <div className="icon-wrapper">
                <NotebookPen />
              </div>
            </div>
            <div className="title-section">
              <h1>Iniciar Sesión</h1>
              <p>Accede a tus notas y continúa donde lo dejaste</p>
            </div>
          </article>

          <article className="form-section">
            <form onSubmit={handleSubmit} className="form">
              <div className="field-group">
                <label htmlFor="email" className="field-label">
                  Correo Electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@ejemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="field-input"
                  required
                />
              </div>

              <div className="field-group">
                <label htmlFor="password" className="field-label">
                  Contraseña
                </label>
                <div className="password-wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="field-input"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <button type="submit" className="submit-button">
                {"Iniciar Sesión"}
              </button>
            </form>

            <div className="signup-link">
              <a href="/register" className="link">
                {"¿No tienes cuenta? Regístrate aquí"}
              </a>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
