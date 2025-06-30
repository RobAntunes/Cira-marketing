import React, { useState } from "react";
import { FileUpload } from "../FileUpload";
import {
    Eye,
    Star,
    Handshake,
    Rocket,
    CheckCircle,
    ArrowsCounterClockwise,
    PencilSimple,
    Link,
    ClipboardText,
    Coffee,
    Envelope,
    FloppyDisk
} from "phosphor-react";

const sectionTitle = (icon: React.ReactNode, title: string) => (
    <div className="flex items-center gap-2 mb-2 mt-6">
        <span className="text-xl">{icon}</span>
        <h2 className="text-3xl font-semibold text-[#2A2A2A] flex flex-wrap">{title}</h2>
    </div>
);

const navIcons = {
    create: (
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeLinecap="round" />
        </svg>
    ),
    search: (
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
    ),
    profile: (
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
        </svg>
    ),
    message: (
        <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
};

const NAV_ITEMS = [
    { key: "create", label: "Create", icon: navIcons.create },
    { key: "search", label: "Discover", icon: navIcons.search },
    { key: "profile", label: "Profile", icon: navIcons.profile },
    { key: "message", label: "Messages", icon: navIcons.message },
];

type NavKey = "create" | "search" | "profile" | "message";

// Add types for founder and skill verification

type SkillVerification = "verified" | "peer" | "self";
type Founder = {
    id: number;
    name: string;
    photo: string;
    verified: boolean;
    status: string;
    skills: { name: string; verification: SkillVerification }[];
    project: string;
    quote: string;
    location: string;
    availability: string;
    interest: number;
    education?: string;
    credentials?: string[];
    experience?: string;
    funding?: string;
    openTo?: string[];
    lookingFor?: string[];
    mutualConnections?: number;
    projects?: { title: string; desc: string }[];
    github?: string;
    linkedin?: string;
};

function CiraDiscoveryScreen({ modalFounder, setModalFounder }: { modalFounder: Founder | null, setModalFounder: (f: Founder | null) => void }) {
    // 1. Mock founder data
    const founders: Founder[] = [
        {
            id: 1,
            name: "Alex Kim",
            photo: "https://randomuser.me/api/portraits/men/32.jpg",
            verified: true,
            status: "Looking for technical cofounder",
            skills: [
                { name: "React", verification: "verified" },
                { name: "Product", verification: "peer" },
                { name: "AI", verification: "self" },
            ],
            project: "Building a peer-to-peer skill platform for founders.",
            quote: "I want to make founder matching as easy as possible.",
            location: "NYC, Remote",
            availability: "Full-time",
            interest: 0,
        },
        {
            id: 2,
            name: "Priya Patel",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
            verified: true,
            status: "Open to opportunities",
            skills: [
                { name: "Go", verification: "verified" },
                { name: "FinTech", verification: "peer" },
                { name: "Design", verification: "self" },
            ],
            project: "FinTech for underbanked communities.",
            quote: "Passionate about financial inclusion.",
            location: "SF, Hybrid",
            availability: "Part-time",
            interest: 0,
        },
        // ...more founders
    ];
    // 2. State for modal and interest
    const [interestLevels, setInterestLevels] = React.useState<number[]>(() => founders.map(() => 0));
    // 3. Search/filter state (placeholder)
    const [search, setSearch] = React.useState("");
    const [showFilters, setShowFilters] = React.useState(false);
    // 4. Interest system
    const INTERESTS = [
        { icon: <Eye size={20} />, label: "Curious", color: "bg-gray-100 text-gray-500" },
        { icon: <Star size={20} weight="fill" />, label: "Interested", color: "bg-yellow-100 text-yellow-700" },
        { icon: <Handshake size={20} />, label: "Let's Talk", color: "bg-blue-100 text-blue-700" },
        { icon: <Rocket size={20} />, label: "Perfect Match", color: "bg-green-100 text-green-700" },
    ];
    // 5. Skill verification icons
    const skillIcon = (v: SkillVerification, color: string) =>
        v === "verified"
            ? <CheckCircle size={18} className={`text-${color}`} />
            : v === "peer"
                ? <ArrowsCounterClockwise size={18} className={`text-${color}`} />
                : <PencilSimple size={18} className={`text-${color}`} />;
    // 1. Mock filter state (for demo)
    const [filters, setFilters] = React.useState({ skills: [], status: "", industry: "", location: "" });
    // 2. Filtered founders (mock logic)
    const filteredFounders = founders; // TODO: filter logic
    // 6. Render
    const brandGreen = '#10B981';
    return (
        <div className="relative w-full h-full flex flex-col">
            {/* Heading */}
            <div className="w-full pt-8 pb-3 bg-white/90 border-b border-none shadow-md z-10 relative">
                <div className="flex justify-center mb-4 items-center gap-3">
                    <img src="/src/assets/cira-logo-dark.svg" alt="Cira" className="h-7 drop-shadow-lg animate-float" />
                    <span className="font-extrabold text-2xl tracking-tight text-[#2A2A2A] drop-shadow-sm">Cira</span>
                </div>
                <h1 className="text-3xl font-black text-[#2A2A2A] leading-tight mb-1 pl-6">Discover Founders</h1>
            </div>
            <div className="m-6">

                {/* Search bar */}
                <label htmlFor="search" className="text-sm font-semibold text-[#2A2A2A] mb-1">AI-powered natural language search<span className="block text-xs font-light text-gray-500">Enter a natural language query to find founders</span></label>
                <div className="relative flex flex-row justify-center items-center gap-1 w-full mt-4">
                    <div className="px-5 py-1 flex flex-col items-start min-h-[32px] bg-gray-50 rounded-xl border border-gray-200 w-full">
                        <input
                            id="search"
                            className="w-full bg-transparent border-none text-base text-gray-900 placeholder-gray-400 focus:outline-none h-8"
                            placeholder="Search founders, skills, projects..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex items-center justify-center h-full">
                        <button className="p-2 rounded-lg transition flex items-center justify-center" type="button" onClick={() => setShowFilters(v => !v)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-[#2A2A2A]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Collapsible filter panel (expanded) */}
            {showFilters && (
                <div className="bg-white border border-gray-200 rounded-2xl m-4 p-6 flex flex-col gap-4 w-full max-w-md mx-auto">
                    <div className="font-bold text-emerald-500 text-base mb-2">Advanced Filters</div>
                    {/* Skills filter */}
                    <div>
                        <div className="text-xs font-semibold mb-1">Skills</div>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Go', 'FinTech', 'Product', 'AI', 'Design'].map(skill => (
                                <button key={skill} className="px-3 py-1 rounded-lg text-xs border border-gray-200 bg-gray-50 text-blue-700 font-semibold" type="button">{skill}</button>
                            ))}
                        </div>
                    </div>
                    {/* Status filter */}
                    <div>
                        <div className="text-xs font-semibold mb-1">Status</div>
                        <select className="w-full border border-gray-200 rounded-lg px-2 py-1 text-xs">
                            <option value="">Any</option>
                            <option>Looking for technical cofounder</option>
                            <option>Open to opportunities</option>
                            <option>Just networking</option>
                            <option>Building solo</option>
                        </select>
                    </div>
                    {/* Industry filter */}
                    <div>
                        <div className="text-xs font-semibold mb-1">Industry</div>
                        <div className="flex flex-wrap gap-2">
                            {['FinTech', 'HealthTech', 'Climate', 'EdTech', 'AI', '+'].map(ind => (
                                <button key={ind} className="px-3 py-1 rounded-lg text-xs border border-gray-200 bg-gray-50 text-blue-700 font-semibold" type="button">{ind}</button>
                            ))}
                        </div>
                    </div>
                    {/* Location filter */}
                    <div>
                        <div className="text-xs font-semibold mb-1">Location</div>
                        <input className="w-full border border-gray-200 rounded-lg px-2 py-1 text-xs" placeholder="e.g. NYC, Remote" />
                    </div>
                    {/* Saved searches (mock) */}
                    <div>
                        <div className="text-xs font-semibold mb-1">Saved Searches</div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 rounded-lg text-xs border border-gray-200 bg-gray-50 text-gray-500 font-semibold" type="button">AI Founders</button>
                            <button className="px-3 py-1 rounded-lg text-xs border border-gray-200 bg-gray-50 text-gray-500 font-semibold" type="button">Remote Only</button>
                        </div>
                    </div>
                    {/* Real-time result count (mock) */}
                    <div className="text-xs text-gray-500 mt-2">{filteredFounders.length} results</div>
                </div>
            )}
            {/* Founder grid */}
            <div className="flex flex-col items-center gap-6 py-6 px-2 overflow-y-auto">
                {filteredFounders.map((f, idx) => (
                    <div
                        key={f.id}
                        onClick={() => setModalFounder(f)}
                        className="cursor-pointer min-w-[260px] max-w-[340px] w-full p-6 rounded-2xl bg-[#f9f9f9] transition-all flex flex-col items-center"
                    >
                        <div className="relative mb-5 flex justify-center">
                            <img src={f.photo} alt={f.name} className="w-16 h-16 rounded-2xl border-2 border-gray-50 shadow" />
                            {f.verified && (
                                <span className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow text-white">
                                    <CheckCircle size={20} weight="fill" />
                                </span>
                            )}
                        </div>
                        <div className="text-lg font-semibold text-gray-900 mb-1">{f.name}</div>
                        <div className="text-emerald-500 font-medium text-sm mb-4">{f.status}</div>
                        <div className="text-base text-gray-700 mb-3 text-center">{f.project || f.quote}</div>
                        <div className="text-xs text-gray-500 mb-3">{f.location} &middot; {f.availability}</div>
                        <div className="flex flex-wrap gap-2 mt-0">
                            {f.skills.slice(0, 3).map(s => (
                                <span key={s.name} className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 bg-emerald-50 text-emerald-600 gap-1">
                                    {skillIcon(s.verification, 'emerald-500')} {s.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {/* Modal */}
            {modalFounder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <div className="bg-white rounded-3xl p-8 max-w-[340px] w-full shadow-2xl relative flex flex-col items-center">
                        <button className="absolute top-4 right-4 w-11 h-11 bg-transparent border-none text-3xl text-emerald-500 cursor-pointer" onClick={() => setModalFounder(null)}>&times;</button>
                        <div className="relative mb-5">
                            <img src={modalFounder.photo} alt={modalFounder.name} className="w-20 h-20 rounded-2xl border-2 border-gray-50 shadow" />
                            {modalFounder.verified && (
                                <span className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center shadow text-white">
                                    <CheckCircle size={20} weight="fill" />
                                </span>
                            )}
                        </div>
                        <div className="text-xl font-semibold text-gray-900 mb-1">{modalFounder.name}</div>
                        <div className="text-emerald-500 font-medium text-base mb-4">{modalFounder.status}</div>
                        <div className="text-base text-gray-700 mb-3 text-center">{modalFounder.project || modalFounder.quote}</div>
                        <div className="text-xs text-gray-500 mb-6">{modalFounder.location} &middot; {modalFounder.availability}</div>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {modalFounder.skills.map(s => (
                                <span key={s.name} className="inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 bg-emerald-50 text-emerald-600 gap-1">
                                    {skillIcon(s.verification, 'emerald-500')} {s.name}
                                </span>
                            ))}
                        </div>
                        {/* Additional profile info sections */}
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Education</div>
                            <div className="text-gray-700 text-sm">{modalFounder.education || 'Stanford University, B.S. Computer Science'}</div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Credentials</div>
                            <div className="flex flex-wrap gap-2">
                                {(modalFounder.credentials || ['Y Combinator S21', 'Ex-Google', 'AWS Certified']).map((cred, i) => (
                                    <span key={cred} className="bg-emerald-50 text-emerald-600 rounded-md px-3 py-1 text-xs font-medium">{cred}</span>
                                ))}
                            </div>
                        </div>
                        <div className="w-full mb-4 flex gap-4">
                            <div className="flex-1">
                                <div className="font-semibold text-emerald-500 text-sm mb-1">Experience</div>
                                <div className="text-gray-700 text-sm">{modalFounder.experience || '7 years'}</div>
                            </div>
                            <div className="flex-1">
                                <div className="font-semibold text-emerald-500 text-sm mb-1">Funding</div>
                                <div className="text-gray-700 text-sm">{modalFounder.funding || '$250k pre-seed raised'}</div>
                            </div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Open To</div>
                            <div className="text-gray-700 text-sm">{(modalFounder.openTo || ['Remote', 'Hybrid']).join(', ')}</div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Looking For</div>
                            <div className="text-gray-700 text-sm">{(modalFounder.lookingFor || ['Business Co-founder', 'Go-to-Market', 'Fundraising']).join(', ')}</div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Mutual Connections</div>
                            <div className="text-gray-700 text-sm">{modalFounder.mutualConnections || 3}</div>
                        </div>
                        <div className="w-full mb-4">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Projects</div>
                            <div className="flex flex-col gap-2">
                                {(modalFounder.projects || [{ title: 'SaaSify', desc: 'Subscription billing for startups.' }, { title: 'AI Chatbot', desc: 'Conversational AI for support teams.' }]).map((p, i) => (
                                    <div key={p.title} className="flex items-center gap-3 bg-gray-50 rounded-md p-2">
                                        <div className="w-10 h-10 bg-gray-200 rounded-md flex items-center justify-center text-gray-400 text-base font-bold">IMG</div>
                                        <div>
                                            <div className="text-emerald-600 font-semibold text-sm">{p.title}</div>
                                            <div className="text-gray-700 text-xs">{p.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full mb-2">
                            <div className="font-semibold text-emerald-500 text-sm mb-1">Links</div>
                            <div className="flex gap-4">
                                <a href={`https://github.com/${modalFounder.github || 'alexjohnson'}`} target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline text-sm">GitHub</a>
                                <a href={`https://linkedin.com/in/${modalFounder.linkedin || 'alex-johnson'}`} target="_blank" rel="noopener noreferrer" className="text-emerald-500 underline text-sm">LinkedIn</a>
                            </div>
                        </div>
                        {/* Action buttons */}
                        <div className="flex gap-4 w-full justify-center mt-8">
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-tr from-emerald-500 to-emerald-600 text-white rounded-xl py-2 font-semibold shadow hover:from-emerald-600 hover:to-emerald-700 transition"><Link size={18} className="text-white" /> Intro</button>
                            <button className="flex-1 flex items-center justify-center gap-2 bg-gray-50 text-emerald-500 border border-emerald-500 rounded-xl py-2 font-semibold"><ClipboardText size={18} className="text-emerald-500" /> Proposal</button>
                        </div>
                        <div className="flex gap-4 w-full justify-center mt-4">
                            <button className="flex-1 flex items-center justify-center gap-2 border border-emerald-500 text-emerald-500 rounded-xl py-2 font-semibold bg-white"><Coffee size={18} className="text-emerald-500" /> Coffee Chat</button>
                            <button className="flex-1 flex items-center justify-center gap-2 border border-emerald-500 text-emerald-500 rounded-xl py-2 font-semibold bg-white"><Envelope size={18} className="text-emerald-500" /> Message</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

function ProfileViewScreen() {
    return <div className="flex flex-col items-center justify-center h-full text-gray-500">Profile View Coming Soon</div>;
}

function MessagingScreen() {
    return <div className="flex flex-col items-center justify-center h-full text-gray-500">Messages Coming Soon</div>;
}

// Wrapper for CiraDiscoveryScreen to handle modal props
const CiraDiscoveryScreenWrapper: React.FC<{ modalFounder: Founder | null, setModalFounder: (f: Founder | null) => void }> = (props) => <CiraDiscoveryScreen {...props} />;

// Update SCREEN_COMPONENTS to only pass modal props to search tab
const SCREEN_COMPONENTS: Record<NavKey, React.FC<any>> = {
    create: ProfileCiraCreateScreen,
    search: CiraDiscoveryScreenWrapper,
    profile: ProfileViewScreen,
    message: MessagingScreen,
};

function ProfileCiraCreateScreen() {
    // Restore all original state for detailed sections
    const [projects, setProjects] = useState([{ title: '', url: '', description: '' }]);
    const [sideProjects, setSideProjects] = useState(['']);
    const [projectPhotos, setProjectPhotos] = useState<File[]>([]);
    const [skills, setSkills] = useState<{ name: string; verification: SkillVerification }[]>([]);
    const [endorsements, setEndorsements] = useState<string[]>([]);
    const [industries, setIndustries] = useState<string[]>([]);
    const [seekingSkills, setSeekingSkills] = useState<string[]>([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [project, setProject] = useState('');
    const [quote, setQuote] = useState('');
    const [location, setLocation] = useState('');
    const [availability, setAvailability] = useState('');
    const [showPreview, setShowPreview] = useState(false);
    // ...other fields as needed...

    // Completeness calculation (update as needed)
    const totalFields = 10;
    const filledFields = [name, status, skills.length > 0, project || quote, location, availability, projects.length > 0, industries.length > 0, seekingSkills.length > 0, projectPhotos.length > 0].filter(Boolean).length;
    const completeness = Math.round((filledFields / totalFields) * 100);

    // Live preview data
    const previewFounder: Founder = {
        id: 0,
        name,
        photo: projectPhotos[0] ? URL.createObjectURL(projectPhotos[0]) : 'https://randomuser.me/api/portraits/lego/1.jpg',
        verified: true,
        status,
        skills,
        project,
        quote,
        location,
        availability,
        interest: 0,
    };

    // Handlers for chips
    const toggleChip = (arr: string[], setArr: (v: string[]) => void, value: string) => {
        setArr(arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value]);
    };
    // File upload handler
    const handlePhotoUpload = (files: File[]) => {
        setProjectPhotos([...projectPhotos, ...files]);
    };

    // Example options
    const industryOptions = [
        'AI', 'Climate', 'Healthcare', 'Education', 'Fintech', 'Social Impact', '+',
    ];
    const skillOptions = [
        'React', 'Go', 'Marketing', 'Product', 'Design', 'Sales', 'Ops', '+',
    ];

    return (
        <>
            {/* Header: logo, title, divider, shadow */}
            <div className="w-full px-8 pt-8 pb-3 bg-white/90 border-b border-none shadow-md z-10 relative">
                <div className="flex justify-center mb-4 items-center gap-3">
                    <img src="/src/assets/cira-logo-dark.svg" alt="Cira" className="h-7 drop-shadow-lg animate-float" />
                    <span className="font-extrabold text-2xl tracking-tight text-[#2A2A2A] drop-shadow-sm">Cira</span>
                </div>
                <h1 className="text-3xl font-black text-[#2A2A2A] leading-tight mb-1">Create Your Profile</h1>
                <div className="text-base text-emerald-600 font-semibold tracking-wide">Show, Don't Tell</div>
                <div className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-emerald-200/0 via-emerald-200 to-emerald-200/0 opacity-70" />
            </div>
            {/* Completeness Indicator */}
            <div className="w-full px-8 pt-2 pb-2">
                <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-400 rounded-full transition-all" style={{ width: `${completeness}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-emerald-700">{completeness}% Complete</span>
                </div>
            </div>
            {/* Main Form - minimal, neutral, all sections restored */}
            <form className="w-full flex-1 px-7 pt-3 pb-8 flex flex-col gap-8 overflow-y-auto relative z-0 bg-white" style={{ overflowX: 'hidden' }}>
                {/* 1. What You've Built */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 mb-2">
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">GitHub/Portfolio URL <span className="text-red-500">*</span></label>
                    <input type="url" required placeholder="https://github.com/yourname" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2" />
                    <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-600">Live Project Demos</span>
                            <button type="button" className="text-xs text-emerald-600 font-bold hover:underline transition" onClick={() => setProjects([...projects, { title: '', url: '', description: '' }])}>+ Add</button>
                        </div>
                        {projects.map((proj, i) => (
                            <div key={i} className="flex flex-col gap-1 mb-2 bg-gray-50 rounded-lg p-2 border border-gray-100">
                                <input type="text" placeholder="Project Title" className="border border-gray-200 rounded px-2 py-1 text-xs mb-1" />
                                <input type="url" placeholder="Live Demo URL" className="border border-gray-200 rounded px-2 py-1 text-xs mb-1" />
                                <textarea placeholder="Short Description" rows={2} className="border border-gray-200 rounded px-2 py-1 text-xs resize-none" />
                            </div>
                        ))}
                    </div>
                    <div className="mb-2">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-semibold text-gray-600">Side Projects</span>
                            <button type="button" className="text-xs text-emerald-600 font-bold hover:underline transition" onClick={() => setSideProjects([...sideProjects, ''])}>+ Add</button>
                        </div>
                        {sideProjects.map((sp, i) => (
                            <input key={i} type="url" placeholder="Project Link" className="border border-gray-200 rounded px-2 py-1 text-xs mb-1 w-full" />
                        ))}
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-semibold text-gray-600 block mb-1">Show Your Work (Photo Uploads)</span>
                        <div className="w-full max-w-4xl mx-auto min-h-24 border-2 border-dashed border-gray-200 bg-white rounded-xl">
                            <FileUpload onChange={handlePhotoUpload} />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {projectPhotos.map((file, i) => (
                                <span key={i} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-500 overflow-hidden">
                                    <img src={URL.createObjectURL(file)} alt="upload" className="object-cover w-full h-full rounded-lg" />
                                </span>
                            ))}
                        </div>
                    </div>
                </section>
                {/* 2. Skills Verification */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 mb-2">
                    <span className="text-xs font-semibold text-gray-600 block mb-1">Skills</span>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skillOptions.map(skill => (
                            <button type="button" key={skill} onClick={() => toggleChip(skills.map(s => s.name), (arr) => setSkills(arr.map(n => ({ name: n, verification: 'self' }))), skill)} className={`px-3 py-1 rounded-full text-xs border font-semibold shadow-sm transition-all duration-150 ${skills.map(s => s.name).includes(skill) ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>{skill}</button>
                        ))}
                    </div>
                    {/* Verification type selector for each skill (mock for now) */}
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skills.map((s, i) => (
                            <span key={s.name} className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs">
                                {s.name}
                                <select className="ml-1 border border-gray-200 rounded text-xs" value={s.verification} onChange={e => setSkills(skills.map((sk, idx) => idx === i ? { ...sk, verification: e.target.value as SkillVerification } : sk))}>
                                    <option value="verified">✅ Verified</option>
                                    <option value="peer">🔄 Peer-reviewed</option>
                                    <option value="self">📝 Self-reported</option>
                                </select>
                            </span>
                        ))}
                    </div>
                    <div className="mb-2 flex items-center gap-2">
                        <button type="button" className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">Take a Challenge</button>
                        <span className="text-xs text-gray-400">(Optional, recommended)</span>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-semibold text-gray-600 block mb-1">Peer Endorsements</span>
                        <div className="flex flex-wrap flex-col gap-2">
                            {endorsements.length === 0 && <span className="text-xs text-gray-400">No endorsements yet</span>}
                            {endorsements.map((e, i) => (
                                <span key={i} className="px-2 py-1 rounded-full bg-green-50 text-green-700 text-xs font-semibold shadow-sm">{e}</span>
                            ))}
                            <button type="button" className="px-2 py-1 w-fit rounded-full bg-gray-50 text-gray-700 text-xs border font-semibold shadow hover:bg-gray-100 transition">+ Request</button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="text-xs font-semibold text-gray-600 block mb-1">Portfolio Analysis</span>
                        <span className="inline-block px-2 py-1 mt-1 rounded-full bg-yellow-50 text-yellow-700 text-xs font-bold shadow">Pending</span>
                    </div>
                </section>
                {/* 3. What Drives You */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 mb-2">
                    <label className="block text-xs text-gray-600 mb-1 mt-2 font-semibold">Problems that keep you up at night</label>
                    <textarea rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 resize-none" />
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Industries/Causes You Care About</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {industryOptions.map(ind => (
                            <button type="button" key={ind} onClick={() => toggleChip(industries, setIndustries, ind)} className={`px-3 py-1 rounded-full text-xs border font-semibold shadow-sm transition-all duration-150 ${industries.includes(ind) ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>{ind}</button>
                        ))}
                    </div>
                    <label className="block text-xs mt-4 text-gray-600 mb-1 font-semibold">What would you build with unlimited resources?</label>
                    <textarea rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 resize-none" />
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Vision (in your own words)</label>
                    <textarea rows={2} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2 resize-none" />
                </section>
                {/* 4. How You Work */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 mb-2">
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Preferred Communication Style</label>
                    <div className="flex gap-2 mb-2">
                        {['Async', 'Sync', 'Mixed'].map(style => (
                            <button type="button" key={style} className="px-3 py-1 rounded-full text-xs border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 focus:bg-gray-100 font-semibold shadow-sm transition-all duration-150">{style}</button>
                        ))}
                    </div>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Work Schedule Preferences</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>Flexible</option>
                        <option>Mornings</option>
                        <option>Evenings</option>
                        <option>Weekends</option>
                    </select>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Meeting Style</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>Video</option>
                        <option>Voice</option>
                        <option>Text</option>
                    </select>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Team Size Preferences</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>Solo</option>
                        <option>2-3</option>
                        <option>4-6</option>
                        <option>7+</option>
                    </select>
                </section>
                {/* 5. What You Need */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4">
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Skills You're Seeking</label>
                    <div className="flex flex-wrap gap-2 mb-2">
                        {skillOptions.map(skill => (
                            <button type="button" key={skill} onClick={() => toggleChip(seekingSkills, setSeekingSkills, skill)} className={`px-3 py-1 rounded-full text-xs border font-semibold shadow-sm transition-all duration-150 ${seekingSkills.includes(skill) ? 'bg-gray-900 text-white border-gray-900' : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300'}`}>{skill}</button>
                        ))}
                    </div>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Equity Range</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>1-5%</option>
                        <option>6-10%</option>
                        <option>11-20%</option>
                        <option>21-30%</option>
                        <option>31-40%</option>
                        <option defaultChecked>41-50%</option>
                        <option>51-60%</option>
                        <option>61-70%</option>
                        <option>71-80%</option>
                        <option>81-90%</option>
                        <option>91-100%</option>
                    </select>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Time Commitment Level</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>Part-time</option>
                        <option>Full-time</option>
                        <option>Flexible</option>
                    </select>
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Project Stage Interest</label>
                    <select className="h-8 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2">
                        <option>Idea</option>
                        <option>MVP</option>
                        <option>Growth</option>
                        <option>Scaling</option>
                    </select>
                </section>
                {/* Location input (new, for field alignment) */}
                <section className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-4 mb-2">
                    <label className="block text-xs text-gray-600 mb-1 font-semibold">Location <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm mb-2"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="e.g. NYC, Remote"
                        required
                    />
                </section>
                {/* Save/Continue Button */}
                <button type="submit" className="sticky z-50 bottom-12 mt-4 w-full bg-emerald-500 text-white rounded-xl py-3 font-bold text-lg shadow hover:bg-emerald-600 transition">Save & Continue</button>
            </form>

        </>
    );
}

const ProfileCira = () => {
    const [activeTab, setActiveTab] = useState<NavKey>("create");
    const ScreenComponent = SCREEN_COMPONENTS[activeTab];
    // Ref for phone container
    const phoneRef = React.useRef<HTMLDivElement>(null);
    // Modal state for discovery screen
    const [modalFounder, setModalFounder] = React.useState<Founder | null>(null);
    // Only pass modal props to search tab
    const screenProps = activeTab === "search" ? { modalFounder, setModalFounder } : {};
    return (
        <div ref={phoneRef} className="w-[320px] h-[640px] max-w-[340px] mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center font-['Fellix',_sans-serif] p-0 relative transition-all duration-300 overflow-hidden">
            {/* Main screen content */}
            <div className="flex-1 w-full relative overflow-y-auto bg-white">
                <ScreenComponent {...screenProps} />
            </div>
            {/* Glassmorphism Bottom Navbar: always bottom-0 inside phone */}
            <nav className="absolute left-0 bottom-0 w-full z-50 flex items-center justify-between px-3 py-2 bg-white/90 border-t border-gray-100 rounded-b-xl shadow-sm">
                {NAV_ITEMS.map((item) => {
                    const isActive = activeTab === item.key;
                    return (
                        <button
                            key={item.key}
                            className={`group flex flex-col items-center flex-1 py-1 transition text-xs rounded-lg font-semibold relative ${isActive ? "text-emerald-500 animate-bounce-slow" : "text-gray-400 hover:text-emerald-300"}`}
                            onClick={() => setActiveTab(item.key as NavKey)}
                            type="button"
                        >
                            <span className={isActive ? "mb-0.5 text-emerald-500" : "mb-0.5 text-gray-400 group-hover:text-emerald-300"}>{item.icon}</span>
                            <span className={isActive ? "text-emerald-500" : "group-hover:text-emerald-300"}>{item.label}</span>
                        </button>
                    );
                })}
            </nav>
        </div>
    );
};

export default ProfileCira;