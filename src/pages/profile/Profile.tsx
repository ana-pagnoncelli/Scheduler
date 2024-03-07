import React, { useContext, useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import {
  MessageDisplay,
  SUCCESS_MESSAGE,
  FAIL_MESSAGE
} from "../../components";
import {
  missingFields,
  profileUpdateError,
  profileUpdated
} from "../../components/AlertPopup/messages";
import { UserContext } from "../../context/userContext";
import { getProfile, updateProfile } from "./requests";
import { ProfileType } from "./types";
import { SUBMIT_CHANGES_BUTTON_NAME } from "./constants";
import { ProfileApp, ProfileBox, ProfileForm } from "./styles";

export function Profile() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [plan, setPlan] = useState("");

  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("");

  const { email } = useContext(UserContext);

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

  const handlePlan = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlan(e.target.value);
  };

  const fillProfile = (profile: ProfileType) => {
    setName(profile.name);
    setGender(profile.gender);
    setAge(profile.age);
    setPhone(profile.phone);
    setPlan(profile.plan);
  };

  const buildProfile = () => {
    const profile: ProfileType = {
      email,
      name,
      gender,
      age,
      phone,
      plan
    };

    return profile;
  };

  const handleUpdateProfile = async () => {
    if (email) {
      const profile = buildProfile();
      const response = await updateProfile(email, profile);
      if (response) {
        setMessageText(profileUpdated);
        setMessageType(SUCCESS_MESSAGE);
      } else {
        setMessageText(profileUpdateError);
        setMessageType(FAIL_MESSAGE);
      }
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (name === "") {
      setMessageText(missingFields);
      setMessageType(FAIL_MESSAGE);
    } else {
      handleUpdateProfile();
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const profile = await getProfile(email);
      if (profile) fillProfile(profile);
    };

    if (email) fetchProfile();
  }, []);

  return (
    <ProfileApp>
      <ProfileBox>
        <Typography variant='h3'>Profile</Typography>
        <ProfileForm>
          <TextField label='Name' value={name} onChange={handleName} />
          <TextField label='Email' value={email} />
          <TextField label='Age' value={age} onChange={handleAge} />
          <TextField label='Phone' value={phone} onChange={handlePhone} />
          <TextField label='Gender' value={gender} onChange={handleGender} />
          <TextField label='Plan' value={plan} onChange={handlePlan} />
        </ProfileForm>
        <MessageDisplay text={messageText} type={messageType} />
        <Button variant='contained' color='success' onClick={handleSubmit}>
          {SUBMIT_CHANGES_BUTTON_NAME}
        </Button>
      </ProfileBox>
    </ProfileApp>
  );
}
