
export const fetchProjects = async () => {
  try {
    const response = await fetch('https://nameless-cliffs-27775.herokuapp.com/projects');
    const projects = await response.json();

    return projects;
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

    const response = await fetch('https://nameless-cliffs-27775.herokuapp.com/add-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      return response.json();
};

export const deleteProject = async (id) => {
  await fetch(`https://nameless-cliffs-27775.herokuapp.com/projects/${id}`, {
    method: 'DELETE'
  });
};
