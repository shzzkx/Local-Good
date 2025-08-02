//CHANGING QUOTES
//arrays
const quotes = [];
quotes[0] = '"We make a living by what we get, but we make a life by what we give."';
quotes[1] = '"He who wishes to secure the good of others, has already secured his own."';
quotes[2] = '"You must be the change you wish to see in the world."';
quotes[3] = '"Love cannot remain by itself — it has no meaning. Love has to be put into action and that action is service."';
quotes[4] = '"Everyone can be great, because everyone can serve."';
quotes[5] = '"I have found that among its other benefits, giving liberates the soul of the giver."';
quotes[6] = '"Only a life lived for others is a life worthwhile."';
const credits = [];
credits[0] = "Winston Churchill";
credits[1] = "Confucius";
credits[2] = "Mahatma Gandhi";
credits[3] = "Mother Teresa";
credits[4] = "Martin Luther King Jr.";
credits[5] = "Maya Angelou";
credits[6] = "Albert Einstein";
//get random index
var random = Math.floor(Math.random() * quotes.length);
document.getElementById("quote").innerHTML = quotes[random];
document.getElementById("credit").innerHTML = credits[random];


//COMING SOON
let soons = document.getElementsByClassName('coming-soon');
for (let i = 0; i < soons.length; i++) {
  soons[i].addEventListener('click', function() {
    alert("Coming soon!")
  });
}


//CHANGING WIDTH
let bigs = document.getElementsByClassName('big');
let smalls = document.getElementsByClassName('small');
function viewport(x) {
  if (x.matches) {

  }
  else {
    for (let i = 0; i < bigs.length; i++) {
      bigs[i].addEventListener('mouseover', function() {
        bigs[i].style.width = '60%';
        bigs[i].querySelector('.big-cover').style.width = '100%';
        bigs[i].querySelector('.big-cover').style.opacity = '0';
        bigs[i].parentElement.querySelector('.small').style.width = '40%';
        bigs[i].parentElement.querySelector('.small').querySelector('.small-cover').style.width = '100%';
      });
      bigs[i].addEventListener('mouseout', function() {
        bigs[i].parentElement.style.width = '100%';
        bigs[i].style.width = '55%';
        bigs[i].querySelector('.big-cover').style.width = '100%';
        bigs[i].querySelector('.big-cover').style.opacity = '0.75';
        bigs[i].parentElement.querySelector('.small').style.width = '45%';
        bigs[i].parentElement.querySelector('.small-cover').style.width = '100%';
      });
    }

    for (let i = 0; i < smalls.length; i++) {
      smalls[i].addEventListener('mouseover', function() {
        smalls[i].style.width = '50%';
        smalls[i].querySelector('.small-cover').style.width = '100%';
        smalls[i].querySelector('.small-cover').style.opacity = '0';
        smalls[i].parentElement.querySelector('.big').style.width = '50%';
        smalls[i].parentElement.querySelector('.big-cover').style.width = '100%';
      });
      smalls[i].addEventListener('mouseout', function() {
        smalls[i].parentElement.style.width = '100%';
        smalls[i].style.width = '45%';
        smalls[i].querySelector('.small-cover').style.width = '100%';
        smalls[i].querySelector('.small-cover').style.opacity = '0.75';
        smalls[i].parentElement.querySelector('.big').style.width = '55%';
        smalls[i].parentElement.querySelector('.big-cover').style.width = '100%';
      });
    }
  }
}

var x = window.matchMedia("(max-width: 1000px)")

viewport(x);

x.addEventListener("change", function() {
  viewport(x);
});
