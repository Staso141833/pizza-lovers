import {
  Button,
  FormControl,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { formControlStyles, formGroupStyles } from "./register.styles";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const register = async () => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (err) {
        console.error(err);
      }
  };
  return (
    <Stack>
      <Typography>Register</Typography>
      <FormGroup sx={formGroupStyles}>
        <FormControl sx={formControlStyles}>
          <TextField
            label="Emails"
            type="email"
            name="loginEmail"
            variant="filled"
            value={email}
            onChange={emailHandler}
          />

          <TextField
            label="Password"
            type="password"
            name="loginPassword"
            variant="filled"
            value={password}
            onChange={passwordHandler}
          />
        </FormControl>
      </FormGroup>
      <Button onClick={register}>Register</Button>
    </Stack>
  );
};
