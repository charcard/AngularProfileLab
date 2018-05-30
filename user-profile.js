"use strict";

const userProfile = {
    template:`
    <div class="userProfile">
    <img class="grant" src="grant.png">
    <p class="userName"> {{ $ctrl.userData.name }}</p>
    <p class="userContact">  {{ $ctrl.userData.contact }}</p>
    <p class="userBio">  {{ $ctrl.userData.bio }}</p>
    <a class="editbutton" href="#!/edit-profile">Edit</a>
    </div>
    
    `,
    controller: ["ProfileService", function(ProfileService){
        const vm = this;
        vm.userData = ProfileService.getUserProfile();

    }]
};

angular
    .module("app")
    .component("userProfile", userProfile);