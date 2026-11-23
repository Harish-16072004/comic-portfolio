import { type ProjectVisualType } from '../data/portfolioData';

export function HeroComicEmblem() {
    return (
        <div className="relative flex aspect-square w-full max-w-[290px] items-center justify-center border-[3.5px] border-[#111111] bg-action-burst p-4 shadow-[7px_7px_0px_0px_#111111]">
            {/* Corner Issue Price Box */}
            <div className="absolute -left-3 -top-3 border-[3px] border-[#111111] bg-white px-2.5 py-1 text-center leading-none shadow-[3px_3px_0px_0px_#111111]">
                <span className="block font-comic-stamp text-[10px] text-[#FF3B30]">EST.</span>
                <span className="font-comic-display text-xl">2026</span>
            </div>

            {/* Illustrated Comic Developer Emblem */}
            <svg viewBox="0 0 240 240" className="h-full w-full drop-shadow-[4px_4px_0px_#111111]">
                {/* Shield Frame */}
                <polygon
                    points="120,14 214,52 196,174 120,226 44,174 26,52"
                    fill="#FFFFFF"
                    stroke="#111111"
                    strokeWidth="6"
                />
                <polygon
                    points="120,28 198,60 183,165 120,210 57,165 42,60"
                    fill="#2EC4B6"
                    stroke="#111111"
                    strokeWidth="4"
                />
                {/* Stylised Visor / Coder Character */}
                <circle cx="120" cy="108" r="46" fill="#FFE14D" stroke="#111111" strokeWidth="5" />
                {/* Hair / Crest */}
                <path
                    d="M74 96 C78 58, 162 58, 166 96 L154 78 L136 86 L120 72 L104 86 L86 78 Z"
                    fill="#111111"
                />
                {/* Hero Glasses / AR Visor */}
                <rect x="82" y="96" width="33" height="20" rx="4" fill="#111111" />
                <rect x="125" y="96" width="33" height="20" rx="4" fill="#111111" />
                <line x1="115" y1="104" x2="125" y2="104" stroke="#111111" strokeWidth="5" />
                <line x1="88" y1="102" x2="102" y2="102" stroke="#FFE14D" strokeWidth="3" />
                <line x1="131" y1="102" x2="145" y2="102" stroke="#FFE14D" strokeWidth="3" />
                {/* Confident Grin */}
                <path
                    d="M104 130 Q120 142 136 130"
                    fill="none"
                    stroke="#111111"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                />
                {/* Bottom Code Ribbon */}
                <rect
                    x="52"
                    y="162"
                    width="136"
                    height="32"
                    rx="4"
                    fill="#FF3B30"
                    stroke="#111111"
                    strokeWidth="4.5"
                />
                <text
                    x="120"
                    y="184"
                    textAnchor="middle"
                    fill="#FFFFFF"
                    fontFamily="Bungee, sans-serif"
                    fontSize="15"
                >
                    &lt;AI • DATA /&gt;
                </text>
            </svg>

            {/* Bottom Right Starburst */}
            <div className="sfx-starburst absolute -bottom-4 -right-4 flex h-16 w-16 rotate-6 items-center justify-center bg-[#FF3B30] text-center font-comic-display text-sm leading-none text-white">
                SHIP
                <br />
                IT!
            </div>
        </div>
    );
}

