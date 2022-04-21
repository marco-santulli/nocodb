import Noco from '../../../../Noco';
import Model from '../../../../../noco-models/Model';
import Project from '../../../../../noco-models/Project';
import paths from './templates/paths';

export default async function getPaths(
  project: Project,
  model: Model,
  _ncMeta = Noco.ncMeta
) {
  return paths({
    tableName: model.title,
    type: model.type,
    orgs: 'noco',
    projectName: project.title
  });
}