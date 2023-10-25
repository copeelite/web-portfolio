import {images} from '../../constants'
import {nanoid} from "nanoid"

const fakeSkills = [
    {
        id: nanoid(),
        name: 'Python',
        bgColor: '#edf2f8',
        icon: images.python,
    },
    {
        id: nanoid(),
        name: 'Azure',
        bgColor: '#edf2f8',
        icon: images.azure,
    },
    {
        id: nanoid(),
        name: 'Docker',
        bgColor: '#edf2f8',
        icon: images.docker,
    },
    {
        id: nanoid(),
        name: 'C++',
        bgColor: '#edf2f8',
        icon: images.cpp,
    },
    {
        id: nanoid(),
        name: 'Mongodb',
        bgColor: '#edf2f8',
        icon: images.mongodb,
    },
    {
        id: nanoid(),
        name: 'Express',
        bgColor: '#edf2f8',
        icon: images.express,
    },
    {
        id: nanoid(),
        name: 'React',
        bgColor: '#edf2f8',
        icon: images.react,
    },
    {
        id: nanoid(),
        name: 'Nodejs',
        bgColor: '#edf2f8',
        icon: images.node,
    },
  ];
  
  export default fakeSkills;