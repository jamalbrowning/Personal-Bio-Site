import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getProjects = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/project.json`)
    .then((response) => {
      const projectObjects = response.data;
      const projects = [];
      Object.keys(projectObjects).forEach((projectId) => {
        projectObjects[projectId].id = projectId;
        projects.push(projectObjects[projectId]);
      });
      resolve(projects);
    })
    .catch((err) => reject(err));
});

export default { getProjects };
