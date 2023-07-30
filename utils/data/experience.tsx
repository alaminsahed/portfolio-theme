export const projectTagVariant = {
  dark: "bg-gray-100 text-gray-800 p-10 font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500",
  default:
    "bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400",
  red: "bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400",
  green:
    "bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400",
  yellow:
    "bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400",
  purple:
    "bg-purple-100 text-purple-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400",
  indigo:
    "bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400",
  pink: "bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400",
};

export const totalExperience = [
  {
    title: "Associate Software Engineer",
    company: "SVAM International Inc.",
    company_url: "https://www.svam.com/",
    duration: "July 2022 - Present",
    stacks: "React.js, Bootstrap, Tailwind CSS, Angular",
    area: "Frontend",
    companyDescription:
      "SVAM International Inc. is a global Information Technology (IT) services provider that delivers value and competitive advantage to its customers by improving their access to critical information, automating their business processes, and helping their personnel collaborate effectively.",
    darkBgColor: "dark:bg-gray-900",
    darkTextColor: "dark:text-gray-300",
    animationDelay: 500,
    projects: [
      {
        name: "Big Think Capital",
        live_url: "https://apply.bigthinkcapital.com/",
        description:
          "Big Think Capital is a financial technology company that provides a platform for small businesses to access capital. The company offers a wide range of financial products and services to small businesses, including short-term loans, lines of credit, and equipment financing.",
        responsibilities: [
          "Developed and maintained the frontend of a project that managed over 3k merchants and lenders on a daily basis using React.js.",
          "Creating new features and building reusable components using React.js, enhancing the functionality and interactivity of web applications.",
          "Utilizing REST APIs and integrating various third-party APIs to incorporate external services and enrich the application's capabilities.",
          "Demonstrating a deep understanding of business flows and implementing business logic on the frontend, ensuring a seamless and intuitive user experience.",
          "Collaborating closely with backend developers to discuss API structures and data flow, fostering effective communication and alignment between frontend and backend systems.",
          "Resolving bugs and issues, actively improving approximately 30-35% of the user experience through continuous enhancements and optimizations",
          "Working collaboratively with both local and international team members to achieve project deadlines and goals, leveraging our collective strengths and expertise.",
        ],
        stacks: [
          {
            name: "React.js",
            style: projectTagVariant.default,
          },
          {
            name: "Bootstrap",
            style: projectTagVariant.dark,
          },
          {
            name: "TypeScript",
            style: projectTagVariant.yellow,
          },
        ],
        bgColor: "bg-gray-300",
        darkBgColor: "dark:bg-gray-800",
        animationDuration: 2000,
        animationDelay: 600,
      },
    ],
  },
];
