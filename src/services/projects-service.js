
export const fetchProjects = async () => {
    const projects = await fetch('https://nameless-cliffs-27775.herokuapp.com/projects');

    return projects.json();
    // return [{
    //     id: 'afd7e596-18df-418b-8c30-24c958f22381',
    //     title: `Redesign the Hub's homepage`,
    //     payRate: 50,
    //     color: '#f00000',
    //     punchIns: 0,
    //     totalTime: '03:00:00',
    //     totalPay: 150.00,
    //     notes: ``,
    //     timeEntries: [
    //         { id: '26862dbb-186b-464d-9aad-bf4592537c96',
    //           date: 'Jun/1/2020',
    //           timeStart: '8:35am',
    //           timeEnd: '9:35am',
    //           timeEntryTotal: '01:00:00',
    //           timeEntryPay: 50
    //         },
    //         { id: '65167017-EEC6-41C5-9E28-8C11D7DB4785',
    //         date: 'Jan/2/2020',
    //         timeStart: '9:35am',
    //         timeEnd: '11:35am',
    //         timeEntryTotal: '02:00:00',
    //         timeEntryPay: 100
    //         }
    //       ]
    //   },
      
    //   {
    //     id: 'CC16B7A0-3B1B-47C3-9749-00F4A9F12EF0',
    //     title: `Feed Venus`,
    //     payRate: 50,
    //     color: '#000',
    //     punchIns: 0,
    //     totalTime: '03:00:00',
    //     totalPay: 150.00,
    //     notes: '',
    //     timeEntries: [
    //         { id: 'A9E9E1B2-0DEE-448A-BAA5-087B37AEFA3E',
    //           date: 'Feb/12/2021',
    //           timeStart: '8:35am',
    //           timeEnd: '9:35am',
    //           timeEntryTotal: '01:00:00',
    //           timeEntryPay: 50
    //         },
    //         { id: '55ED74EA-9940-451E-BAF0-8631DEC44651',
    //         date: 'Feb/22/2021',
    //         timeStart: '9:35am',
    //         timeEnd: '11:35am',
    //         timeEntryTotal: '02:00:00',
    //         timeEntryPay: 100
    //         }
    //     ]
    //   }];
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
