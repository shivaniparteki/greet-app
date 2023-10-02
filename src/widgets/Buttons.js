export const Button = ({ cssClassName, label, fn }) => {
  let className = `btn btn-${cssClassName}`;
  return (<button onClick={fn} className={className}>{label}</button>)
}