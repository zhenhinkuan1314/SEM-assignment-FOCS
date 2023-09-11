const chat = {
    1: {
        text: 'Hi! Welcome to Tarumt FOCS.',
        options: [
            {
                text: '👋',
                next: 2
            }
        ]
    },
    2: {
        text: 'I am chatbot. I have here to resist you.',
        next: 3
    },
    3: {
        text: 'Do you have any questions?',
        options: [
            {
                text: "<strong>Yes</strong>, please help me!",
                next: 4
            },
            {
                text: "<strong>Nope</strong>, Everything is fine.",
                next: 5
            }
        ]
    },
    4: {
        text: 'Which question you would like to ask?',
        options: [
            {
                text: "What are the Programme offered?",
                next: 6
            }, 
            {
                text: "When are TAR UMT intakes?",
                next: 7
            },
            {
                text: "Who are TAR UMT Staff directory?",
                next: 8
            }
        ]
    },
    5: {
        text: 'Alright, if any question to ask, please don\'t hesitate to ask me!',
    },
    6: {
        text: 'Here are several questions about Programme',
        options: [
            {
                text: "What are the Bachelor and Diploma programmes offered?",
                next: 9
            },
            {
                text: "What are the Foundation programmes offered",
                next: 10
            },
        ]
    },
    7: {
        text: 'Our intakes are in February, June, October and November. \n The June Intakes is the Main Intake.',
    },
    9: {
        text: 'For Bachelor Degree and Diploma programmes offered',
        options: [
            {
                text: "Go to Bachelor Degree and Diploma programmes",
                url: "https://www.tarc.edu.my/admissions/programmes/programme-offered-a-z/undergraduate-programme/",
            }
        ]
    },
    10: {
        text: 'For Foundation programmes offered',
        options: [
            {
                text: "Go to Foundation programmes",
                url: "https://www.tarc.edu.my/admissions/programmes/programme-offered-a-z/pre-university-programme/",
            }
        ]
    },
    11: {
        text: "For details on fees",
        options: [
            {
                text: "Go to bursary information",
                url: "https://www.tarc.edu.my/bursary/content.jsp?cat_id=5AA0377F-4E7F-494A-8EB4-CEF5CE4DD7AE"
            }
        ]
    },
    8: {
        text: "About Staff Directory",
        options: [
            {
                text: "Go to staff directory",
                url: "https://www.tarc.edu.my/staffDirectory.jsp?fdept=FOCS&fbrncd=KL&fdivcd="
            }
        ]
    }


    /*
    4: {
        text: 'Awesome. This chat is still in development. Happy coding!',
    },
    5: {
        text: 'Aah, you\'re missing out!',
        next: 6
    },
    6: {
        text: 'You should check it out on GitHub',
        options: [
            {
                text: "Go to GitHub",
                url: "https://github.com/peekobot/peekobot"
            }
        ]
    }
    */

    
};
