type Rainbow =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "violet";

type AsProp<C extends React.ElementType> = {
  as?: C;
};

type TextProps = {
  color?: Rainbow | "black";
};

// type Props<C extends React.ElementType> = React.PropsWithChildren<
//   TextProps<C>
// > &
//   Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

export const Text = <C extends React.ElementType = "span">({
  as,
  color,
  children,
}: PolymorphicComponentProp<C, TextProps>) => {
  const Component = as || "span";

  const style = color ? { style: { color: color } } : {};

  return (
    <Component {...style}>
      {children}
    </Component>
  );
};
