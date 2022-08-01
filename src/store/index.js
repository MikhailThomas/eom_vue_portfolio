import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        Me: [{
            name: '\"MIKHAIL\"',
            img: 'https://i.postimg.cc/GtGwYJ1B/Mikhail.jpg',
            desc: 'I am a energetic, happy and loving massage therapist who has taken part in the Healing Hands Academy, holistic massage course. I am determined to perfect my spiritual, physical and mental healing capabilities through touch communication.'
        },
        {
            name: '\"EAON\"',
            img: 'https://i.postimg.cc/GtGwYJ1B/Mikhail.jpg',
            desc: 'Mikhail Eaon Thomas is an aspiring web developer who has been apart of the Life Choices coding internship. This is where he found his passion for web development and design. "My goal in life is to become the best at everything i do, through my hard work, determination and never settling for less than the best".'
        },
        {
            name: '\"THOMAS\"',
            img: 'https://i.postimg.cc/GtGwYJ1B/Mikhail.jpg',
            desc: 'I am a practitioner and a coach of Brazilian Jiu Jitsu.BJJ is a martial art focusing on the skill of taking an opponent to the ground, controlling the opponent, and using a number of techniques to force them into submission. This is the same mindset i use when taking on challenges using skill, knowledge and control to overcome them.'
        },
    ],
    Testimonials:[
        {
            name:'CAMERON STEMMET',
            img:'https://i.postimg.cc/PxBnPV0s/Cameron.jpg',
            desc:'Mikhail Thomas has been an outstanding person let alone aspiring web developer. He works hard and he would be a great asset to anyone. he has a great personality as well as great teamwork ability. He’s shown great prowess in leadership roles and never runs away from a challenge. I recommend him for your company.',
        },
        {
            name:'JOSHE THEYS',
            img:'https://i.postimg.cc/xdp2S1Rd/Joshe-Jade.jpg',
            desc:'Through my experience working with Mikhail as a colleague at Life Choices Academy, I have witnessed his perseverance in the face of adversity.  He is dedicated to his tasks as he exhibits excellent time-management skills by always completing them on time. He is a natural leader and a great communicator. He will be an excellent addition to your team.',
        },
        {
            name:'AMANDA GUDLWA',
            img:'https://i.postimg.cc/MTc8ZJPm/Amanda.jpg',
            desc:'Mikhail Thomas is a pleasure to be around even outside the class room. He can hold conversation on different topics. He knows how to move from not knowing something to knowing it, because he understands his learning style. When working on the team he collaborates well, and engages well. He would be an assert on any team.',
        },
        {
            name:'REAGAN CAROLUSSEN',
            img:'https://i.postimg.cc/NG9gBmZv/Reagan1.jpg',
            desc:'',
        },
        {
            name:'JOEL MUKHANYA',
            img:'',
            desc:'I have no hesitancy in writing a letter of recommendation for Mikhail. Joel Mukanya -Coding Lecturer.',
        },
        {
            name:'JASON WANDRAG',
            img:'',
            desc:'Mikhail shows a lot of promise as a software developer. When he is focused, he works very diligently. His coding skills are gradually and steadily improving over time. I\'m always happy seeing Mikhail grow as a developer, and I hope he continues to work hard.',
        },
    ],
    Technical:[
        {
            name: 'HTML',
            percent: '80%',
            value: 80,
        },
        {
            name: 'CSS',
            percent:'60%',
            value:60,
        },
        {
            name: 'BOOTSTRAP',
            percent:'60%',
            value: '60%',
        },
        {
            name: 'JAVASCRIPT',
            percent:'70%',
            value: 70,
        },
        {
            name: 'VUE',
            percent: '60%',
            value: 60,
        },
    ],
    Soft:[
        {
            name: '',
            percent:'',
            value:'',
        },
        {
            name: '',
            percent:'',
            value:'',
        },
        {
            name: '',
            percent:'',
            value:'',
        },
        {
            name: '',
            percent:'',
            value:'',
        },
        {
            name: '',
            percent:'',
            value:'',
        },
    ],

    },
    getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
