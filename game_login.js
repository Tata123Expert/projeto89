function addUser() /* Adicionar o nome addUser à function. */
{
    player1Name = document.getElementById("player1NameInput").value; /* Adicionar o id do jogador 1, ver no index.html */
    player2Name = document.getElementById("player2NameInput").value; /* Adicionar o id do jogador 2, ver no index.html */
  
      localStorage.setItem("player1Name", player1Name); /* Coloque o nome da chave dentro das aspas que é: player1Name */
      localStorage.setItem("player2Name", player2Name); /* Coloque o nome da chave dentro das aspas que é: player2Name */
  
      window.location = "game_page.html";
  }