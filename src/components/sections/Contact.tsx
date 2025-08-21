import React, { useState, ChangeEvent, FormEvent } from "react";
import Mail from "../../images/social/gmail.svg";
import GitHub from "../../images/social/gitHub_dark.svg";
import Linkedin from "../../images/social/linkedin.svg";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactFormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Validación de cada campo
  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return "El nombre solo puede contener letras y espacios";
        }
        return "";
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Email no válido. Verifica que este en el formato correcto.";
        }
        return "";
      case "message":
        if (value.trim() === "") {
          return "El mensaje no puede estar vacío";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;


    setFormData({ ...formData, [name]: value });


    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();


    const newErrors: ContactFormErrors = {};

    (Object.keys(formData) as (keyof ContactFormData)[]).forEach((key) => {
      const value = formData[key];
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });


    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus("Por favor corrige los errores antes de enviar");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("https://formspree.io/f/mqalykky", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("¡Mensaje enviado correctamente!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("Error al enviar el mensaje.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Ocurrió un error inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-950 text-white min-h-6 flex flex-col items-center text-center pt-16 pb-10 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold mb-4 text-center text-6xl bg-gradient-to-r from-purple-500 via-fuchsia-600 to-purple-700 bg-clip-text text-transparent">
          Puedes contactarme
        </h3>
        <p className="text-center text-gray-400 mb-12">
          Si te gustó mi trabajo y quieres que haga parte de tu equipo ¡Hablemos!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h4 className="text-3xl bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
              Información de contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src={Mail} alt="Logo de gmail" className="w-6" />
                <span>milabs.esp24@gmail.com</span>
              </div>
              <a
                href="https://github.com/camila0424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-fuchsia-500 transition"
              >
                <img src={GitHub} alt="GitHub" className="w-6" />
                github.com/camila0424
              </a>
              <a
                href="https://www.linkedin.com/in/camila-bedoya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-fuchsia-500 transition"
              >
                <img src={Linkedin} alt="Linkedin" className="w-6" />
                linkedin.com/in/camila-bedoya
              </a>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h4 className="text-lg bg-gradient-to-r from-purple-700 via-indigo-400 to-purple-700 bg-clip-text text-transparent mt-3 mb-5">
              Puedes enviarme un mensaje directo en este formulario. <br />
              Te responderé tan pronto como lo vea.
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre"
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Mensaje"
                  required
                  className="w-full h-28 p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-fuchsia-600"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-700 hover:to-purple-800 rounded-lg transition-all"
              >
                {loading ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>

            {status && (
              <p className="mt-4 font-semibold text-center text-sm text-green-400">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
