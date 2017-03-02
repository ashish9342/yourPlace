  'use strict';

  /**
   * @ngdoc overview
   * @name yourSpaceApp
   * @description
   * # yourSpaceApp
   *
   * Main module of the application.
   */
  var app = angular.module('yourSpaceApp', ['ngAnimate', 'ngAria', 'ngCookies', 'ngMessages', 'ngResource', 'ngRoute', 'ui.router']);
  app
    .config(function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/home');
      $stateProvider
        .state("home", {
          url:"/home",
          views:{
            "":{
              templateUrl: "views/home.html"
            },
            "profile@home":{
              templateUrl: "views/home/profile.html"
            },
            "companyAnnouncement@home":{
              templateUrl: "views/home/company-announcement.html"
            },
            "leaveBalance@home":{
              templateUrl: "views/home/leave-balance.html"
            },
            "leaveDetails@home":{
              templateUrl: "views/home/leave-details.html"
            },
            "attendenceDetails@home":{
              templateUrl: "views/home/attendence-details.html"
            },
            "holidayList@home":{
              templateUrl: "views/home/holiday-list.html"
            },
            "queryStatus@home":{
              templateUrl: "views/home/query-status.html"
            }
            ,
            "payrolQueryStatus@home":{
              templateUrl: "views/home/payrol-query-status.html"
            }
          }//views ends here
        })
        .state("login", {
          url: "/login",
          templateUrl: "views/login.html"
        })
        .state("selfService", {
          views:{
            "":{
              templateUrl: "views/self-service.html"
            }
          }
        })
        .state("edirectory", {
          url: "/edirectory",
          templateUrl: "views/edirectory.html"
        })
        .state("myLeave", {
          url: "/my-leave",
          templateUrl: "views/my-leave.html"
        })
        .state("attendence", {
          url: "/attendence",
          templateUrl: "views/attendence.html"
        })
        .state("compOffRequest", {
          url: "/comp-off-request",
          templateUrl: "views/comp-off-request.html"
        })
        .state("raiseQuery", {
          url: "/raise-query",
          templateUrl: "views/raise-query.html"
        })
        .state("eacademy", {
          url: "/eacademy",
          templateUrl: "views/eacademy.html"
        })
        .state("downloads", {
          url: "/downloads",
          templateUrl: "views/downloads.html"
        });

    });
