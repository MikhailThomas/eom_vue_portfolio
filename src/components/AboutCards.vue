
const AboutCards = [{
    id: 1,
    img: ,
    title: Mikhail,
    desc: I am a energetic, happy and loving massage therapist who has taken part in the Healing Hands Academy, holistic massage course. I am determined to perfect my spiritual, physical and mental healing capabilities through touch communication.
},
{
    id: 2,
    img: ,
    title: Eaon,
    desc: Mikhail Eaon Thomas is an aspiring web developer who has been apart of the Life Choices coding internship. This is where he found his passion for web development and design. "My goal in life is to become the best at everything i do, through my hard work, determination and never settling for less than the best".
},
{
    id: 3,
    img: ,
    title: Mikhail,
    desc: I am a practitioner and a coach of Brazilian Jiu Jitsu.BJJ is a martial art focusing on the skill of taking an opponent to the ground, controlling the opponent, and using a number of techniques to force them into submission. This is the same mindset i use when taking on challenges using skill, knowledge and control to overcome them.
},
{
    id: 4,
    img: ,
    title: Cameron Stemmet,
    desc: Mikhail Thomas has been an outstanding person let alone aspiring web developer. He works hard and he would be a great asset to anyone. he has a great personality as well as great teamwork ability. He’s shown great prowess in leadership roles and never runs away from a challenge. I recommend him for your company.
},
{
    id: 5,
    img: ,
    title: Joshe Theys,
    desc: Through my experience working with Mikhail as a colleague at Life Choices Academy, I have witnessed his perseverance in the face of adversity.  He is dedicated to his tasks as he exhibits excellent time-management skills by always completing them on time. He is a natural leader and a great communicator. He will be an excellent addition to your team.
},
{
    id: 6,
    img: ,
    title: Amanda Gudlwa,
    desc: Mikhail Thomas is a pleasure to be around even outside the class room. He can hold conversation on different topics. He knows how to move from not knowing something to knowing it, because he understands his learning style. When working on the team he collaborates well, and engages well. He would be an assert on any team.
},
{
    id: 7,
    img: ,
    title: Reagan Carolussen,
    desc: 
},
{
    id: 8,
    img: ,
    title: Joel Mukhanya,
    desc: I have no hesitancy in writing a letter of recommendation for Mikhail. Joel Mukanya -Coding Lecturer.
},
{
    id: 9,
    img: ,
    title: Jason Wandrag,
    desc: Mikhail shows a lot of promise as a software developer. When he is focused, he works very diligently. His coding skills are gradually and steadily improving over time. I'm always happy seeing Jesse grow as a developer, and I hope he continues to work hard.
},
]

let allPlots = document.getElementById('cardsBruh');

function initiate(cards) {
    const cardsContainer = document.getElementById('cardsBruh');
    cardsContainer.innerHTML = '';
    plot.forEach((e)=>{
        cardsContainerinnerHTML += '
       <div id="${e.id}" class="frame">
       <a href="#">
       <span class="caption"><h3>"${e.title}"</h3><p class="desc">${e.desc}</p></span>
       <img src="${e.img}">
       </a>
       </div> 
        '
    });
}