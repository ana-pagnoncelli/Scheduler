export const singUpSuccess = (name: string) => {
  return `User ${name} successfully registered!!`;
};

export const missingFields = "Please enter all the fields";

export const singUpErrorCreatingUser = "It was not possible to create the user";

export const loginError = "Your email and/or password are wrong";

export const profileUpdated = "The profile was successfully updated";
export const profileUpdateError =
  "The profile was not updated. Try again later.";

// schedule
export const scheduleAlreadyExists =
  "This schedule already exists. Please, change the day of the week or the hour.";
export const scheduleCreated = "The schedule was successfully created";
export const scheduleDeleted = "The schedule was successfully deleted";

// plan
export const planAlreadyExists =
  "This plan already exists. Please, change the name.";
export const planDeleted = "The plan was successfully deleted";
export const planCreated = "The plan was successfully created";

export const errorMessage = "Error. Try again later.";
