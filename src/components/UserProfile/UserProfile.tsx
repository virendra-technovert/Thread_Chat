/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./UserProfile.scss";
import { Persona, PersonaInitialsColor } from "@fluentui/react/lib/Persona";
interface IUserProfile {
  displayName: string;
}
const UserProfile = (props: IUserProfile) => {
  // Extract the first letter of the display name
  const firstAndLastName = props.displayName.split(" ");
  const initial = props.displayName
    ? firstAndLastName[0].charAt(0).toUpperCase() +
      firstAndLastName[1]?.charAt(0).toUpperCase()
    : "";

  return (
    <Persona
      text={props.displayName}
      color="White"
      styles={{ primaryText: { color: "turquois" } }}
      className="user-persona"
      initialsColor={PersonaInitialsColor.blue}
      imageInitials={initial}
    />
  );
};

export default UserProfile;
