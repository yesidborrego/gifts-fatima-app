import { FormEvent, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IAuthForm, useFormAddGift } from '../../gifts';
import { LoginContext, firebaseErrors } from '../';

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState<boolean>(false);
  const { email, password, repeatPassword, onChangeformState } = useFormAddGift<IAuthForm>({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const { signup } = useContext(LoginContext);

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      await signup({email, password});
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
    <div className="container-login">
      <div className="form-login">
        <h1>Registrar usuario</h1>
        <form className="m-3" onSubmit={(event) => onSubmit(event)}>
          <div>
            <input
              className="form-control"
              name="email"
              onChange={onChangeformState}
              placeholder="Escribe tu email"
              type="email"
              value={email}
            />
          </div>

          <div className="input-group input-group-sm my-2">
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

          <div className="input-group input-group-sm mb-4">
            <input
              className="form-control"
              maxLength={12}
              name="repeatPassword"
              onChange={onChangeformState}
              placeholder="Repite la contraseña"
              type={ showRepeatPassword ? "text" : "password"}
              value={ repeatPassword }
            />
            <button
              className="btn btn-secondary btn-eyes"
              type="button"
              onClick={ () => setShowRepeatPassword(!showRepeatPassword) }
            >
              {
                showRepeatPassword
                ? ( <i className="fa-solid fa-eye"></i> )
                : ( <i className="fa-solid fa-eye-slash"></i> )
              }
            </button>
          </div>

          <button className="btn-login" type="submit">
            Registrarse
          </button>
        </form>

        <div className="redirect-login-signup">
          <span className="font-12">
            Si ya estás registrado {" "}
            <Link to={"/login"}>
              inicia sesíon
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
