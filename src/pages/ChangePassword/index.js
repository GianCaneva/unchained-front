import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SessionContext } from "../../context/session/SessionContext";
import InputPage from "../../components/InputPage";

const FORM = {
  currentPassword: "",
  newPassword: "",
  confirmPassword: "",
};

const INPUTS = ["currentPassword", "newPassword", "confirmPassword"];

const PLACEHOLDERS = {
  currentPassword: "Contraseña actual",
  newPassword: "Contraseña nueva",
  confirmPassword: "Confirmar contraseña nueva",
};

const ChangePassword = () => {
  const [form, setForm] = useState(FORM);
  const [errorForm, setErrorForm] = useState(FORM);
  const [loading, setLoading] = useState(false)

  const { userId, changePassword } = useContext(SessionContext);

  const {currentPassword, newPassword, confirmPassword} = form

  const navigate = useNavigate();

  const onSuccess = () => {
    setLoading(false)
    navigate("/home");
  }

  const onFailure = () => {
    setLoading(false)
  }

  const onSubmit = () => {
    setLoading(true)
    let hasErrors = false;
    let errors = FORM;
    Object.keys(form).forEach((key) => {
      if (form[key].length === 0) {
        errors = {
          ...errors,
          [key]: "Campo obligatorio",
        };
        hasErrors = true;
      } if (
        key === "confirmPassword" &&
        confirmPassword !== newPassword
      ) {
        errors = {
          ...errors,
          confirmPassword: "Las contraseñas no coinciden",
        };
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrorForm(errors);
      setLoading(false)
      return;
    }

    changePassword(currentPassword, newPassword, userId, onSuccess, onFailure)

  };

  return (
    <InputPage
      inputs={INPUTS}
      form={form}
      errorForm={errorForm}
      placeholders={PLACEHOLDERS}
      setForm={setForm}
      setErrorForm={setErrorForm}
      buttonLabel={"Cambiar contraseña"}
      onSubmit={onSubmit}
      isLoading={loading}
    />
  );
};

export default ChangePassword;
