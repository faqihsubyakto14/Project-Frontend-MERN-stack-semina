import React from 'react'
import Form from 'react-bootstrap/Form';
import SButton from '../../components/Button';
import TextInputWithLabel from '../../components/TextInputWithLabel';

const form = ({ form, handleChange, handleSubmit, isLoading }) => {
    return (
        <Form>
            <TextInputWithLabel
                label="Email Address"
                name="email"
                value={form.email}
                type="email"
                placeholder="Enter Email"
                onChange={handleChange}
            />
            <TextInputWithLabel
                label="Password"
                name="password"
                value={form.password}
                type="password"
                placeholder="Enter Password"
                onChange={handleChange}
            />
            <SButton loading={isLoading} disabled={isLoading} variant="primary" action={handleSubmit}>
                Submit
            </SButton>
        </Form>
    )
}

export default form