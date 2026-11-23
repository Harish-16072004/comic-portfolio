export type RoleId = 'ALL' | 'AI' | 'DA' | 'DS';

export type ProjectVisualType = 'documind' | 'phone-agent' | 'symposium' | 'supersumo';

export interface RoleMeta {
    id: RoleId;
    label: string;
    shortLabel: string;
    badgeClass: string;
    panelHeaderClass: string;
    tagline: string;
    sfx: string;
}

export interface SkillGroup {
    title: string;
    code: string;
    roleAlignment: string;
    accentBg: string;
    items: string[];
}

export interface ProjectItem {
    id: string;
    issueNumber: string;
    dateTag: string;
    title: string;
    roles: Exclude<RoleId, 'ALL'>[];
    featured?: boolean;
    visualType: ProjectVisualType;
    impactBadge: string;
    hook: string;
    problem: string;
    build: string[];
    impact: string;
    techStack: string[];
    githubUrl: string;
    demoUrl?: string;
}

export const PROFILE = {
    name: 'HARISH J',
    superTitle: 'THE FULL-STACK AI & DATA CHRONICLES',
    issueTag: 'VOL. 1 • ISSUE #01 • CHENNAI, INDIA',
    priceTag: 'OPEN TO HIRE',
    speechBubble:
        'Welcome to Issue #01! Toggle a Role Lens, click any Skill gadget to highlight matching builds, or crack open any comic panel to inspect the architecture.',
    resumeUrl: '/resume.html',
    email: 'harishjaysankar001@gmail.com',
    githubUrl: 'https://github.com/Harish-16072004',
    linkedinUrl: 'https://www.linkedin.com/in/harish-j-57a94b31a',
    heroStats: [
        { label: 'HACKATHON RANK', value: 'TOP 170 / 60K' },
        { label: 'LIVE USERS', value: '100+ LIVE' },
        { label: 'EVAL SUITE', value: '42+ TESTS' },
    ],
};

export const ROLES: Record<RoleId, RoleMeta> = {
    ALL: {
        id: 'ALL',
        label: 'All Roles',
        shortLabel: 'ALL ISSUES',
        badgeClass: 'bg-[#FFE14D] text-[#111111]',
        panelHeaderClass: 'bg-halftone-yellow text-[#111111]',
        tagline:
            'Software Engineer building LLM-powered applications, Python backends, SQL/data pipelines, and ML workflows.',
        sfx: 'ZAP! ALL ACCESS',
    },
    AI: {
        id: 'AI',
        label: 'AI Software Engineer',
        shortLabel: 'AI ENG',
        badgeClass: 'bg-[#FF3B30] text-white',
        panelHeaderClass: 'bg-halftone-red text-white',
        tagline:
            'Building RAG assistants, LangGraph agent workflows, Gemini-powered apps, FastAPI backends, and Docker/AWS services.',
        sfx: 'POW! AI SYSTEMS',
    },
    DA: {
        id: 'DA',
        label: 'Data Analyst',
        shortLabel: 'DATA ANALYST',
        badgeClass: 'bg-[#2EC4B6] text-[#111111]',
        panelHeaderClass: 'bg-halftone-cyan text-[#111111]',
        tagline:
            'Optimizing SQL queries, structuring relational schemas and data pipelines, and validating data accuracy.',
        sfx: 'SCAN! INSIGHTS',
    },
    DS: {
        id: 'DS',
        label: 'Data Scientist',
        shortLabel: 'DATA SCIENTIST',
        badgeClass: 'bg-[#8B5CF6] text-white',
        panelHeaderClass: 'bg-halftone-purple text-white',
        tagline:
            'Master Program in Data Science and AI graduate skilled in Pandas, NumPy, scikit-learn, LightGBM, and model evaluation.',
        sfx: 'BOOM! ML MODELS',
    },
};

export const ORIGIN_STORY = [
    {
        panelNum: '01',
        caption: 'THE ORIGIN',
        sfx: 'WHOOSH!',
        bgClass: 'bg-[#FFFDF7]',
        text: 'B.E. in Mechanical Engineering from ACGCET (2022–2026) paired with a Master Program in Data Science and AI from FITA Academy, Chennai.',
    },
    {
        panelNum: '02',
        caption: 'THE CRAFT',
        sfx: 'CLANG!',
        text: 'Shipping grounded RAG assistants with automated test suites, full-stack web apps, and multimodal mobile agents backed by Python, SQL, Docker, and AWS.',
    },
    {
        panelNum: '03',
        caption: 'THE MISSION',
        sfx: 'LEVEL UP!',
        text: 'Ready for entry-level Software Engineering & Data roles—fresh off reaching the iQOO Hackathon 2026 Grand Finale (top 170 of 60,000 teams) and interning at Super Sumo.',
    },
];

