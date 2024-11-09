interface TextProps {
  children?: React.ReactNode;
}
export const H1 = ({ children }: TextProps) => {
  return <h1 className="font-bold mb-10 text-2xl">{children}</h1>;
};

export const H2 = ({ children }: TextProps) => {
  return <h2 className="font-bold text-lg mb-3">{children}</h2>;
};
