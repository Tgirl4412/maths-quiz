function addUser() {
player1_name = document.getElementById("player1_name_input").ariaValueMax;
player2_name = document.getElementById("player2_name_input").ariaValueMax;

localStorage.setItem("player1_name", player1_name);
localStorage.setItem("playe2_name", player2_name);

window.location = "game_page.html";
}

