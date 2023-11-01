import React, { useContext, useEffect, useState } from "react";
import { Grid } from "@mui/material";
import {
  InputField,
  SubmitButton,
  MessageDisplay,
  SUCCESS_MESSAGE,
  FAIL_MESSAGE
} from "../../components";
import { missingFields, profileUpdated } from "../../messages";
import { UserContext } from "../../providers/userProvider";
import { getProfile } from "./requests";

export function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("");

  const user = useContext(UserContext);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAge(e.target.value);
  };

  const handleGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || name === "") {
      setMessageText(missingFields);
      setMessageType(FAIL_MESSAGE);
    } else {
      // updateProfile();
      setMessageText(profileUpdated);
      setMessageType(SUCCESS_MESSAGE);
    }
  };

  useEffect(() => {
    getProfile(user);
  });

  return (
    <div>
      <h1>Profile Page</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <Grid item xs={4}>
            <InputField
              fieldName='Name'
              fieldValue={name}
              onChange={handleName}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              fieldName='Email'
              fieldValue={email}
              onChange={handleEmail}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <InputField fieldName='Age' fieldValue={age} onChange={handleAge} />
        </Grid>
        <Grid item xs={4}>
          <InputField
            fieldName='Phone'
            fieldValue={phone}
            onChange={handlePhone}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <Grid item xs={4}>
          <InputField
            fieldName='Gender'
            fieldValue={gender}
            onChange={handleGender}
          />
        </Grid>
        <Grid item xs={4}>
          <InputField
            fieldName='Plan'
            fieldValue={email}
            onChange={handleEmail}
          />
        </Grid>
      </Grid>
      <MessageDisplay text={messageText} type={messageType} />
      <SubmitButton onClick={handleSubmit} className='btn' type='submit'>
        Submit Changes
      </SubmitButton>
    </div>
  );
}
