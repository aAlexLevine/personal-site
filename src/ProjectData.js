import liftLogSignInGif from './Images/Lift Log Images/Lift Log Sign In Standard Compressed.gif';
import liftLogtTableGif from "./Images/Lift Log Images/Lift Log Table Standard Compressed.gif";
import liftLogHistoryChartsGif from "./Images/Lift Log Images/Lift Log History Charts Standard Compressed.gif";
import liftLogNewPlansGif from "./Images/Lift Log Images/Lift Log New Plans Standard Compressed.gif";
import jaqenQuizGif from "./Images/Jaqen Images/Jaqen Quiz Standard Compressed.gif";
import jaqenThumbsGif from './Images/Jaqen Images/Jaqen Thumb Standard Compressed.gif';
import volunTinderAddRemoveGif from "./Images/VolunTinder/VolunTinder Add Delete Standard Compressed.gif";
import volunTinderCreateNew from "./Images/VolunTinder/VolunTinder CreateNew Standard Compressed.gif";
import gifStashSearchAddGif from './Images/Gif Stash/Gif Stash Search Standard Compressed.gif';
import gifStashFilterGif from './Images/Gif Stash/Gif Stash Filter Standard Compressed.gif';

const projects = {
  liftLog: {
    images: [
      liftLogSignInGif,
      liftLogtTableGif,
      liftLogHistoryChartsGif,
      liftLogNewPlansGif
    ],
    title: "Lift Log",
    description: "Track all your workouts and monitor your progress with dynamic charts ",
    stack: "ReactJS, ExpressJS, MySQL",
    links: {
      github: "https://github.com/aAlexLevine/Lift-Log-Dash",
      site: ""
    }
  },
  jaqen: {
    images: [
      jaqenQuizGif,
      jaqenThumbsGif
    ],
    title: 'Jaqen',
    description: `Jaqen is a real time learning management platform focused on 
      optimizing the classroom experience and increasing student engagement. 
      Two distinct client views with different admin credentials allows a teacher to 
      instantaneouly update and interact with their students.`,
    stack: "ReactJS, Redux, ExpressJS, Firebase, Postgres",
    links: {
      github: "https://github.com/The-North/classroom",
      site: ""
    }
  },
  volunTinder : {
    images: [
      volunTinderAddRemoveGif,
      volunTinderCreateNew
    ],
    title: 'VolunTinder',
    description: `Voluntinder is a platform which tries to pair altruistic, 
      good natured people who have some extra time to kill, 
      with volunteering oportunities nearby.`,
    stack: "ReactJS, ExpressJS, MySQL, Sequalize",
    links: {
      github: "https://github.com/hrnyc13-lyly/greenfield",
      site: "https://peaceful-dawn-78439.herokuapp.com/login"
    }

  },
  gifStash: {
    images: [
      gifStashSearchAddGif,
      gifStashFilterGif
    ],
    title: 'Gif Stash',
    description: `A repository to keep all your favorite gifs at hand. 
    Search for new gifs, tag them with a key search phrase and easily sort 
    through your stash when you need it.`,
    stack: "ReactJS, ExpressJS, MySQL",
    links: {
      github: "https://github.com/aAlexLevine/gif-stash-v2",
      site: ""
    }
  }
}

//Color Legend for reference
const colors = {
  default: '#3a3a3a;',
  orange: '#f96855'
}

export default projects;