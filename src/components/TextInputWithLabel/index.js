import React from 'react'
import Form from 'react-bootstrap/Form';

const TextInputWithLabel = (
    {
        label,
        name,
        value,
        type,
        onChange,
        placeholder
    }
) => {
    return (
        <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
            />
        </Form.Group>
    )
}

export default TextInputWithLabel
