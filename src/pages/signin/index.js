import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import SAlert from './../../components/alert/index';
import { Navigate, useNavigate } from "react-router-dom";
import Form from './form';
import { postData } from '../../utils/fetch';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../redux/auth/action';

function PageSignin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem('token');


    // // handle change
    // cara 1 
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');


    // cara 2 lebih effective
    const [form, setForm] = useState({
        email: '',
        password: '',
    });

    const [alert, setAlert] = useState({
        status: false,
        message: ``,
        type: 'danger'
    });

    // name dan value dari form nya harus sama
    // Function And Arrow function
    // Function Declaration
    const handleChange = (e) => {
        console.log(e.target.value);
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async () => {
        setIsLoading(true);

        const res = await postData(`/cms/auth/signin`, form);
        if (res?.data?.data) {
            dispatch(userLogin(
                res.data.data.token,
                res.data.data.refreshToken,
                res.data.data.role,
                res.data.data.email
            ));
            setIsLoading(false);
            navigate('/');
        }
        else {
            setIsLoading(false);
            console.log();
            setAlert({
                status: true,
                type: 'danger',
                message: res?.response?.data?.msg ?? 'Internal Server Error'
            })
        }
    };

    if (token) return <Navigate to="/" replace={true} />;

    return (
        <>
            <Container md={12} className="my-5">
                <div className="m-auto" style={{ width: '50%' }}>
                    {alert.status && <SAlert message={alert.message} type={alert.type} />}
                </div>
                <Card style={{ width: '20rem' }} className="m-auto mt-5">
                    <Card.Body>
                        <Card.Title>From Login</Card.Title>
                        <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} isLoading={isLoading} />
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default PageSignin;