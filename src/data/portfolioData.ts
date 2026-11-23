export type RoleId = 'ALL' | 'AI' | 'DA' | 'DS';

export interface RoleMeta {
    id: RoleId;
    label: string;
    shortLabel: string;
    badgeClass: string;
    tagline: string;
    sfx: string;
}

export interface SkillGroup {
    title: string;
    roleAlignment: string;
    accentBg: string;
    items: string[];
}

export interface ProjectItem {
    id: string;
    issueNumber: string;
    title: string;
    roles: Exclude<RoleId, 'ALL'>[];
    featured?: boolean;
    thumbnailLabel: string;
    hook: string;
    problem: string;
    build: string[];
    impact: string;
    techStack: string[];
    githubUrl: string;
    demoUrl?: string;
}

export const PROFILE = {
    name: 'HARISH J', //[cite: 1]
    issueTag: 'ISSUE #01 • CHENNAI, INDIA', //[cite: 1]
    speechBubble:
        'Click a Role Lens to filter, click any Skill pill to spotlight matching projects, or click a Panel to open the build!',
    avatarPlaceholder: '[AVATAR / COMIC PORTRAIT]',
    resumeUrl: '#[RESUME_PDF_URL]',
    email: 'harishjaysankar001@gmail.com', //[cite: 1]
    phone: '+91 7305432775', //[cite: 1]
    githubUrl: 'https://github.com/Harish-16072004', //[cite: 1]
    linkedinUrl: 'https://linkedin.com/in/[YOUR_LINKEDIN_HANDLE]',
};

export const ROLES: Record<RoleId, RoleMeta> = {
    ALL: {
        id: 'ALL',
        label: 'All Roles',
        shortLabel: 'ALL',
        badgeClass: 'bg-[#FFE14D] text-[#111111]',
        tagline:
            'Software Engineer building LLM-powered applications, Python backends, SQL/data pipelines, and ML workflows.', //[cite: 1]
        sfx: 'ZAP! ALL ACCESS',
    },
    AI: {
        id: 'AI',
        label: 'AI Software Engineer',
        shortLabel: 'AI ENG',
        badgeClass: 'bg-[#FF6B6B] text-white',
        tagline:
            'Building RAG assistants, LangGraph agent workflows, Gemini-powered apps, FastAPI backends, and Docker/AWS services.', //[cite: 1]
        sfx: 'POW! AI SYSTEMS',
    },
    DA: {
        id: 'DA',
        label: 'Data Analyst',
        shortLabel: 'DATA ANALYST',
        badgeClass: 'bg-[#4ECDC4] text-[#111111]',
        tagline:
            'Optimizing SQL queries, working with relational schemas and data pipelines, and validating data accuracy.', //[cite: 1]
        sfx: 'SCAN! INSIGHTS',
    },
    DS: {
        id: 'DS',
        label: 'Data Scientist',
        shortLabel: 'DATA SCIENTIST',
        badgeClass: 'bg-[#A78BFA] text-white',
        tagline:
            'Master Program in Data Science and AI graduate experienced with Pandas, NumPy, scikit-learn, LightGBM, and model evaluation.', //[cite: 1]
        sfx: 'BOOM! PREDICTIONS',
    },
};

export const ORIGIN_STORY = [
    {
        panelNum: '01',
        caption: 'THE ORIGIN',
        sfx: 'WHOOSH',
        text: 'B.E. in Mechanical Engineering from ACGCET (2022–2026) paired with a Master Program in Data Science and AI from FITA Academy, Chennai.', //[cite: 1]
    },
    {
        panelNum: '02',
        caption: 'WHAT I BUILD',
        sfx: 'CLANG',
        text: 'LLM-powered tools with grounded citations and test suites, full-stack web apps, and multimodal mobile agents backed by Python, SQL, Docker, and AWS.', //[cite: 1]
    },
    {
        panelNum: '03',
        caption: 'CURRENT MISSION',
        sfx: 'LEVEL UP',
        text: 'Entry-level software engineering and data roles—fresh off reaching the iQOO Hackathon 2026 Grand Finale (top 170 of 60,000 teams) and interning at Super Sumo.', //[cite: 1]
    },
];

