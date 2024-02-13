import React from "react";
import { authService } from "./fbase";
// import {useHistroy} from "react-router-dom";

const Profile = () => {
    const OnLogOutClick = () => authService.signOut();

    return (
        <>
        <Button onClick = {onLogOutClick}>Log out</Button>
        </>
    );
};

export default Profile;