import React from 'react'

interface FormInputProps {
  label: string
  type: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ label, name, placeholder, type, value, onChange }: FormInputProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor="full_name" className="block font-semibold">
        {label}
      </label>
      <div className="rounded-3xl bg-white shadow-md shadow-[#8080801A] p-3 ">
        <input
          type={type}
          name={name}
          id={name}
          className="outline-none bg-transparent border-none w-full placeholder:text-gray"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default FormInput
