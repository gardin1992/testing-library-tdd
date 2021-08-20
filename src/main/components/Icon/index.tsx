type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  size?: number;
  color?: string;
};

function Icon(props: Props) {
  const { icon: Component, size, color } = props;

  return (
    <i className="c-icon" role="button">
      <Component width={size} height={size} fill={color} />
    </i>
  );
}

Icon.defaultProps = {
  size: 24,
  color: "#000000",
};

export default Icon;
