export const checkValidateData = (email, password) => {
  const isEmailValid = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};
