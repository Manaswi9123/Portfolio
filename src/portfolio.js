/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Manaswi AIML",
  description:
    "Computer Science Engineering graduate specializing in AI/ML, with hands-on experience developing predictive models, deep learning architectures, and real-time optimization systems.",
  og: {
    title: "M.V.N.S Manaswi Portfolio",
    type: "website",
    url: "http://manaswimulukutla.com/",
  },
};

//Home Page
const greeting = {
  title: "M.V.N.S Manaswi",
  logo_name: "M.V.N.S Manaswi",
  // nickname: "layman_brother",
  subTitle:
    "Passionate AI/ML specialist with hands-on experience engineering predictive models, deep learning architectures, and real-time optimization systems.",
  resumeLink:
    "https://1drv.ms/b/c/b510a3e471b257dd/IQB_KE-VEJLgSbEDneMX6TL0AQ1Xe3ngQhScrjQT2UqhpkU?e=CLCRCB",
  // portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Manaswi9123",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Manaswi9123",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/m-v-n-s-manaswi-63b332251/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:manaswimulukutla9123@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/manaswi.mulukutla.7/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/manaswimulukutla/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Artificial Intelligence & Deep Learning",
      fileName: "AiDeepLearningImg",
      skills: [
        "⚡ Proficient in designing predictive models, Convolutional Neural Networks (CNNs), and deep learning architectures using Python, TensorFlow, and Keras.",
        "⚡ Experienced in training neural networks for image classification, including preprocessing, dataset augmentation, and feature extraction.",
        "⚡ Adept at optimizing model performance through systematic hyperparameter tuning and comprehensive evaluation techniques."
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        // {
        //   skillName: "PyTorch",
        //   fontAwesomeClassname: "logos-pytorch",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
          style: {
            backgroundColor: "#FFFFFF",
            borderRadius: "5px",
            padding: "2px",
          },
        },
      ],
    },
    {
      title: "Natural Language Processing & AI Web Apps",
      fileName: "FullStackImg",
      skills: [
        "⚡ Experienced in building complete data-driven applications, including NLP-based classifiers and intelligent recommendation engines.",
        "⚡ Engineering comprehensive text preprocessing pipelines utilizing tokenization, stemming, and TF-IDF vectorization.",
        "⚡ Deploying machine learning models using Streamlit to create intuitive, live-evaluating web interfaces.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#FF4B4B",
          },
        },
        // {
        //   skillName: "ReactJS",
        //   fontAwesomeClassname: "simple-icons:react",
        //   style: {
        //     color: "#61DAFB",
        //   },
        // },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
        //   style: {
        //     color: "#339933",
        //   },
        // },
        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },
        // {
        //   skillName: "Yarn",
        //   fontAwesomeClassname: "simple-icons:yarn",
        //   style: {
        //     color: "#2C8EBB",
        //   },
        // },
        // {
        //   skillName: "Gatsby",
        //   fontAwesomeClassname: "simple-icons:gatsby",
        //   style: {
        //     color: "#663399",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
      ],
    },
    {
      title: "Data Engineering & Analytics",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Skilled in data preprocessing, feature engineering, and handling missing data across large tabular datasets.",
        "⚡ Designing data-driven analytics dashboards using Power BI and Matplotlib for clear insights.",
      ],
      softwareSkills: [
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F2C811",
          },
        },
        {
          skillName: "Git/GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#FFFFFF",
          },
        },
        // {
        //   skillName: "Azure",
        //   fontAwesomeClassname: "simple-icons:microsoftazure",
        //   style: {
        //     color: "#0089D6",
        //   },
        // },
        // {
        //   skillName: "Firebase",
        //   fontAwesomeClassname: "simple-icons:firebase",
        //   style: {
        //     color: "#FFCA28",
        //   },
        // },
        // {
        //   skillName: "PostgreSQL",
        //   fontAwesomeClassname: "simple-icons:postgresql",
        //   style: {
        //     color: "#336791",
        //   },
        // },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "Kubernetes",
        //   fontAwesomeClassname: "simple-icons:kubernetes",
        //   style: {
        //     color: "#326CE5",
        //   },
        // },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interface for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Inkscape",
    //       fontAwesomeClassname: "simple-icons:inkscape",
    //       style: {
    //         color: "#000000",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Matrusri Engineering College, Saidabad",
      subtitle: "B.E. in Computer Science & Engineering",
      logo_path: "mecs_logo.jpg",
      alt_name: "MECS",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, ML, AI etc.",
        "⚡ Apart from this, I have done courses on Machine Learning, Data Engineering, Aritificial Intelligence and C Programming.",
        "⚡ I participated in Tech Fest Sadhya 2K23 and CodeExcel Hackathon.",
      ],
      website_link: "https://matrusri.edu.in/",
    },
    {
      title: "Nano junior College, Nallakunta",
      subtitle: "Intermediate in MPC",
      logo_path: "nano.jpg",
      alt_name: "Nano",
      duration: "2019 - 2021",
      descriptions: [
        "⚡ Achieved an excellent academic record with a 94% score in the Telangana State Board of Intermediate Education, specializing in Mathematics, Physics, and Chemistry.",
        "⚡ Developed a strong foundational analytical and problem-solving mindset through rigorous training in core sciences and advanced mathematical concepts.",
        "⚡ Cultivated a disciplined academic work ethic and competitive technical foundation, laying the essential groundwork for engineering.",
      ],
      website_link: "https://nanoeducation.co.in/",
    },
    {
      title: "D.A.V Public School, Safilguda",
      subtitle: "10th Class",
      logo_path: "dav.png",
      alt_name: "DAV",
      duration: "2018 - 2019",
      descriptions: [
        "⚡ Successfully completed Secondary School education at D.A.V. Public School, achieving a strong academic record of 87%.",
        "⚡ Built a comprehensive fundamental background in science, mathematics, and analytical thinking during the formative schooling years.",
        "⚡ Actively participated in foundational co-curricular activities, developing early communication skills and a strong collaborative team mindset.",
      ],
      website_link: "https://davsafilguda.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning Master",
      subtitle: "- Altair Inc",
      logo_path: "altair.png",
      certificate_link:
        "https://openbadgefactory.com/v1/assertion/67d90756031d0464eb4647f54002f7cd0a143935",
      alt_name: "Altair",
      color_code: "#8C151599",
    },
    {
      title: "AI Foundations Associate",
      subtitle: "- Oracle",
      logo_path: "oracle.png",
      certificate_link:
        "https://1drv.ms/b/c/b510a3e471b257dd/IQDLRGGoYOzxSrODfQvSW009AYII-xntRBshFoTbfUtUjVU?e=cGgDn9",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Engineering Master",
      subtitle: "- Altair Inc",
      logo_path: "altair.png",
      certificate_link:
        "https://openbadgefactory.com/v1/assertion/826d9a07723d08dc369d38e7e88297b8796b1858",
      alt_name: "Altair",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Essentials",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://1drv.ms/b/c/b510a3e471b257dd/IQDdV7Jx5KMQIIC1kQUAAAAAAa0C4Eeyfk76Ot3R1dxledE?e=gSUL1t",
      alt_name: "Cisco",
      color_code: "#1F70C199",
    },
    {
      title: "Introduction to Programming in C",
      subtitle: "- NPTEL",
      logo_path: "nptel.png",
      certificate_link:
        "https://1drv.ms/i/c/b510a3e471b257dd/IQDdV7Jx5KMQIIC1dQUAAAAAAbrvdgR12ewUYHUj9JYaMDM?e=etmiX8",
      alt_name: "Nptel",
      color_code: "#D83B0199",
    },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Summer Internship",
  description:
    "I have done Research and Development internship at RCI, DRDO, designing an object detection and dynamic tracking system. Successfully integrated multi-source radar datasets and applied signal processing techniques to optimize detection accuracy",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Research & Development Intern",
          company: "RCI,DRDO",
          company_url: "https://www.indiascienceandtechnology.gov.in/organisations/ministry-and-departments/defence-research-and-development-organisation-drdo-govt-india/research-centre-imarat-rci",
          logo_path: "rci.jpg",
          duration: "May 2024 - Jun 2024",
          location: "Hyderabad, Telangana",
          description:
            "Developing a robust solution to detect and track objects dynamically by leveraging radar data merging and fusion techniques.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects leverage a diverse toolkit of advanced machine learning and deep learning frameworks. My primary expertise lies in architecting end-to-end Data Science systems and seamlessly deploying them into live web applications using interactive frameworks and data pipelines.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "manas.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Hyderabad",
    locality: "East chandragiri colony",
    country: "India",
    region: "Hyderabad",
    postalCode: "500056",
    streetAddress: "Street no 9",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/Kr4cQu2emSM2CtSp7",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
