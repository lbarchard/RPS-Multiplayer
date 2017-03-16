$(document).ready(function() {
  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCo1z2M19beBgnl1W1-_GuptApduatb7QY",
        authDomain: "rock-paper-scissors-6966a.firebaseapp.com",
        databaseURL: "https://rock-paper-scissors-6966a.firebaseio.com",
        storageBucket: "rock-paper-scissors-6966a.appspot.com",
        messagingSenderId: "653657616245"
    };
    firebase.initializeApp(config);

    //Initial variables***************************************************************
    var database = firebase.database();
    
    // Initial Values
    var player1 = "Player 1";
    var player2 = "Player 2";
    var player1Choice = "scissors";
    var player2Choice = "scissors";
    var player1Wins = "0";
    var player2Wins = "0";
    var winner = "";
    var game = {
        player1: player1,
        player2: player2,
        player1Choice: player1Choice,
        player2Choice: player2Choice,
        player1Wins: player1Wins,
        player2Wins: player2Wins
    }
    
    //Functions**********************************************************
    function findWinner(player1Choice, player2Choice) {
        if (player1Choice === player2Choice) {
            winner = "tie"
        }
        else if ((player1Choice === "rock") & (player2Choice === "scissors") || 
        (player1Choice === "scissors") & (player2Choice === "paper") ||
        (player1Choice === "paper") & (player2Choice === "rock")) {
            winner = player1
        }
        else {
            winner = player2
        }

        database.ref().set({
            winner: winner,
        });
    }

    //Event listeners***************************************************************
    $("#begin-game").click(function(assignToGame) {
        assignToGame.preventDefault();
        player1 = $("#name").val().trim();
        console.log(player1);
        findWinner (player1Choice, player2Choice);
    });
    //Startup routine***************************************************************
    
});
