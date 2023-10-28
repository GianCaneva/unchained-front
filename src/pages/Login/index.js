import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isInvalidMail } from "../../utils/validations";
import FormWrapper from "../../components/FormWrapper";
import { ButtonsContainer, CenteredContainer, Error, ForgotPassword, FormContainer } from "./styled";
import SmallButton from "../../components/SmallButton";
import UnchainedInput from "../../components/UnchainedInput";
import { SessionContext } from "../../context/session/SessionContext";

// const FORM = {
//   mail: "gfocaneva@gmail.com",
//   password: "admin",
// };

const FORM = {
  mail: 'gfocaneva@gmail.com',
  password: 'admin'
}

const ERROR_FORM = {
  mail: '',
  password: ''
}

const INPUTS = [
  {id: 'mail', placeholder: 'Usuario', type: 'text'},
  {id: 'password', placeholder: 'Contraseña', type: 'password'}
]

function Login() {
  const [form, setForm] = useState(FORM);
  const [errorForm, setErrorForm] = useState(ERROR_FORM);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const {login, createUser} = useContext(SessionContext)

  const navigate = useNavigate();

  const onLoginSuccess = () => {
    setLoginLoading(false)
    navigate("/home");
  }

  const onLoginFailed = (error) => {
    setLoginError(error)
    setLoginLoading(false)
  }

  const onSubmit = (isNewUser = false) => {
    setLoginLoading(true)
    const { mail, password } = form;
    let hasErrors = false;
    let errors = FORM;
    if (isInvalidMail(mail)) {
      errors = {
        ...errors,
        mail: "Formato de mail inválido",
      };
      hasErrors = true;
    }
    if (password.length === 0) {
      errors = {
        ...errors,
        password: "Campo obligatorio",
      };
      hasErrors = true;
    }
    if (hasErrors) {
      setErrorForm(errors);
      setLoginLoading(false)
      return;
    }

    if (isNewUser){
      createUser(mail, password, onLoginSuccess, (apiError) => onLoginFailed(apiError))
    }else{
      login(mail, password, onLoginSuccess, (apiError) => onLoginFailed(apiError))
    }
  };

  return (
    <FormWrapper>
      <FormContainer>
          {INPUTS.map((i) => (
            <UnchainedInput
              value={form[i.id]}
              key={i.id}
              error={errorForm[i.id]}
              placeholder={i.placeholder}
              onChange={(v) => {
                setForm({ ...form, [i.id]: v });
                setErrorForm({ ...errorForm, [i.id]: "" });
                setLoginError(null)
              }}
              type={i.type}
            />
          ))}
        </FormContainer>
        {loginError && (
        <CenteredContainer>
          <Error>{loginError}</Error>
        </CenteredContainer>
        )
        }
        <CenteredContainer>
            <ForgotPassword href="code_sender">¿Olvidaste tu contraseña?</ForgotPassword>
        </CenteredContainer>
        <ButtonsContainer>
          <SmallButton text={"Crear Cuenta"} onPress={() => onSubmit(true)} isSecondary={true}/>
          <SmallButton text={"Ingresar"} onPress={() => onSubmit(false)} isLoading={loginLoading} />
        </ButtonsContainer>
    </FormWrapper>
  );
}

export default Login;
