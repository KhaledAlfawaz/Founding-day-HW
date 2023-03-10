import { Box, Button, Input } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function LogIn() {
  const [firstName, setfirstName] = React.useState('');
  const [pass, setPass] = React.useState<any>();
  const navigate = useNavigate();


  const logIn = () => {
    if (firstName == localStorage.getItem('firstName')) {
      navigate('/saudiday' , {});
    } else {
      alert('Please enter correct information');
    }
  };
  return (
    <div className="logIn-form color">
      <fieldset className="logIn-fieldset">
        تسجيل دخول
        <Input
          placeholder="User Name"
          onChange={(e) => {
            setfirstName(e.target.value);
          }}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        ></Input>
        <Button type="submit" onClick={logIn}>
          أهلًا وسهلًا
        </Button>
      </fieldset>
    </div>
  );
}

export default LogIn;
