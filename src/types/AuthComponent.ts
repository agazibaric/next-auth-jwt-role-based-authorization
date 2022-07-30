export interface AuthProps {
  role: string;
  loading: JSX.Element;
  unauthorized: string;
}

export interface AuthComponent {
  auth?: AuthProps;
}
