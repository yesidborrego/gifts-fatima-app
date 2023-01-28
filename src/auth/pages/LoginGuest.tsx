import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IAuthForm, useFormAddGift } from '../../gifts';
import { LoginContext, firebaseErrors } from '..';

export const LoginGuest = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { email, password, onChangeformState } = useFormAddGift<IAuthForm>({
    email: "invitado@babyshower.com",
    password: "",
  });

  const { login } = useContext(LoginContext);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await login({email, password});
        navigate("/", {
          replace: true,
        });
    } catch (error: any) {
      const [ err ] = firebaseErrors.filter(er => er.code === error.code);
      if(err) {
        console.error(err.value);
      } else {
        console.error(error.code)
      }
    }
  }

  return (
    <div className="container-login-guest">
      <div className="form-login-guest">
        <h1>Iniciar sesión</h1>
        <form className="m-3" onSubmit={(event) => onSubmit(event)}>
          <div>
            <input
              className="form-control input-email-disabled"
              name="email"
              disabled
              onChange={onChangeformState}
              placeholder="Escribe tu email"
              type="hidden"
              value={email}
            />
          </div>

          <div className="input-group input-group-sm mb-4">
            <input
              className="form-control"
              maxLength={12}
              name="password"
              onChange={onChangeformState}
              placeholder="Escribe la contraseña"
              type={ showPassword ? "text" : "password"}
              value={password}
            />
            <button
              className="btn btn-secondary btn-eyes"
              type="button"
              onClick={ () => setShowPassword(!showPassword) }
            >
              {
                showPassword
                ? ( <i className="fa-solid fa-eye"></i> )
                : ( <i className="fa-solid fa-eye-slash"></i> )
              }
            </button>
          </div>

          <button className="btn-login-guest" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
