const pic2 = document.getElementById("pic2");
const pic1 = document.getElementById("pic1");
const streak_element = document.getElementById("streak");
let streak = 0;

function game() {
  const id = Math.floor((Math.random() * 6 + 1) * 10000);
  const fake_link = "https://thispersondoesnotexist.com/";
  const real_link = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`;

  const random_number = Math.floor(Math.random() * 20);
  if (random_number <= 10) {
    pic1.src = real_link;
    pic1.onclick = real_alert;
    pic2.src = fake_link;
    pic2.onclick = fake_alert;
  } else {
    pic1.src = fake_link;
    pic1.onclick = fake_alert;
    pic2.src = real_link;
    pic2.onclick = real_alert;
  }
}

function real_alert() {
  alert("Correct");
  streak++;
  streak_element.innerText = "Your streak is: " + streak;
  game();
}

function fake_alert() {
  alert("Incorrect");
  streak = 0;
  streak_element.innerText = "Your streak is: " + streak;
  game();
}
game();
