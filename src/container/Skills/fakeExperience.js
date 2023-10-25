// import {images} from '../../constants'
import {nanoid} from "nanoid"

const fakeExperience = [
    {
        id: 'exp-1',
        year: 2022,
        works:
            [{id: nanoid(), name: 'Frontend study', company: 'Seneca', desc: 'I worked with Javascript, Css, Html' },
            {id: nanoid(),name: 'Both frontend and backend study', company: 'Seneca', desc: 'I worked with more tools for web such as Nodejs, Bootstrap, Handlebars, Mongoose' }]
        

    },
    {
        id: 'exp-2',
        year: 2023,
        works:[{id: nanoid(),name: 'Web test and analyst', company: 'Tamvoes', desc: 'I test with a developer version website' },
        {id: nanoid(),name: 'Advanced C++', company: 'Seneca', desc: 'Use C++ make amazing Shopping cart' },
    ]
    },
  ];
  
  export default fakeExperience;