const speakerArr = [
  {
    name: 'David Parrish',
    position: 'public speaker',
    info: 'The way he illustrates his points is excellent. He makes you laugh and instantly you start to think about your own ideas and projects',
    pic: '/Images/speakers/2.jpg',
    class: 'speaker1-2'
  },
  {
    name: 'Dr Suzanne',
    position: 'Why playing games is important for health',
    info: 'Five corporate clients booked me from my IWD Speaker Directory listing for my Getting Ahead for Competence in a World Obsessed with Confidence presentation',
    pic: '/Images/speakers/6.jpeg',
    class: 'speaker1-2'
  },
  {
    name: 'John killer',
    position: 'Public speakers write and deliver',
    info: 'Informative and engaging speeches to a live audience. Public speakers may be self-employed or work as a spokesperson for a company or government organization. Their job is to impart key product or industry information in an engaging and innovative way.',
    pic: '/Images/speakers/1.jpeg',
    class: 'speaker3-6'
  },
  {
    name: 'Nir Eyal',
    position: 'behavioral design',
    info: ' a field Nir discovered out his passion for psychology, technology, and business. Nir is an expert on product marketing and development.',
    pic: '/Images/speakers/4',
    class: 'speaker3-6'
  },
  {
    name: 'Mari Smith',
    position: 'speaker on Facebook',
    info: 'Mari Smith is the most authoritative and memorable keynote speaker on Facebook marketing today. With great enthusiasm, clarity and presence, she educates her audiences with timeless strategies blended with tactics and trends.',
    pic: '/Images/speakers/5.jpeg',
    class: 'speaker3-6'
  },
  {
    name: 'Andrew Ng\'s',
    position: 'research is in machine learning',
    info: 'Research is in machine learning and in statistical AI algorithms for data mining, pattern recognition, and control. He is interested in the analysis of such algorithms and the development of new learning methods for novel applications.',
    pic: '/Images/speakers/6.jpeg',
    class: 'speaker3-6'
  },
]

/*< <img> <h1-p-hr-p> >*/
function displaySpeakers() {
  const speakerSec = document.querySelector('.persons')
  const speaker = document.createElement('div');
  speaker.classList.add('speaker');

  speakerArr.forEach((person), index => {
    const projectHTML = `
    <div id="${index}" class="${person.class}">
      <h1 class="feacher-speakers">Featured Speakers</h1>
      <hr class="speaker-hr1">
      <div class="img-div">
        <img alt="speaker-img" class="speaker-img" src="${person.pic}">
      </div>
      <div class"speakers-info">
        <h1 class="s-name">${person.name}</h1>
        <p class="s-position">${person.position}</p>
        <hrclass="speaker-hr2">
        <p class="s-position">${person.info}</p>
      </div>
    </div>`
    speaker.insertAdjacentHTML('beforeend', projectHTML);
  });
  speakerSec.appendChild(speaker);
  console.log (projectHTML)
}