import projectData from '../../helpers/data/projectData';
// import utils from '../../helpers/utils';

const projectBuilder = () => {
  projectData.getProjects()
    .then((projects) => console.warn('get projects worked', projects))
    .catch((err) => console.error('get pros broke', err));
  // const domString = '<h1>I think its working</h1>';
  // utils.printToDom('#projectCards', domString);
};

export default { projectBuilder };
