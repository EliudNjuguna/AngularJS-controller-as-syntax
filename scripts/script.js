
/// <reference path="angular.min.js" />

var app = angular
            .module("Demo", ["ngRoute"])
            .config(function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        templateUrl: "Templetes/home.html",
                        controller: "homeController",
                        controllerAs: "homeCtrl"
                    })
                    .when("/courses", {
                        templateUrl: "Templetes/courses.html",
                        controller: "coursesController",
                        controllerAs: "coursesCtrl"
                    })
                    .when("/student", {
                        templateUrl: "Templetes/student.html",
                        controller: "studentController",
                        controllerAs:"studentCtrl"
                    })
            })
            .controller("homeController", function () {
                    this.message = "Home Page";
            })
            .controller("coursesController", function () {
                this.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server","JAVA","PHP","C++"];
            })
				.controller("studentController",function(){
					this.students = ["Mary","John","Mark","Samuel","James","Mathew","Paul"];
				})
			