window.onload = (e) => {
  document.getElementById('start-button').onclick = () => {
    console.log(e)
    startGame();
    // e.currentTarget.disabled = true
  };

  function startGame() {
    backGround.init()
  }
};
