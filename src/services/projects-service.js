import moment from 'moment';
import {convertTimeIntoString} from '../helpers';

const localHost = 'http://localhost:8080';
const realHost = 'https://nameless-cliffs-27775.herokuapp.com';

const prepareProjectForDisplay = (project) => {
  if (!project.timeEntries) {
    project.timeEntries = [];
  }

  // 0.45000000000000007
  project.totalPay = `${project.totalPay}`.replace(/(.\d{2})(\d+)/, '$1');

  // TODO: handle case where .10 (ends in zero)

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
  const response = await fetch(`${localHost}/projects/${projectId}/add-time-entry`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  });

  const project  = await response.json();

  return prepareProjectForDisplay(project);
};

export const deleteTimeEntry = async (projectId, timeEntryId) => {
  const response = await fetch(`${localHost}/projects/${projectId}/timeEntries/${timeEntryId}`, {
    method: 'DELETE'
  });

  return response.json();
};
