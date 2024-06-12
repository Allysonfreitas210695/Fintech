import React from 'react'

interface IProps  extends React.ComponentProps<'input'>{
  name: string;
  label: string;
}

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-2)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)"
}

const lableStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle
}

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
}

export default function DateInput({ name, label, ...rest }: IProps ){
  return (
    <div>
      <label 
        style={lableStyle}
        htmlFor={name}
      >
        {label}
      </label>
      <input 
        id={name}
        name={name}
        style={inputStyle}
        {...rest}
      />
    </div>
  )
}
