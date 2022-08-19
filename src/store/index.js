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
            name: 'TEAMWORK',
            percent:'90%',
            value: 90,
        },
        {
            name: 'HARD WORK',
            percent:'90%',
            value: 90,
        },
        {
            name: 'TRUSTING',
            percent:'100%',
            value: 100,
        },
        {
            name: 'DETERMINATION',
            percent:'90%',
            value: 90,
        },
        {
            name: 'HUMILITY',
            percent:'0%',
            value: 0,
        },
    ],
    Education:[
        {
            name: 'PLUMSTEAD HIGH SCHOOL',
            role: '- Student -',
            dev: 'Subjects:',
            desc: 'English, Afrikaans, Maths Literacy, History Geography, Business Studies, Life Orientation',
        },
        {
            name: 'HEALING HANDS ACADEMY',
            role: '- Student -',
            dev: 'Skills:',
            desc: 'Holistic Massage and nutrition',
        },
        {
            name: 'LIFE CHOICES ACADEMY',
            role: '- Student -',
            dev: 'Skills:',
            desc: 'HTML, CSS, Javascript.',
        },
        {
            name: 'SUNLANDS PRIMARY',
            role: '- Student -',
            dev: 'Subjects:',
            desc: 'English, Afrikaans, Maths, Natural Science, Geography, Sports Skills, Art',
        },
        {
            name: 'ESTRATEGIA BJJSA',
            role: '- Student -',
            dev: 'Skills:',
            desc: 'Brazilian Jiu Jitsu, Self Defence, Jiu Jitsu Education',
        },
        {
            name: 'JOHANNES CURTAINING',
            role: '- Worker -',
            dev: 'skills:',
            desc: 'Upholstery, Courier',
        },
    ],
    Experience:[
        {
            name: 'WEB DEVELOPMENT',
            role: '- Aspiring Web Developer -',
            dev: 'JOB:',
            desc: 'Web development using HTML, CSS, Javascript.',
        },
        {
            name: 'MASSAGE THERAPY',
            role: '- Free Lancer -',
            dev: 'JOB:',
            desc: 'Healing people mentaly, physically and spiritualy through means of touch.',
        },
        {
            name: 'BJJ JUNIOR\'S COACH',
            role: '- Junior\'s Coach -',
            dev: 'JOB:',
            desc: 'Teaching kids various techniques as well as life lessons and dicipline',
        },
        {
            name: 'UPHOLSTERY/ COURIER',
            role: '- Junior Upholsterer -',
            dev: 'Job:',
            desc: 'Building furniture, delivering to customers and assisting where needed.',
        },
        {
            name: 'CLIFFE DEKKER HOFMEYR',
            role: '- Job Shadow -',
            dev: 'Skills:',
            desc: 'Shadowing lawyers',
        },
        {
            name: 'EVE TRAVEL AGENCY',
            role: '- Job Shadow -',
            dev: 'Job:',
            desc: 'Shadowing travel agents',
        },
    ],
    Contact:[
        {
            name: 'GITHUB',
            link: 'https://github.com/MikhailThomas',
            icon: 'display-6 bi bi-github',
        },
        {
            name: 'LINKEDIN',
            link: 'https://www.linkedin.com/in/mikhail-thomas-177065208/"><',
            icon: 'display-6 bi bi-linkedin',
        },
        {
            name: 'EMAIL',
            link: '#contact',
            icon: 'display-6 bi bi-envelope',
        },
        {
            name: 'FACEBOOK',
            link: 'https://www.facebook.com/mikhail.thomas.773',
            icon: 'display-6 bi bi-facebook',
        },
    ],
    Modal: [
        {
            name:'Just Like Magic...',
            link:'https://i.postimg.cc/DfdsymVL/Ari-Store.png',
            extra:'Ariana Grande paraphernalia store',
            target:'#modal1',

        },
    ]
    },
    getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
