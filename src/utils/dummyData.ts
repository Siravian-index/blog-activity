import {IKnowledge, IPortafolio} from "../types";
import {blogType} from "../app/features/blogSlice";

export const portafolioDummy: IPortafolio[] = [
    {
        id: 1,
        title: "To-do app",
        description: "a short description of the project",
        url: "https://github.com/Siravian-index/sofkatU-challenge-front",
    },
    {
        id: 2,
        title: "Simple API",
        url: "https://github.com/Siravian-index/sofkatU-challenge-back",
        description: "a short description of the project"
    },
    {
        id: 3,
        title: "Reactivity in Java",
        url: "https://github.com/Siravian-index/lite-rx-api-hands-on",
        description: "a short description of the project"
    }
]

export const blogsDummy: blogType[] = [
    {
        id: "1",
        title: 'To type or not to type',
        content: 'Phasellus aliquet est nec augue pharetra rhoncus. Aenean vel consectetur leo. Sed et mollis lorem. Mauris vel nibh risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam quis accumsan tellus. Vestibulum efficitur dui erat. Fusce quis enim eget nulla tempor ullamcorper. Etiam rhoncus auctor mattis. Cras luctus gravida ligula, ut condimentum ligula fringilla ac. Maecenas fringilla non turpis vehicula fringilla. Proin posuere dui sed tortor finibus feugiat. Fusce vel sollicitudin neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. In at accumsan enim. ',
        comments: [
            {
                id: "3233",
                comment: 'comment by default',
                author: 'Author of the comment by default',
            },
        ],
    },
    {
        id: "2",
        title: 'Reactive programming',
        content: 'Maecenas efficitur libero vitae ex maximus, at rhoncus enim ullamcorper. Nullam ut nulla neque. Ut eget lacus nec magna dapibus commodo. Suspendisse ut nibh at urna aliquet semper. Mauris aliquam orci vel hendrerit sollicitudin. Mauris ultricies quis ante sed vulputate. Praesent ac egestas ex. Donec accumsan consequat metus, ac fermentum nibh interdum ut. Aliquam porta mattis eros ac molestie. Praesent neque urna, bibendum nec risus id, efficitur egestas justo. Aliquam id orci lacus. ',
        comments: [
            {
                id: "323",
                comment: 'comment by default',
                author: 'Author of the comment by default',
            },
        ],
    },
    {
        id: "3",
        title: 'Common programming pitfalls',
        content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada sapien velit, ut pretium velit elementum ac. Nam ultrices fringilla purus, eget mollis ligula molestie id. Donec sollicitudin ac tortor in sodales. Duis volutpat, risus at tempus efficitur, lectus ipsum pretium erat, id rhoncus leo nibh eget nunc. Duis dignissim quam consequat erat convallis, sit amet ullamcorper eros ultricies. Nulla ac dapibus purus. Nulla imperdiet fringilla vehicula. Aliquam nec ornare tortor. Sed rhoncus nunc in tellus luctus euismod. Phasellus quis erat sem. Proin ultricies elementum sapien nec molestie. Vestibulum tristique pretium enim nec fermentum. Phasellus ut laoreet felis. Quisque accumsan eros sit amet dignissim mattis. Phasellus sollicitudin neque hendrerit, dignissim ante ac, fringilla sapien. ',
        comments: [
            {
                id: "233",
                comment: 'comment by default',
                author: 'Author of the comment by default',
            },
        ],
    },
]

export const knowledgeDummy: IKnowledge[] = [
    {
        id: 1,
        description: "I love typescript",
        mastery: 80,
        skill: "Javascript"
    },
    {
        id: 2,
        description: "I can center a div",
        mastery: 80,
        skill: "CSS"
    },
    {
        id: 3,
        description: "Less nullPointerExceptions",
        mastery: 70,
        skill: "Java"
    }
]