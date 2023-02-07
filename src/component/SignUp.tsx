import { Box, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function LogIn() {
  const [firstName, setfirstName] = React.useState('');
  const [pass, setPass] = React.useState<any>();
  const [confiromPass, setCPass] = React.useState<any>();
  const navigate = useNavigate();


  const getInfo = () => {
    if (firstName.length >= 3 && pass.length >= 3 && pass == confiromPass) {
      localStorage.setItem('firstName', firstName);
      navigate('/saudiday');
    } else {
      alert('Please enter correct information');
    }
  };
  return (
    <div className="logIn-form color">
      <fieldset className="logIn-fieldset">
        التسجيل
        <Input
          placeholder="User Name"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        ></Input>
        <Input placeholder="Email"></Input>
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="Confirom Password"
          type="password"
          onChange={(e) => {
            setCPass(e.target.value);
          }}
        ></Input>
        <Button type="submit" onClick={getInfo}>
          أهلًا وسهلًا
        </Button>
      </fieldset>
    </div>
  );
}

export default LogIn;
