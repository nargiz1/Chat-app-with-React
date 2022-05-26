import { useState } from "react"
import { FormControl, InputGroup, Form, Button } from "react-bootstrap"

const SendMessageForm = ({sendMessage}) => {

    const [message, setMessage] = useState('');

    return <Form
        onSubmit={ e=> {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <InputGroup>
            <FormControl placeholder='message...' onChange={ e=> setMessage(e.target.value)} value={message} />
            <Button variant='primary' type='submit' disable={!message}>Send</Button>
        </InputGroup>
    </Form>
}

export default SendMessageForm;