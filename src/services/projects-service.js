import moment from 'moment';
import {convertTimeIntoString} from '../helpers';

const localHost = 'http://localhost:8080';
const realHost = 'https://nameless-cliffs-27775.herokuapp.com';

const prepareProjectForDisplay = (project) => {
  if (!project.timeEntries) {
    project.timeEntries = [];
    // project.totalTime = moment.utc(0 * 1000).format("HH:mm:ss");

    return project;
  }

  // const formattedTime = convertTimeIntoString(project.totalTime);

  // project.totalTime = formattedTime;

  return project;
};

const sanitizeProjects = (projects) =>
  projects.map(prepareProjectForDisplay);

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${localHost}/projects`);
    const projects = await response.json();

    return sanitizeProjects(projects);
  } catch (err) {
    return [];
  }
};

export const addProject = async (title, payRate, color) => {
    const payload = {
        title,
        color,
        payRate,
        punchIns: 0,
        totalTime: 0,
        totalPay: 0.00,
        notes: ""
    };

    const response = await fetch(`${localHost}/add-project`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const project = await response.json();

      return prepareProjectForDisplay(project);
};

export const deleteProject = async (id) => {
  await fetch(`${localHost}/projects/${id}`, {
    method: 'DELETE'
  });
};

export const addTimeEntryForProject = async (projectId, timeEntry) => {
  console.log({paylad: timeEntry});
  const response = await fetch(`${localHost}/projects/${projectId}/add-time-entry`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  });

  const project = await response.json();

  // TODO: This is coming back with string formatted totalTime for some reason

  return project;
};
