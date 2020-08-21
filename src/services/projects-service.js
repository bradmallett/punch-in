const localHost = 'http://localhost:8080';
const realHost = 'https://nameless-cliffs-27775.herokuapp.com';

const sanitizeProjects = (projects) =>
  projects.map((project) => {
    if (!project.timeEntries) {
      project.timeEntries = [];

      return project;
    }

    return project;
  });

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

      return response.json();
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

  return response.json();
};
