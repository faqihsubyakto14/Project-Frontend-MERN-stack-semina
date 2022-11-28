import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useNavigate } from 'react-router-dom';

const Sbreadcumb = ({ textSecond, textThird, urlSecond }) => { //props (static data sistemnya di lempar dari component)
    const navigate = useNavigate();
    return (
        <Breadcrumb className="my-2">
            <Breadcrumb.Item onClick={() => navigate('/')}>Home</Breadcrumb.Item>
            {!textThird && <Breadcrumb.Item active>{textSecond}</Breadcrumb.Item>}
            {textThird &&
                <Breadcrumb.Item onClick={() => navigate(urlSecond)}>
                    {textSecond}
                </Breadcrumb.Item>
            }
            {textThird && <Breadcrumb.Item active>{textThird}</Breadcrumb.Item>}
        </Breadcrumb>
    )
}

export default Sbreadcumb
