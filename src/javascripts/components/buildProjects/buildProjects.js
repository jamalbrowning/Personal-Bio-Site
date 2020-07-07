import projectData from '../../helpers/data/projectData';
import utils from '../../helpers/utils';

const projectBuilder = () => {
  projectData.getProjects()
    .then((projects) => {
      console.warn('get projects worked', projects);
      let domString = `
        <h1>Projects</h1>
        <div class="d-flex flex-wrap">
      `;

      projects.forEach((project) => {
        if (project.available === true) {
          domString += `<div class="card" style="width: 18rem;">
          <div class="card-header">
            TITLE GOES HERE
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">${project.description}</li>
            <li class="list-group-item">${project.technologiesUsed}</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>`;
        }
      });
      utils.printToDom('#projectCards', domString);
    })
    .catch((err) => console.error('get pros broke', err));
};

export default { projectBuilder };
