export type User = { name: string; email: string; password: string };

// eslint-disable-next-line no-unused-vars
export type FunctionSetIsLoginPage = (value: boolean) => void;

export type LoginOrSignUpProps = {
  setIsLoginPage: FunctionSetIsLoginPage;
};
