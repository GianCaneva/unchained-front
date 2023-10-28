const emailPattern =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

export const isValidMail = mail => {
  return emailPattern.test(mail);
};

export const isInvalidMail = mail => {
  return !mail || mail.length === 0 || !isValidMail(mail);
};
