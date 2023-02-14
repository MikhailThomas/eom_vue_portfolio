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
            img: 'https://i.postimg.cc/SsfXS7Z9/PHOTO-2022-12-06-21-49-53.jpg',
            desc: 'Mikhail Eaon Thomas is an aspiring web developer who has been apart of the Life Choices coding internship. This is where he found his passion for web development and design. "My goal in life is to become the best at everything i do, through my hard work, determination and never settling for less than the best".'
        },
        {
            name: '\"THOMAS\"',
            img: 'https://i.postimg.cc/CM7dxnfV/PHOTO-2023-01-27-16-02-08.jpg',
            desc: 'I am a practitioner and a coach of Brazilian Jiu Jitsu.BJJ is a martial art focusing on the skill of taking an opponent to the ground, controlling the opponent, and using a number of techniques to force them into submission. This is the same mindset i use when taking on challenges using skill, knowledge and control to overcome them.'
        },
    ],
    Icons: [{
        img: "https://i.postimg.cc/zvFK4199/Illustration-of-empty-speech-bubble-comic-on-transparent-background-PNG-1.png",
    },
    {
        img: 'https://i.postimg.cc/L6V3bzSn/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901-1.png',
    },
    {
        img: 'https://i.postimg.cc/cCyG27dK/Screenshot-2023-02-02-114316-1.png',
    },
    {
        img: 'https://i.postimg.cc/N0S3289N/Screenshot-2023-02-02-113744-1.png',
    },
    {
        img: 'https://i.postimg.cc/Hsk6Hcjj/Screenshot-2023-02-02-113246-1.png',
    },
    {
        img: 'https://i.postimg.cc/65xZwTcn/Screenshot-2023-02-02-111200-1.png',
    },
    {
        img: 'https://i.postimg.cc/4xLnK368/Screenshot-2023-02-02-103608-1.png',
    },
    {
        img: 'https://i.postimg.cc/FRnxDmXG/Screenshot-2023-02-02-101454-1.png',
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
            name:'Ricardo Moses',
            img:'https://i.postimg.cc/G27wFFBq/Ricardo-2.jpg',
            desc:' Mikhail is a committed ,ambitious and competitive person. He is a great colleague who always encourages me to do my best and think out of the box to tackle a challlenge. We work very well together and bounce ideas off each other with ease. He is also extremely dedicated to what he loves to do, namely code, Jiu jitsu and building relationships with the peopole around him.',
        },
        {
            name:'Atheelah Arendse',
            img:'https://i.postimg.cc/Ss8vck96/IMG-4276.jpg',
            desc:'Mikhail is a happy, responsible and hard working individual who will always try to put a smile on my face. I have seen him work on projects first hand, he is extremly focused and anything he puts his mind to gets done. Your company would be happy to have Mikhail as an employee.',
        },
        {
            name:'JASON WANDRAG',
            img:'https://ca.slack-edge.com/T02LW4RMXJQ-U036JA3NVL5-45897a34dc43-512',
            desc:'Mikhail shows a lot of promise as a software developer. When he is focused, he works very diligently. His coding skills are gradually and steadily improving over time. I\'m always happy seeing Mikhail grow as a developer, and I hope he continues to work hard.',
        },
    ],
    Modal: [
        {
            name:'Just Like Magic...',
            link:'https://i.postimg.cc/DfdsymVL/Ari-Store.png',
            extra:'Ariana Grande paraphernalia store',
            target:'modal1',
            projnumb:'Project 1',
            para:'Just like magic is a store we created in a team of 4. this was our first group project using vue.',
            github:'https://github.com/MikhailThomas/Rainbow',
            netlify:'https://benevolent-fairy-63d677.netlify.app',
        },
        {
            name:'Rainbow...',
            link:'https://i.postimg.cc/8zdm2wpQ/Rainbow.png',
            extra:'...mostly using CSS',
            target:'modal2',
            projnumb:'Project 2',
            para:'This is a rainbow that I created using HTML and CSS during the first few weeks of the coding programme.',
            github:'https://github.com/MikhailThomas/Rainbow',
            netlify:'https://benevolent-fairy-63d677.netlify.app',
        },
        {
            name:'To-Do List...',
            link:'https://i.postimg.cc/wM3WHNW5/ToDoList.png',
            extra:'Using Javascript',
            target:'modal3',
            projnumb:'Project 3',
            para:'This is a To-Do List i created using HTML JavaScript and CSS practicing functionality.',
            github:'https://github.com/MikhailThomas/to_do_list.git',
            netlify:'https://rad-tanuki-5a3ade.netlify.app',
        },
        {
            name:'Holiday Destination...',
            link:'https://i.postimg.cc/k4LjJ4Lk/Bahamas.png',
            extra:'Using only html and css',
            target:'modal4',
            projnumb:'Project 4',
            para:'This is my personal top 5 reasond i would like to travel to the Bahamas HTML.',
            github:'https://github.com/MikhailThomas/holiday_destination.gi',
            netlify:'https://wondrous-khapse-1360d1.netlify.app',
        },
        {
            name:'Calculator...',
            link:'https://i.postimg.cc/XY9sV4gP/Calculator.png',
            extra:'...My first time using JavaScript',
            target:'modal5',
            projnumb:'Project 5',
            para:'This is a Calculator that I created using HTML and CSS and JavaScript.',
            github:'https://github.com/MikhailThomas/calculator.git',
            netlify:'https://voluble-trifle-6199ab.netlify.app',
        },
        {
            name:'Real Estate...',
            link:'https://i.postimg.cc/6Qv4spL7/Location3.png',
            extra:'real estate website using vue',
            target:'modal6',
            projnumb:'Project 6',
            para:'This is a Real Estate estate website used to sell properties and it has an admin page used to edit delete and add functions. I made this using HTML, CSS and JavaScript.',
            github:'https://github.com/MikhailThomas/EOM_real_estate.git',
            netlify:'https://comforting-semifreddo-f02e99.netlify.app',
        },
        {
            name:'Portfolio...',
            link:'https://i.postimg.cc/rmWSHf60/Portfolio.png',
            extra:'...My very first portfolio usinng HTML and CSS only',
            target:'modal7',
            projnumb:'Project 7',
            para:'This is the very first portfolio i made when i was fresh to HTML and CSS and i am extremely proud of my work.',
            github:'https://github.com/MikhailThomas/EOM_Portfolio.git',
            netlify:'https://deluxe-marshmallow-464bc5.netlify.app',
        },
        {
            name:'Temperature Converter...',
            link:'https://i.postimg.cc/G3S7KM2X/Temp-Converter.png',
            extra:'converter using javascript',
            target:'modal8',
            projnumb:'Project 8',
            para:'This temperature converter i made using mostly JavaScript with only a handfull of HTML and CSS.',
            github:'https://github.com/MikhailThomas/temperature_converter.git',
            netlify:'https://mellifluous-youtiao-ee4cd6.netlify.app',
        },
        {
            name:'Drawings...',
            link:'',
            extra:'THE END',
            target:'modal9',
            projnumb:'Project 9',
            para:'These are some of my drawings',
            github:'https://github.com/MikhailThomas/daggerfall.git',
            netlify:'',
        },

    ],
    Resume: [
        {
            name:'Plumstead High School',
            link:'https://i.postimg.cc/cHsCBSJc/School.webp',
            extra:'Matric 2018 student',
            title:'Subjects:',
            para:'English, Afrikaans, Maths, History, Geography, Business Studies, Life Orientation',
        },
        {
            name:'Healing Hands Academy',
            link:'https://i.postimg.cc/25268tz9/Academy.jpg',
            extra:'...Holistic Massage',
            title:'Skills:',
            para:'Holistic Massage Therapy and Nurtition. I have also been free lancing as a side huste and because i enjoy it.',
        },
        {
            name:'Life choices Academy',
            link:'https://i.postimg.cc/tTsN96Fw/lc-academy.webp',
            extra:'Full Stack Web Development',
            title:'Subjects:',
            para:'HTML, CSS, Javascript, MySQL, VueJS, NodeJS, Bootstrap',
        },
        {
            name:'Grizzly New Marketing',
            link:'https://i.postimg.cc/kXpY8ngx/grizzly.jpg',
            extra:'Intern...',
            title:'Skills:',
            para:'At Grizzly I completed tasks and went through the SEO and Wordpress learning journey.',
        },
        {
            name:'Estrategia BJJSA',
            link:'https://i.postimg.cc/g2Zz61jS/Jiu-Jitsu.jpg',
            extra:'Competitive Athlete',
            title:"Skills:",
            para:'Training for 3+ years in Brazilian Jiu Jitsu and self defence. A gold medalist in the AJP tournament',
        },
        {
            name:'Johannes Curtaining',
            link:'https://i.postimg.cc/1tHGsKd9/chair.jpg',
            extra:'...Working in upholstery',
            title:'Skills:',
            para:'I worked as an upholterer, installer and courier for the company',
        },
        {
            name:'Web Development',
            link:'https://i.postimg.cc/fWH9Ty8f/web-development.webp',
            extra:'Working in LC studio',
            title:'Skills:',
            para:'I worked in LC studio Going through various learning journeys such as a PHP course a Wordpress course and a google analytics course.',
        },
        {
            name:'Massage Therapy',
            link:'https://i.postimg.cc/jqNVQg1W/healing-hands.jpg',
            extra:'...Free lancing',
            title:'Skills:',
            para:'I go through to clients and perform massage and give tips for healthier living. I am building a loyal client base as well as making a genuine connections.',
        },
        {
            name:'BJJ Coach',
            link:'https://i.postimg.cc/vHxcPtWg/coach.webp',
            extra:"Junior's Coach",
            title:'Skills:',
            para:'In my free time I coach and assist the junor students',
        },
        {
            name:'Cliffe Dekker Hofmeyr',
            link:'https://i.postimg.cc/fLYPKYpm/courtroom.webp',
            extra:'Job shadowing...',
            title:'Skills:',
            para:'At Cliffe Dekker Hofmeyr I shadowed a number of lawers who showed me how the ins and outs of the firm as well as gave me tasks to complete.',
        },
        {
            name:'Eve travel',
            link:'https://i.postimg.cc/YSScQ6Lj/plane.jpg',
            extra:'Job Shadowing',
            title:'Skills:',
            para:'I shadowed a number of travel agents and an accontant to learn what the industry is about how tourism functions.',
        },
    ],
    Contact:[
        {
            link: 'https://github.com/MikhailThomas',
            icon: 'display-6 bi bi-github',
        },
        {
            link: 'https://www.linkedin.com/in/mikhail-thomas-177065208/"><',
            icon: 'display-6 bi bi-linkedin',
        },
        {
            link: '#contact',
            icon: 'display-6 bi bi-envelope',
        },
        {
            link: 'https://www.facebook.com/mikhail.thomas.773',
            icon: 'display-6 bi bi-facebook',
        },
    ],
    },
    getters: {},
  mutations: {},
  actions: {},
  modules: {}
});
