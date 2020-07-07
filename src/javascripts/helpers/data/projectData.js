import axios from 'axios';

const getProjects = () => axios.get('../../../db/projects.json');

export default { getProjects };