export const SKILL_GROUPS: SkillGroup[] = [
    {
        title: 'AI & Backend Systems',
        roleAlignment: 'AI Software Engineer',
        accentBg: 'bg-[#FF6B6B] text-white',
        items: [
            'Python',
            'FastAPI',
            'LangGraph',
            'Gemini API',
            'RAG Pipelines',
            'SQLAlchemy',
            'Redis',
            'Java',
        ], //[cite: 1]
    },
    {
        title: 'Data & SQL Systems',
        roleAlignment: 'Data Analyst',
        accentBg: 'bg-[#4ECDC4] text-[#111111]',
        items: [
            'SQL',
            'PostgreSQL',
            'SQLite',
            'Embeddings',
            'Semantic Search',
            'Retrieval Hit-Rate Eval',
        ], //[cite: 1]
    },
    {
        title: 'Modeling & ML',
        roleAlignment: 'Data Scientist',
        accentBg: 'bg-[#A78BFA] text-white',
        items: [
            'Pandas',
            'NumPy',
            'scikit-learn',
            'LightGBM',
            'Feature Engineering',
            'Model Evaluation',
        ], //[cite: 1]
    },
    {
        title: 'Delivery & Mobile',
        roleAlignment: 'Shared Foundation',
        accentBg: 'bg-[#FFE14D] text-[#111111]',
        items: [
            'Docker',
            'AWS',
            'GitHub Actions CI',
            'pytest',
            'Git/GitHub',
            'Kotlin',
            'Whisper',
        ], //[cite: 1]
    },
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'documind',
        issueNumber: 'ISSUE #01 • OCT 2026', //[cite: 1]
        title: 'DocuMind: Enterprise Knowledge Assistant', //[cite: 1]
        roles: ['AI', 'DA'],
        featured: true,
        thumbnailLabel: '[DOCUMIND RAG + SQLITE AGENT ARCHITECTURE DIAGRAM]',
        hook: 'Retrieval-augmented assistant over policy documents that returns cited, grounded answers, refuses out-of-scope questions, and queries SQLite via a validated SQL tool.', //[cite: 1]
        problem:
            'Answering policy and data questions reliably requires preventing unsupported claims, rejecting out-of-scope prompts, and safely executing structured data queries.', //[cite: 1]
        build: [
            'Built a retrieval-augmented assistant over policy documents with LangGraph and RAG pipelines returning grounded, cited answers while refusing out-of-scope questions.', //[cite: 1]
            'Added a parameterized SQL tool over SQLite for data queries with validation on every tool output.', //[cite: 1]
            'Created 21 evaluation test cases and 16 automated pytest tests covering retrieval hit rate, answer correctness, and citation validity with GitHub Actions CI.', //[cite: 1]
        ],
        impact:
            'Verified across 21 defined test cases and 16 automated pytest tests in CI covering retrieval hit rate, answer correctness, and citation validity.', //[cite: 1]
        techStack: ['Python', 'RAG Pipelines', 'LangGraph', 'SQL', 'SQLite', 'pytest', 'GitHub Actions CI'], //[cite: 1]
        githubUrl: 'https://github.com/Harish-16072004/[DOCUMIND_REPO]',
    },
    {
        id: 'phone-agent',
        issueNumber: 'ISSUE #02 • OCT 2026', //[cite: 1]
        title: 'Phone Agent: Multimodal AI Android Automation Agent', //[cite: 1]
        roles: ['AI'],
        thumbnailLabel: '[ANDROID AGENT WORKFLOW & SAFETY CONTROLS PREVIEW]',
        hook: 'Multimodal Android agent turning text and offline Whisper voice drafts into structured UI actions via Gemini API and Accessibility—including automatic call volume lowering and alerts.', //[cite: 1]
        problem:
            'Automating on-device actions across apps and voice commands safely requires strict permissions, sensitive-data protection, and predictable execution.', //[cite: 1]
        build: [
            'Converted text and offline speech-to-text (Whisper) drafts into structured UI actions using the Gemini API, Jetpack Compose, Android Accessibility, and Shizuku.', //[cite: 1]
            'Implemented approved searches across YouTube and the browser plus automatic call alerts and volume lowering when calls arrive.', //[cite: 1]
            'Built app access controls, encrypted API-key storage, sensitive-field redaction, user confirmations, and clarification prompts for vague requests.', //[cite: 1]
        ],
        impact:
            'Validated with 26 unit tests and 12 consecutive on-device control cycles; iQOO Hackathon 2026 Grand Finale team (top 170 of 60,000 registered teams).', //[cite: 1]
        techStack: ['Kotlin', 'Gemini API', 'Whisper', 'Git/GitHub'], //[cite: 1]
        githubUrl: 'https://github.com/Harish-16072004/[PHONE_AGENT_REPO]',
    },
    {
        id: 'shackles-symposium',
        issueNumber: 'ISSUE #03 • OCT 2025', //[cite: 1]
        title: 'Shackles Symposium: Conference Management Platform', //[cite: 1]
        roles: ['AI', 'DA'],
        thumbnailLabel: '[SYMPOSIUM PORTAL & REGISTRATION FLOW SCREENSHOT]',
        hook: 'Full-stack conference management platform built solo with FastAPI, React, and PostgreSQL, deployed on AWS EC2 for live event operations.', //[cite: 1]
        problem:
            'Managing event registrations, participant records, and uploaded files live requires a dependable backend, structured relational storage, and cloud hosting.', //[cite: 1]
        build: [
            'Built solo end-to-end with a FastAPI backend, React frontend, and PostgreSQL database.', //[cite: 1]
            'Implemented workflows to manage registrations, participant records, and uploaded files.', //[cite: 1]
            'Deployed the application on AWS EC2 to support live event usage.', //[cite: 1]
        ],
        impact: 'Ran live on AWS EC2 with 100+ participants while tracking registrations and records.', //[cite: 1]
        techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'AWS'], //[cite: 1]
        githubUrl: 'https://github.com/Harish-16072004/[SHACKLES_REPO]',
        demoUrl: 'https://[LIVE_DEMO_URL]',
    },
    {
        id: 'supersumo-backend',
        issueNumber: 'ISSUE #04 • JAN 2026', //[cite: 1]
        title: 'Backend APIs & SQL Query Optimization (Super Sumo)', //[cite: 1]
        roles: ['DA', 'AI'],
        thumbnailLabel: '[SQL OPTIMIZATION & REST API WORKFLOW]',
        hook: 'Python Full Stack Developer internship focused on optimizing SQL queries, maintaining Python backend components and RESTful APIs, and resolving bugs via code review.', //[cite: 1]
        problem:
            'Slow relational queries and backend issues in active services require targeted SQL tuning, clean REST API maintenance, and collaborative debugging.', //[cite: 1]
        build: [
            'Optimized relational database queries (SQL) to eliminate performance bottlenecks.', //[cite: 1]
            'Maintained Python backend components and RESTful APIs.', //[cite: 1]
            'Debugged issues alongside developers using code review feedback.', //[cite: 1]
        ],
        impact: 'Resolved SQL performance bottlenecks and shipped backend fixes during internship at Super Sumo.', //[cite: 1]
        techStack: ['Python', 'SQL', 'PostgreSQL', 'SQLAlchemy'], //[cite: 1]
        githubUrl: 'https://github.com/Harish-16072004', //[cite: 1]
    },
];