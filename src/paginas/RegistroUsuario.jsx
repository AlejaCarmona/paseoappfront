import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PanelFormulario from '../componentes/PanelFormulario'

const IMAGEN = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1400&q=80'

function RegistroUsuario() {
  const navegar = useNavigate()

  const [usuario, setUsuario] = useState({
    nombres: '',
    correo: '',
    contraseña: '',
    rol: '',
  })
  const [errores, setErrores] = useState({})

  const manejarCambio = (evento) => {
    const { name, value } = evento.target
    setUsuario({ ...usuario, [name]: value })
  }

  const validar = () => {
    const nuevosErrores = {}
    if (usuario.nombres.trim() === '') {
      nuevosErrores.nombres = 'Los nombres son obligatorios'
    }
    if (!/^\S+@\S+\.\S+$/.test(usuario.correo)) {
      nuevosErrores.correo = 'Ingrese un correo válido'
    }
    if (usuario.contraseña.length < 6) {
      nuevosErrores.contraseña = 'La contraseña debe tener mínimo 6 caracteres'
    }
    if (usuario.rol === '') {
      nuevosErrores.rol = 'Seleccione un rol'
    }
    return nuevosErrores
  }

  const manejarEnvio = (evento) => {
    evento.preventDefault()
    const nuevosErrores = validar()
    setErrores(nuevosErrores)
    if (Object.keys(nuevosErrores).length === 0) {
      console.log('Usuario registrado:', usuario)
      navegar('/home')
    }
  }

  return (
    <PanelFormulario
      imagen={IMAGEN}
      titulo="Tu unidad residencial, en un solo lugar"
      subtitulo="Reserva zonas comunes y administra los espacios de tu conjunto en Sabaneta."
    >
      <h2 className="fw-bold mb-1">Crear cuenta</h2>
      <p className="text-muted mb-4">Regístrate para empezar a reservar.</p>

      <form onSubmit={manejarEnvio} noValidate>
        <div className="mb-3">
          <label className="form-label fw-semibold">Nombres</label>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-person"></i></span>
            <input
              type="text"
              name="nombres"
              placeholder="Juan Pérez"
              className={`form-control ${errores.nombres ? 'is-invalid' : ''}`}
              value={usuario.nombres}
              onChange={manejarCambio}
            />
            <div className="invalid-feedback">{errores.nombres}</div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Correo</label>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-envelope"></i></span>
            <input
              type="email"
              name="correo"
              placeholder="correo@ejemplo.com"
              className={`form-control ${errores.correo ? 'is-invalid' : ''}`}
              value={usuario.correo}
              onChange={manejarCambio}
            />
            <div className="invalid-feedback">{errores.correo}</div>
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Contraseña</label>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-lock"></i></span>
            <input
              type="password"
              name="contraseña"
              placeholder="Mínimo 6 caracteres"
              className={`form-control ${errores.contraseña ? 'is-invalid' : ''}`}
              value={usuario.contraseña}
              onChange={manejarCambio}
            />
            <div className="invalid-feedback">{errores.contraseña}</div>
          </div>
        </div>

        <div className="mb-4">
          <label className="form-label fw-semibold">Rol</label>
          <div className="input-group has-validation">
            <span className="input-group-text"><i className="bi bi-shield-check"></i></span>
            <select
              name="rol"
              className={`form-select ${errores.rol ? 'is-invalid' : ''}`}
              value={usuario.rol}
              onChange={manejarCambio}
            >
              <option value="">Seleccione...</option>
              <option value="ADMINISTRADOR">Administrador</option>
              <option value="USUARIO">Usuario</option>
            </select>
            <div className="invalid-feedback">{errores.rol}</div>
          </div>
        </div>

        <button type="submit" className="btn btn-marca btn-lg w-100">
          <i className="bi bi-box-arrow-in-right me-2"></i>Registrarse
        </button>
      </form>
    </PanelFormulario>
  )
}

export default RegistroUsuario