export function ProjectComicDiagram({ type }: { type: ProjectVisualType }) {
    if (type === 'documind') {
        return (
            <svg viewBox="0 0 560 150" preserveAspectRatio="xMidYMid meet" className="block h-full max-w-full w-full">
                <rect width="560" height="150" fill="#FFFDF7" />
                {/* Node 1: Policy Docs */}
                <rect x="18" y="34" width="118" height="82" rx="6" fill="#FFE14D" stroke="#111111" strokeWidth="3.5" />
                <text x="77" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                    POLICY DOCS
                </text>
                <text x="77" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    Embeddings + RAG
                </text>

                {/* Arrow 1 */}
                <line x1="136" y1="75" x2="188" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="188,68 202,75 188,82" fill="#111111" />

                {/* Node 2: LangGraph Router */}
                <rect x="204" y="24" width="152" height="102" rx="8" fill="#FF3B30" stroke="#111111" strokeWidth="3.5" />
                <text x="280" y="62" textAnchor="middle" fontFamily="Bangers, cursive" fontSize="22" fill="#FFFFFF" letterSpacing="1">
                    LANGGRAPH AGENT
                </text>
                <text x="280" y="84" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFE14D">
                    Scope Guard + SQL Tool
                </text>
                <text x="280" y="106" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFFFFF">
                    SQLite Validated
                </text>

                {/* Arrow 2 */}
                <line x1="356" y1="75" x2="408" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="408,68 422,75 408,82" fill="#111111" />

                {/* Node 3: Cited Output */}
                <rect x="424" y="34" width="118" height="82" rx="6" fill="#2EC4B6" stroke="#111111" strokeWidth="3.5" />
                <text x="483" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                    CITED ANSWER
                </text>
                <text x="483" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    21 Evals • 16 Tests
                </text>
            </svg>
        );
    }

    if (type === 'phone-agent') {
        return (
            <svg viewBox="0 0 560 150" preserveAspectRatio="xMidYMid meet" className="block h-full max-w-full w-full">
                <rect width="560" height="150" fill="#FFFDF7" />
                <rect x="20" y="34" width="124" height="82" rx="6" fill="#2EC4B6" stroke="#111111" strokeWidth="3.5" />
                <text x="82" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                    VOICE + TEXT
                </text>
                <text x="82" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    Offline Whisper
                </text>

                <line x1="144" y1="75" x2="196" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="196,68 210,75 196,82" fill="#111111" />

                <rect x="212" y="24" width="144" height="102" rx="8" fill="#8B5CF6" stroke="#111111" strokeWidth="3.5" />
                <text x="284" y="62" textAnchor="middle" fontFamily="Bangers, cursive" fontSize="22" fill="#FFFFFF" letterSpacing="1">
                    GEMINI PLANNER
                </text>
                <text x="284" y="85" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFE14D">
                    Redaction + Confirm
                </text>
                <text x="284" y="105" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFFFFF">
                    Encrypted Keys
                </text>

                <line x1="356" y1="75" x2="404" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="404,68 418,75 404,82" fill="#111111" />

                <rect x="420" y="34" width="120" height="82" rx="6" fill="#FFE14D" stroke="#111111" strokeWidth="3.5" />
                <text x="480" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                    ANDROID UI
                </text>
                <text x="480" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    Accessibility + Call
                </text>
            </svg>
        );
    }

    if (type === 'symposium') {
        return (
            <svg viewBox="0 0 560 150" preserveAspectRatio="xMidYMid meet" className="block h-full max-w-full w-full">
                <rect width="560" height="150" fill="#FFFDF7" />
                <rect x="22" y="34" width="122" height="82" rx="6" fill="#FFE14D" stroke="#111111" strokeWidth="3.5" />
                <text x="83" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                    REACT CLIENT
                </text>
                <text x="83" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    100+ Participants
                </text>

                <line x1="144" y1="75" x2="196" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="196,68 210,75 196,82" fill="#111111" />

                <rect x="212" y="24" width="144" height="102" rx="8" fill="#2EC4B6" stroke="#111111" strokeWidth="3.5" />
                <text x="284" y="62" textAnchor="middle" fontFamily="Bangers, cursive" fontSize="22" fill="#111111" letterSpacing="1">
                    FASTAPI + EC2
                </text>
                <text x="284" y="86" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    Registrations &amp; Files
                </text>
                <text x="284" y="106" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                    Solo Production Ship
                </text>

                <line x1="356" y1="75" x2="404" y2="75" stroke="#111111" strokeWidth="3.5" />
                <polygon points="404,68 418,75 404,82" fill="#111111" />

                <rect x="420" y="34" width="120" height="82" rx="6" fill="#FF3B30" stroke="#111111" strokeWidth="3.5" />
                <text x="480" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#FFFFFF">
                    POSTGRESQL
                </text>
                <text x="480" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFE14D">
                    Live Records DB
                </text>
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 560 150" preserveAspectRatio="xMidYMid meet" className="block h-full max-w-full w-full">
            <rect width="560" height="150" fill="#FFFDF7" />
            <rect x="22" y="34" width="124" height="82" rx="6" fill="#FF3B30" stroke="#111111" strokeWidth="3.5" />
            <text x="84" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#FFFFFF">
                SLOW QUERIES
            </text>
            <text x="84" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#FFE14D">
                Bottleneck Audit
            </text>

            <line x1="146" y1="75" x2="196" y2="75" stroke="#111111" strokeWidth="3.5" />
            <polygon points="196,68 210,75 196,82" fill="#111111" />

            <rect x="212" y="24" width="144" height="102" rx="8" fill="#FFE14D" stroke="#111111" strokeWidth="3.5" />
            <text x="284" y="62" textAnchor="middle" fontFamily="Bangers, cursive" fontSize="22" fill="#111111" letterSpacing="1">
                SQL + REST TUNING
            </text>
            <text x="284" y="86" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                Python Backend
            </text>
            <text x="284" y="106" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                Code Review Fixes
            </text>

            <line x1="356" y1="75" x2="404" y2="75" stroke="#111111" strokeWidth="3.5" />
            <polygon points="404,68 418,75 404,82" fill="#111111" />

            <rect x="420" y="34" width="120" height="82" rx="6" fill="#2EC4B6" stroke="#111111" strokeWidth="3.5" />
            <text x="480" y="68" textAnchor="middle" fontFamily="Bungee, sans-serif" fontSize="12" fill="#111111">
                FAST APIS
            </text>
            <text x="480" y="90" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fontWeight="800" fill="#111111">
                Super Sumo Prod
            </text>
        </svg>
    );
}