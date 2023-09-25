import React from "react";
import { Grid } from "@mui/material";
import { Input, Label } from "./styles";

export function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
          <Grid item xs={4}>
            <Label className='label' htmlFor='email'>
              Email
              <Input
                // onChange={handleEmail}
                className='input'
                // value={email}
                type='email'
                id='email'
              />
            </Label>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
