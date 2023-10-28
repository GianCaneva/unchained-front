import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormWrapper from "../../components/FormWrapper";
import { ButtonsContainer, CenteredContainer, Error, FormContainer, Text } from "./styled";
import SmallButton from "../../components/SmallButton";
import UnchainedInput from "../../components/UnchainedInput";
import { SessionContext } from "../../context/session/SessionContext";
import { isInvalidMail } from "../../utils/validations";

const FORM = {
  code: "",
};

const INPUTS = [
  {id: 'mail', placeholder: 'Ingrese su mail'},
]

function CodeSender() {
  const [form, setForm] = useState(FORM);
  const [errorForm, setErrorForm] = useState(FORM);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const {mail, sendCode} = useContext(SessionContext)

  const navigate = useNavigate();

  const onSuccess = () => {
    setLoading(false)
    navigate("/login");
  }

  const onFailed = (error) => {
    setError(error)
    setLoading(false)
  }

  const onSubmit = () => {
    setLoading(true)
    const { mail } = form;
    let hasErrors = false;
    let errors = FORM;

    if (isInvalidMail(mail)) {
      errors = {
        ...errors,
        mail: "Formato de mail inválido",
      };
      hasErrors = true;
    }


    if (hasErrors) {
      setErrorForm(errors);
      setLoading(false)
      return;
    }

    sendCode(mail, onSuccess, (error) => onFailed(error))

  };

  return (
    <FormWrapper>
      <Text>
        Ingresa tu mail. Te enviaremos tu nueva contraseña al mail ingresado.
      </Text>
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
          <SmallButton text={"Enviar Código"} onPress={() => onSubmit()} isLoading={loading} />
        </ButtonsContainer>
    </FormWrapper>
  );
}

export default CodeSender;
