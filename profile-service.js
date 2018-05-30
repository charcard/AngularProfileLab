"use strict";

function ProfileService($location) {
        let userInfo = {
            image: "grant.png",
            name: "Grant Chirpus",
            contact: "grant@grandcircus.co",
            bio: "I am a little chicken.  That's about it."
        };
        const setUserProfile = (user) => {
            userInfo = user;
            $location.path("/user-profile");
        };

        const getUserProfile= () => {
            return userInfo;
        };
    
        return {
            setUserProfile,
            getUserProfile
        };
};
angular
    .module("app")
    .factory("ProfileService", ProfileService);