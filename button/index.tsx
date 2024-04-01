interface buttonProps {
  name: string;
  cl: string;
  $width?: number;
  onClick?: () => void;
}

export const Button = ({ cl, name, onClick, $width }: buttonProps) => {
  return (
    <button
      type="button"
      className={cl}
      onClick={onClick}
      style={{ width: $width }}
    >
      <span>{name}</span>
    </button>
  );
};