export const SKILL_GROUPS: SkillGroup[] = [
    {
        title: 'AI & Backend Systems',
        code: 'GEAR-01',
        roleAlignment: 'AI Software Engineer',
        accentBg: 'bg-halftone-red text-white',
        items: [
            'Python',
            'FastAPI',
            'LangGraph',
            'Gemini API',
            'RAG Pipelines',
            'SQLAlchemy',
            'Redis',
            'Java',
        ],
    },
    {
        title: 'Data & SQL Systems',
        code: 'GEAR-02',
        roleAlignment: 'Data Analyst',
        accentBg: 'bg-halftone-cyan text-[#111111]',
        items: [
            'SQL',
            'PostgreSQL',
            'SQLite',
            'Embeddings',
            'Semantic Search',
            'Retrieval Hit-Rate Eval',
        ],
    },
    {
        title: 'Modeling & ML',
        code: 'GEAR-03',
        roleAlignment: 'Data Scientist',
        accentBg: 'bg-halftone-purple text-white',
        items: [
            'Pandas',
            'NumPy',
            'scikit-learn',
            'LightGBM',
            'Feature Engineering',
            'Model Evaluation',
        ],
    },
    {
        title: 'Delivery & Mobile',
        code: 'GEAR-04',
        roleAlignment: 'Shared Foundation',
        accentBg: 'bg-halftone-yellow text-[#111111]',
        items: [
            'Docker',
            'AWS',
            'GitHub Actions CI',
            'pytest',
            'Git/GitHub',
            'Kotlin',
            'Whisper',
        ],
    },
];

