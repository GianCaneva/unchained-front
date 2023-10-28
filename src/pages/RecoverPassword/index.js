import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../../components/FormWrapper";
import { ButtonsContainer, CenteredContainer, Error, FormContainer } from "./styled";
import SmallButton from "../../components/SmallButton";
import UnchainedInput from "../../components/UnchainedInput";
import { SessionContext } from "../../context/session/SessionContext";

const FORM = {
  code: "",
  password: "",
  passwordCopy: "",
};

const INPUTS = [
  {id: 'code', placeholder: 'Codigo Enviado al mail'},
  {id: 'password', placeholder: 'Nueva Contraseña'},
  {id: 'passwordCopy', placeholder: 'Confirmar Contraseña'}
]

function RecoverPassword() {
  const [form, setForm] = useState(FORM);
  const [errorForm, setErrorForm] = useState(FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {mail, recoverPassword} = useContext(SessionContext)

  const navigate = useNavigate();

  const onSuccess = () => {
    setLoading(false)
    navigate("/login");
  }

  const onFailed = (error) => {
    setError(error)
    setLoading(false)
  }

  const onSubmit = (isNewUser = false) => {
    setLoading(true)
    const { code, password, passwordCopy } = form;
    let hasErrors = false;
    let errors = FORM;

    if (code.length === 0) {
      errors = {
        ...errors,
        mail: "Campo Obligatorio",
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

    if (password.length > 0 && password !== passwordCopy) {
      errors = {
        ...errors,
        passwordCopy: "La contraseña no coincide",
      };
      hasErrors = true;
    }

    if (hasErrors) {
      setErrorForm(errors);
      setLoading(false)
      return;
    }

    recoverPassword(code, mail, password, onSuccess, (error) => onFailed(error))

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
                setError(null)
              }}
            />
          ))}
        </FormContainer>
        {error && (
        <CenteredContainer>
          <Error>{error}</Error>
        </CenteredContainer>
        )
        }
        <ButtonsContainer>
          <SmallButton text={"Cambiar Contraseña"} onPress={() => onSubmit(false)} isLoading={loading} />
        </ButtonsContainer>
    </FormWrapper>
  );
}

export default RecoverPassword;
