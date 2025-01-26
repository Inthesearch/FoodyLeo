export default function Button({ children, textOnly, className, ...props }) {
  let cssClassName = textOnly ? "text-button" : "button";
  cssClassName += " " + className;
  return (
    <button className={cssClassName} {...props}>
      {children}
    </button>
  );
}
