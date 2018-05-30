"use strict";

const editProfile = {
    template:`
    <form ng-submit="$ctrl.editProfile($ctrl.user);">
    <p>Name</p>
    <input type="text" ng-model="$ctrl.user.name">
    <p>Contact</p>
    <input type="text" ng-model="$ctrl.user.contact">
    <p>Bio</p>
    <input type="text" ng-model="$ctrl.user.bio">
    <a class="updatebutton" href="#!/user-profile">Update</a>
    </form>
    `,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.user = angular.copy(ProfileService.getUserProfile());
        vm.fillOut = (user) => {
            ProfileService.setUserProfile(user);
            };
        }]
};

angular
    .module("app")
    .component("editProfile", editProfile);