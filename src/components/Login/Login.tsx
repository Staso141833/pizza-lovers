import {
  Button,
  FormControl,
  FormGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  formControlStyles,
  formGroupStyles,
  loginMainStackStyles,
} from "./login.styles";

import { auth, googleProvider } from "../../config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e: any) => {
    setPassword(e.target.value);
  };

  const signInWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  const onConsoleLog = () => {
    console.log(auth?.currentUser?.photoURL);
  };

  return (
    <Stack sx={loginMainStackStyles}>
      <Typography>Login</Typography>
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
      <Button onClick={signInWithEmail}>Sign In With Email</Button>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
      <Button onClick={logout}>Logout</Button>
      <Button onClick={onConsoleLog}>Console Log</Button>
    </Stack>
  );
};
