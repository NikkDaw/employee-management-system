const employees = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "employee1@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Prepare sales report",
        description: "Create monthly sales performance report",
        task: "Analyze sales data and prepare report",
        date: "2026-02-01",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Client follow-up",
        description: "Follow up with pending clients",
        task: "Call and email clients",
        date: "2026-01-25",
        category: "Communication",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Client onboarding",
        description: "Onboard new enterprise client",
        task: "Send welcome kit and setup call",
        date: "2026-01-28",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Team meeting",
        description: "Attend weekly team sync",
        task: "Join Zoom meeting",
        date: "2026-01-20",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    name: "Vihaan Patel",
    email: "employee2@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Bug fixing",
        description: "Fix reported UI bugs",
        task: "Resolve issues from Jira",
        date: "2026-02-02",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Write tests",
        description: "Add unit tests for auth module",
        task: "Write Jest tests",
        date: "2026-01-22",
        category: "Testing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Code review",
        description: "Review teammate's PR",
        task: "Review pull request",
        date: "2026-01-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "API integration",
        description: "Integrate payment gateway API",
        task: "Connect Stripe API",
        date: "2026-01-15",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 3,
    name: "Ananya Reddy",
    email: "employee3@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design homepage",
        description: "Create homepage UI",
        task: "Design layout in Figma",
        date: "2026-02-03",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Create logo variants",
        description: "Design 3 logo color variants",
        task: "Use brand guidelines",
        date: "2026-02-01",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Update icons",
        description: "Replace old icons",
        task: "Update icon set",
        date: "2026-01-26",
        category: "Design",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Design review",
        description: "Present designs to team",
        task: "Review session",
        date: "2026-01-18",
        category: "Meeting",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    name: "Rohan Mehta",
    email: "employee4@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database backup",
        description: "Backup production DB",
        task: "Run backup scripts",
        date: "2026-02-04",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Setup staging server",
        description: "Configure new staging environment",
        task: "Install and configure server",
        date: "2026-02-02",
        category: "IT",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Server monitoring",
        description: "Check server health",
        task: "Monitor CPU and memory",
        date: "2026-01-29",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security patch",
        description: "Apply security updates",
        task: "Install patches",
        date: "2026-01-21",
        category: "Security",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    name: "Ishita Verma",
    email: "employee5@example.com",
    password: "123",
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Content writing",
        description: "Write blog post",
        task: "Draft marketing blog",
        date: "2026-02-05",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Social media plan",
        description: "Plan Q1 social media posts",
        task: "Create content calendar",
        date: "2026-02-03",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "SEO optimization",
        description: "Improve page SEO",
        task: "Update keywords",
        date: "2026-01-30",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Campaign analysis",
        description: "Analyze ad campaign",
        task: "Review analytics",
        date: "2026-01-19",
        category: "Analytics",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));
  return { employees, admin };
};