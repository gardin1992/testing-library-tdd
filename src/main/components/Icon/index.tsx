import * as S from "./styles";

type IconProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  color?: string;
  variant?: string;
  size?: number;
  title?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

export function Icon(props: IconProps) {
  const { icon: Component, size, variant, color, title, onClick } = props;

  return (
    <S.Icon className={`c-icon ${variant}`} role="button" onClick={onClick}>
      <Component
        width={size}
        height={size}
        fill={color}
        role="img"
        title={title}
      />
    </S.Icon>
  );
}

Icon.defaultProps = {
  size: 24,
  variant: "",
  color: "#000000",
  title: "icon",
  onClick: undefined,
};
