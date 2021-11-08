var firebaseConfig = {
    apiKey: "AIzaSyCfwzgO7R6mRFyrf4TQDD5aXKvPyPliFno",
    authDomain: "let-s-chat-web-app-5c07a.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-5c07a-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-5c07a",
    storageBucket: "let-s-chat-web-app-5c07a.appspot.com",
    messagingSenderId: "986308324723",
    appId: "1:986308324723:web:9e22f7e7f6a26e1fa9a906"
  };
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig); 

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "! "

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id"+ Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
 
    localStorage.setItem("room_name", room_name);
 
    window.location = "chat_page.html";
}

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "chat_page.html";
}


function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html"; 
}