import React, { useState } from "react";
import { Grid } from "@mui/material";
import { ProfileField } from "./ProfileField";
import { SubmitButton } from "../../components/SubmitButton";

export function Profile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

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

  return (
    <div>
      <h1>Profile Page</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <ProfileField
            fieldName='Name'
            fieldValue={name}
            onChange={handleName}
          />
          <ProfileField
            fieldName='Email'
            fieldValue={email}
            onChange={handleEmail}
          />
        </Grid>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <ProfileField fieldName='Age' fieldValue={age} onChange={handleAge} />
        <ProfileField
          fieldName='Phone'
          fieldValue={phone}
          onChange={handlePhone}
        />
      </Grid>
      <Grid container item xs={12} spacing={1}>
        <ProfileField
          fieldName='Gender'
          fieldValue={gender}
          onChange={handleGender}
        />
        <ProfileField
          fieldName='Plan'
          fieldValue={email}
          onChange={handleEmail}
        />
      </Grid>
      <SubmitButton className='btn' type='submit'>
        Submit Changes
      </SubmitButton>
    </div>
  );
}
