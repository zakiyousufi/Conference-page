const speakerArr = [
  {
    name: 'David Parrish',
    position: 'public speaker',
    info: 'The way he illustrates his points is excellent. He makes you laugh and instantly you start to think about your own ideas and projects',
    pic: './Images/speakers/2.jpg',
    class: 'speaker1-2 first',
  },
  {
    name: 'Dr Suzanne',
    position: 'Why playing games is important for health',
    info: 'Five corporate clients booked me from my IWD Speaker Directory listing for my Getting Ahead for Competence in a World Obsessed with Confidence presentation',
    pic: './Images/speakers/6.jpeg',
    class: 'speaker1-2 first',
  },
  {
    name: 'John killer',
    position: 'Public speakers write and deliver',
    info: 'Informative and engaging speeches to a live audience. Public speakers may be self.',
    pic: './Images/speakers/1.jpeg',
    class: 'speaker3 first',
  },
  {
    name: 'Nir Eyal',
    position: 'behavioral design',
    info: ' a field Nir discovered out his passion for psychology, technology, and business. .',
    pic: './Images/speakers/4.png',
    class: 'speaker4 next',
  },
  {
    name: 'Mari Smith',
    position: 'speaker on Facebook',
    info: 'Mari Smith is the most authoritative and memorablerecognition, and control. ',
    pic: './Images/speakers/5.jpeg',
    class: 'speaker5 next',
  },
  {
    name: 'Andrew Ng\'s',
    position: 'research is in machine learning',
    info: 'Research is in machine learning and in statistical AI algorithms for data mining, pattern .',
    pic: './Images/speakers/6.jpeg',
    class: 'speaker6 next',
  },
];

const hamburger = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.menu-ul');
const fLink = document.querySelector('.link1');
const sLink = document.querySelector('.link2');
const tLink = document.querySelector('.link3');
const closeBtn = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});
fLink.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
sLink.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
tLink.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

/* < <img> <h1-p-hr-p> > */
const speakerSec = document.getElementById('speaker');
speakerArr.forEach((person) => {
  const projectHTML = `
    <div class="speakers">
    <div id="${person.id}" class="${person.class}">
      <div class="img-div">
        <img alt="speaker-img" class="speaker-img" src="${person.pic}">
      </div>
      <div class"speaker-info">
        <h1 class="s-name">${person.name}</h1>
        <p class="s-position">${person.position}</p>
        <hr class="speaker-hr2">
        <p class="s-info">${person.info}</p>
      </div>
    </div>
    </div>`;
  speakerSec.insertAdjacentHTML('beforeend', projectHTML);
});
// see more speakers
const more = document.querySelector('.more');
const showSpeaker = document.querySelector('.speaker3');
const showSpeake = document.querySelector('.speaker4');
const showSpe = document.querySelector('.speaker5');
const showSp = document.querySelector('.speaker6');

more.addEventListener('click', () => {
  showSpeaker.classList.toggle('active');
  showSpeake.classList.toggle('active');
  showSpe.classList.toggle('active');
  showSp.classList.toggle('active');
});