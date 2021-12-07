function H2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <h2 className={className ? className : "font-sans text-xl font-medium"}>
      {children}
    </h2>
  );
}

export default H2;
