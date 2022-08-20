import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Input,
  FormHelperText,
  FormLabel,
  FormControl,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";



export const SignUp = () => {
    const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isValidPass, setInvalidPass] = React.useState(false);

    const handleSubmit = () => {
        const user = {
            name, 
            email,
            password
        }
        fetch("http://localhost:3001/register", {
            method: "POST",
            body : JSON.stringify(user),
            headers: {
                "content-type": "application/json"
            }
        })
        .then((res) => {
            res.json();
            if(!res.ok){
                throw console.error();
            }
        })
        .then((res) => {
            console.log(res)
            navigate("/login")
        })
        .catch((err) => {
            console.log("in catch block")
            console.log(err)});
    }
  const handleName = (e) => {
    setName(e.target.value)
  };
  const handleEmail = (e) => {
    setEmail(e.target.value)
  };
  const handlePassword = (e) => {
    setPassword(e.target.value)
  };


  return (
    <Box pr="30%" pl="40%" pt="5%">
      <Heading fontSize={32} mb="30px">
        Sign up to begin
      </Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input
          type="text"
          width="20rem"
          mb="20px"
          placeholder="Enter your Name"
          value={name}
          id="name"
          onChange={handleName}
        />

        <FormLabel>Email address</FormLabel>
        <Input
          type="email"
          width="20rem"
          value={email}
          placeholder="Enter your Email"
          id="email"
          onChange={handleEmail}
        />
        <FormHelperText mb="20px">We'll never share your email.</FormHelperText>

        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          width="20rem"
          mb="20px"
          placeholder="Enter your Password"
          value={password}
          id="password"
          onChange={handlePassword}
        />

        <FormHelperText width="20rem">
          By creating an account, I agree to all Terms and Conditions and
          Privacy Statement..
        </FormHelperText>
        <Box pl="80px" mt="20px">
          <Button colorScheme="blue" width="120px" onClick={handleSubmit}>
            Continue
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
