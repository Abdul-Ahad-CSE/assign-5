// Heart button functionality

function addHeartListener(boxId) {
  document.getElementById(boxId).addEventListener('click', function(e) {
    e.preventDefault();
    const mainHeart = document.getElementById('main-heart');
    const currentCount = parseInt(mainHeart.innerText);
    mainHeart.innerText = currentCount + 1;
  });
}

for (let i = 1; i <= 9; i++) {
  addHeartListener(`box-${i}-heart`);
}
