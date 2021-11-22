
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyADvJa81UZNgRQGZVmX6Rf7rVJjTThb1-g",
    authDomain: "kwitter-233c8.firebaseapp.com",
    databaseURL: "https://kwitter-233c8-default-rtdb.firebaseio.com",
    projectId: "kwitter-233c8",
    storageBucket: "kwitter-233c8.appspot.com",
    messagingSenderId: "341857165093",
    appId: "1:341857165093:web:7cbfa6e59949653c6c84cc"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+ user_name +"!";
  function addroom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
         purpose: "adding room name"
   });
   localStorage.setItem("room_name", room_name);
   window.location="kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Nmae- "+Room_names);
     row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
     document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}