export const PROJECTS: ProjectItem[] = [
    {
        id: 'documind',
        issueNumber: 'ISSUE #01',
        dateTag: 'OCT 2026',
        title: 'DocuMind: Enterprise Knowledge Assistant',
        roles: ['AI', 'DA'],
        featured: true,
        visualType: 'documind',
        impactBadge: '21 EVAL CASES • 16 PYTEST CI',
        hook: 'Retrieval-augmented assistant over policy documents that returns cited, grounded answers, refuses out-of-scope questions, and queries SQLite via a validated SQL tool.',
        problem:
            'Answering policy and operational data questions reliably requires preventing hallucinations, rejecting out-of-scope prompts, and safely executing structured SQL queries.',
        build: [
            'Built a retrieval-augmented assistant over policy documents with LangGraph and RAG pipelines returning grounded, cited answers while refusing out-of-scope questions.',
            'Equipped the agent with a parameterized SQL tool over SQLite for structured data queries with strict validation on every tool output.',
            'Evaluated output quality with 21 defined test cases and 16 automated pytest tests covering retrieval hit rate, answer correctness, and citation validity in GitHub Actions CI.',
        ],
        impact:
            'Verified across 21 defined test cases and 16 automated pytest tests in CI covering retrieval hit rate, answer correctness, and citation validity.',
        techStack: ['Python', 'RAG Pipelines', 'LangGraph', 'SQL', 'SQLite', 'pytest', 'GitHub Actions CI'],
        githubUrl: 'https://github.com/Harish-16072004/[DOCUMIND_REPO]',
    },
    {
        id: 'phone-agent',
        issueNumber: 'ISSUE #02',
        dateTag: 'OCT 2026',
        title: 'Phone Agent: Multimodal AI Android Agent',
        roles: ['AI'],
        visualType: 'phone-agent',
        impactBadge: 'TOP 170 / 60,000 TEAMS',
        hook: 'Multimodal Android agent turning text and offline Whisper voice drafts into structured UI actions via Gemini API and Accessibility—including automatic call alerts and volume control.',
        problem:
            'Automating on-device actions across apps and voice commands safely requires strict permissions, sensitive-data redaction, and predictable execution loops.',
        build: [
            'Converted text and offline speech-to-text (Whisper) drafts into structured UI actions using the Gemini API, Jetpack Compose, Android Accessibility, and Shizuku.',
            'Implemented approved searches across YouTube and the browser plus automatic user alerts and volume lowering when calls arrive.',
            'Engineered app access controls, encrypted API-key storage, sensitive-field redaction, user confirmations, and clarification prompts for vague requests.',
        ],
        impact:
            'Validated with 26 unit tests and 12 consecutive on-device control cycles; iQOO Hackathon 2026 Grand Finale team (top 170 of 60,000 registered teams).',
        techStack: ['Kotlin', 'Gemini API', 'Whisper', 'Git/GitHub'],
        githubUrl: 'https://github.com/Harish-16072004/antar',
    },
    {
        id: 'shackles-symposium',
        issueNumber: 'ISSUE #03',
        dateTag: 'OCT 2025',
        title: 'Shackles Symposium: Conference Platform',
        roles: ['AI', 'DA'],
        visualType: 'symposium',
        impactBadge: '100+ LIVE PARTICIPANTS',
        hook: 'Full-stack conference management platform built solo with FastAPI, React, and PostgreSQL, deployed on AWS EC2 for live event operations.',
        problem:
            'Managing live event registrations, participant records, and uploaded files requires a reliable backend API, structured relational storage, and cloud hosting.',
        build: [
            'Architected and shipped solo end-to-end with a FastAPI backend, React frontend, and PostgreSQL database.',
            'Implemented full workflows to manage event registrations, participant records, and uploaded files.',
            'Deployed on AWS EC2 to support live event traffic and real-time record tracking.',
        ],
        impact: 'Ran live on AWS EC2 with 100+ participants while maintaining accurate records and registrations.',
        techStack: ['Python', 'FastAPI', 'PostgreSQL', 'SQL', 'AWS'],
        githubUrl: 'https://github.com/Harish-16072004/shackles-py',
        demoUrl: 'https://[LIVE_DEMO_URL]',
    },
    {
        id: 'supersumo-backend',
        issueNumber: 'ISSUE #04',
        dateTag: 'JAN 2026',
        title: 'SQL Optimization & REST APIs (Super Sumo)',
        roles: ['DA', 'AI'],
        visualType: 'supersumo',
        impactBadge: 'PRODUCTION SQL TUNING',
        hook: 'Python Full Stack Developer internship focused on optimizing relational SQL queries, maintaining Python backend components and RESTful APIs, and resolving bottlenecks.',
        problem:
            'Slow relational database queries and backend bugs in active services require targeted SQL tuning, clean REST API maintenance, and disciplined debugging.',
        build: [
            'Optimized relational database queries (SQL) to eliminate performance bottlenecks.',
            'Maintained Python backend components and RESTful APIs.',
            'Debugged issues alongside developers using structured code review feedback.',
        ],
        impact: 'Resolved SQL performance bottlenecks and shipped reliable backend fixes during internship at Super Sumo.',
        techStack: ['Python', 'SQL', 'PostgreSQL', 'SQLAlchemy'],
        githubUrl: 'https://github.com/Harish-16072004',
    },
];

export const HONORS_AND_EDU = [
    {
        badge: 'NATIONAL FINALE',
        accent: 'bg-halftone-red text-white',
        title: 'iQOO Hackathon 2026 Grand Finale',
        subtitle: 'Bengaluru • Oct 2026 (iQOO & Reskilll)',
        detail: 'National-level phone-first AI hackathon; team ranked in the Top 170 out of 60,000 registered teams.',
    },
    {
        badge: 'CERTIFICATION',
        accent: 'bg-halftone-purple text-white',
        title: 'Master Program in Data Science & AI',
        subtitle: 'FITA Academy • Tambaram, Chennai',
        detail: 'Hands-on training across machine learning, statistical evaluation, Python data stacks, and applied AI.',
    },
    {
        badge: 'EDUCATION & LEADERSHIP',
        accent: 'bg-halftone-cyan text-[#111111]',
        title: 'B.E. Mechanical Engineering (CGPA 7.457/10)',
        subtitle: 'ACGCET, Karaikudi • Nov 2022 – Apr 2026',
        detail: 'Accounts Secretary (Mechanical Eng. Assoc.) & Vice President (Freshers Assoc.); HSC 86.2%, SSLC 82.16%.',
    },
];