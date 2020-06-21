use bugtracker;
db.dropDatabase();

db.bugs.insertMany([
    {
        name: "button not working",
        description:"Button doesn't click",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Martin",
        label:"Front End",
        priorityStatus:"Urgent"
    },

    {
        name: "Web form not working ",
        description:"Wont submit",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Dave",
        label:"Front End",
        priorityStatus:"Urgent"
    },

    {
        name: "Web form not working ",
        description:"Wont submit",
        dateCreated:"04062020",
        timeCreated:"2024",
        ticketStatus:"Fixed",
        assignedTo:"Dave",
        label:"Front End",
        priorityStatus:"Urgent"
    }
]);

db.users.insertMany([

    {
        name: "Martin Sparks",
        positionHeld:"Software Developer",
        email:"Martin.sparks@CodeClan.com",
    },

    {
        name: "Dave Campbell",
        positionHeld:"Software Developer",
        email:"dave.campbell@CodeClan.com",
    },

    {
        name: "Not assigned",
        positionHeld:"None",
        email:"notassigned@CodeClan.com",
    }

])

    db.projects.insertMany([
        {
        project_name: "CodeClan bugs",
        leadUser: "Martin Sparks",
        associatedTickets: [],
            
        },

        {
            project_name: "Printing bugs",
            leadUser: "Dave Campbell",
            associatedTickets: [],
                
            }

    ])


