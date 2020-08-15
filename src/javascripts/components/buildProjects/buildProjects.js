import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';
import './buildProjecs.scss';

const projectBuilder = () => {
  projectData.getProjects()
    .then((projects) => {
      console.warn('get projects worked', projects);
      let domString = `
        <h1>Projects</h1>
        <div class="proCards d-flex flex-wrap justify-content-center">
      `;

      projects.forEach((project) => {
        if (project.available === true) {
          domString += `<div class="card text-center" style="width: 18rem;">
          <div class="card-header">
            <h2 class="title text-dark">${project.title}</h2>
          </div>
          <ul class="list-group list-group-flush">
          <img src="${project.screenshot}" alt="">
            <li class="list-group-item">${project.description}</li>
            <li class="list-group-item">${project.technologiesUsed}</li>
            <li class="anchor-projects"><a href="${project.githubUrl}" class="card-link" target="_blank"><i class="fab fa-github-square fa-3x"></i></a></button></li>
          </ul>
        </div>`;
        }
      });
      utils.printToDom('#projectCards', domString);
    })
    .catch((err) => console.error('get pros broke', err));
};

export default { projectBuilder };
