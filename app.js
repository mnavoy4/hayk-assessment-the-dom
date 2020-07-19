const h1 = document.querySelector("h1");
h1.textContent = "HACKED!"

const hrefs = document.querySelectorAll("a")
hrefs.forEach(element => element.setAttribute('href', 'https://thebadguys.com'));

const newImg = document.createElement('img');
newImg.src = "https://s3.amazonaws.com/ceblog/wp-content/uploads/2016/04/22110359/youve-been-hacked.png";
document.body.insertBefore(newImg, document.body.firstChild);

const toBeDeleted = document.querySelectorAll("main > p");
toBeDeleted.forEach(element => element.remove());

const newP = document.createElement("p");
newP.textContent = "Your account has been compromised.";
document.body.appendChild(newP);

const span = document.querySelector("span");
span.textContent = 0;