/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var baseURL = "http://192.168.0.11:3000/";
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
   // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        // Activate the Login Form
        $("#login-form").css('display', 'block');
        $("#loginForm").on("submit",function(e) {
          // disable the button so we can't resubmit while we wait
          $("#submitButton",this).attr("disabled","disabled");
          var u = $("#username", this).val();
          var p = $("#password", this).val();
          if(u != '' && p!= '') {
            $.post(baseURL + 'user/login/', {username:u,password:p}, function(res) {
              if(res.success == true){
                $.mobile.changePage("list.html");
              } else {
                $("#ready-status").html("Invalid Login");
                $("#ready-status").css("background-color", "red");
                $("#submitButton").removeAttr("disabled");
              }
            },"json");
          } else {
                $("#ready-status").html("Username/Password Required");
                $("#ready-status").css("background-color", "red");
                $("#submitButton").removeAttr("disabled");
          }
          return false;
        });
    }
};
