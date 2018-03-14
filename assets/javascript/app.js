var config = {
    apiKey: "AIzaSyDR_K-TfZsFDQ2uJctgNyikrm1g4VtiO-M",
    authDomain: "employeeinfo-c9a7f.firebaseapp.com",
    databaseURL: "https://employeeinfo-c9a7f.firebaseio.com",
    projectId: "employeeinfo-c9a7f",
    storageBucket: "",
    messagingSenderId: "648048754636"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var name = "";
  var role = "";
  var startDate = "";
  var rate = "";
 var addEmployer

  $("#addemployee").on("click", function(){
    name = $("#inputName").val().trim();
    role = $("#inputRole").val().trim();
    startDate = $("#inputDate").val().trim();
    rate = $("#inputRate").val().trim();
    console.log(name);
    console.log(role);
    console.log(startDate);
    console.log(rate);

    database.ref().push({
        name: name,
        role: role,
        startDate: startDate,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    })
  })

  database.ref().on("child_added", function(childSnapshot) {
    
    var childDate = childSnapshot.val().startDate;
    var parseDate = moment(childDate, "YYYY/MM/DD");


    $("#myTable").append(`
        <tr>
        <td>${childSnapshot.val().name}</td>
        <td>${childSnapshot.val().role}</td>
        <td>${childSnapshot.val().startDate}</td>
        <td>${moment().diff(parseDate, "months")}</td>
        <td>${childSnapshot.val().rate}</td>
        <td> </td>
        </tr>
    
    `)
  })

