import utils from '../helpers/utils';

const projectBuilder = () => {
  const domString = '<h1>I think its working</h1>';
  utils.printToDom('#projectCards', domString);
};

export default { projectBuilder };
