export interface ButtonProps {
  status: string;
  title: string;
  onClick: () => void;
  type: 'button' | 'submit' | 'reset';
  radius: number;
}
