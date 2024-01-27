/* eslint-disable react/jsx-props-no-spreading */
import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getUsers } from "../requests";
import { SelectUsersProps } from "../types";
import { User } from "../../../types/User";

export function SelectUsers({
  handleUserSelection,
  selectedUsers
}: SelectUsersProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await getUsers());
    };

    fetchUsers();
  }, []);

  return (
    <Autocomplete
      sx={{ width: 450 }}
      multiple
      id='tags-outlined'
      options={users}
      getOptionLabel={(user) => user.email}
      filterSelectedOptions
      value={selectedUsers}
      onChange={(_, value) => handleUserSelection(value)}
      renderInput={(params) => (
        <TextField
          {...params}
          label='filter Selected Options'
          placeholder='Favorites'
        />
      )}
    />
  );
}
