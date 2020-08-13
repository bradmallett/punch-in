
export const fetchProjects = async () => {
  let projects;

  try {
    const response = await fetch('https://nameless-cliffs-27775.herokuapp.com/projects');
    projects = await response.json();
  } catch (err) {
    if (err.message.includes('Unexpected end of JSON input')) {
      return [];
    }
  }

    return projects;
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
    // payload example: 
    // {
    //   "title": "Mcdonalds",
    //   "color": "blue",
    //   "payRate": 50.00 // amount of dolars per hour? 
    //   "punchIns": 0,
    //   "totalTime": 0,
    //   "totalPay": 0.00,
    //   "notes": ""
    // }
};
