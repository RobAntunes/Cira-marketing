import { useState } from "react";
import person1 from "../../assets/person1.jpg";

const icons = {
    create: (
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M12 4v16m8-8H4" strokeLinecap="round" />
        </svg>
    ),
    search: (
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
    ),
    liked: (
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>
    ),
    message: (
        <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
    ),
};

function DiscoveryScreen() {
    const [expanded, setExpanded] = useState(false);
    const fakeProfile = {
        name: "John Anderson",
        role: "Technical Co-founder",
        location: "San Francisco, CA",
        bio: "Full-stack engineer, ex-Google. Built 3 SaaS products. Looking for a business co-founder to scale my latest AI project.",
        skills: ["React", "Node.js", "AI", "Product"],
        photo: "https://randomuser.me/api/portraits/men/33.jpg",
        github: "alexjohnson",
        linkedin: "alex-johnson",
        projects: [
            { title: "SaaSify", desc: "Subscription billing for startups." },
            { title: "AI Chatbot", desc: "Conversational AI for support teams." },
        ],
        workingOn: "AI Chatbot (Founder, 2023- )",
        equitySplit: "Open to 60/40, 50/50, or vesting",
        education: "Stanford University, B.S. Computer Science",
        credentials: ["Y Combinator S21", "Ex-Google", "AWS Certified"],
        experience: "7 years",
        funding: "$250k pre-seed raised",
        openTo: ["Remote", "Hybrid"],
        lookingFor: ["Business Co-founder", "Go-to-Market", "Fundraising"],
        mutualConnections: 3,
    };
    return (
        <div className="w-full min-h-full h-full flex flex-col items-center bg-gradient-to-b from-gray-50 to-gray-100 relative pt-6 pb-4">
            <div className="w-[320px] min-h-fit max-w-xs bg-[ghostwhite] rounded-2xl flex flex-col items-center p-6 relative">
                <div className="flex items-center gap-3 mb-2">
                    <img
                        src={fakeProfile.photo}
                        alt={fakeProfile.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-gray-100 shadow"
                    />
                    <div>
                        <div className="text-lg font-bold text-gray-800 leading-tight">{fakeProfile.name}</div>
                        <div className="text-xs text-gray-500">{fakeProfile.role} • {fakeProfile.location}</div>
                    </div>
                </div>
                <div className="flex gap-2 mb-2 flex-wrap justify-center">
                    {fakeProfile.skills.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 bg-gray-100 rounded-full text-xs text-gray-700 border border-gray-200">{skill}</span>
                    ))}
                </div>
                <div className="w-full flex flex-col gap-2 text-xs text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Currently working on:</span>
                        <span className="truncate">{fakeProfile.workingOn}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Equity split:</span>
                        <span>{fakeProfile.equitySplit}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Education:</span>
                        <span>{fakeProfile.education}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">Credentials:</span>
                        <div className="flex gap-1 flex-wrap">
                            {fakeProfile.credentials.map((cred) => (
                                <span key={cred} className="px-2 py-0.5 bg-blue-50 border border-blue-100 rounded-full text-[11px] text-blue-700 font-semibold">{cred}</span>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Experience:</span>
                            <span>{fakeProfile.experience}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="font-semibold">Funding:</span>
                            <span>{fakeProfile.funding}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Open to:</span>
                        <span>{fakeProfile.openTo.join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold">Looking for:</span>
                        <div className="flex gap-1 flex-wrap">
                            {fakeProfile.lookingFor.map((role) => (
                                <span key={role} className="px-2 py-0.5 bg-green-50 border border-green-100 rounded-full text-[11px] text-green-700 font-semibold">{role}</span>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold">Mutual connections:</span>
                        <span>{fakeProfile.mutualConnections}</span>
                    </div>
                </div>
                <hr className="w-full border-gray-200 my-2" />
                <div className="text-xs text-gray-600 mb-2 line-clamp-2 text-center">{fakeProfile.bio}</div>
                <div className="flex gap-6 mb-6 mt-2">
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-400 hover:bg-red-100 hover:text-red-500 transition shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-xl text-gray-400 hover:bg-green-100 hover:text-green-500 transition shadow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                </div>
                <button
                    className="mt-1 flex items-center gap-1 text-blue-600 text-xs font-semibold hover:text-blue-800"
                    onClick={() => setExpanded((v) => !v)}
                >
                    <span>{expanded ? "Hide Details" : "Expand"}</span>
                    <svg
                        className={`transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
                        width={18}
                        height={18}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                {expanded && (
                    <div className="w-full mt-3 border-t border-gray-100 pt-3 text-left">
                        <div className="font-semibold text-xs text-gray-700 mb-1">Projects</div>
                        <ul className="list-disc list-inside text-xs text-gray-600 mb-2">
                            {fakeProfile.projects.map((p) => (
                                <li key={p.title}><span className="font-bold text-gray-800">{p.title}:</span> {p.desc}</li>
                            ))}
                        </ul>
                        <div className="flex gap-3 mt-2">
                            <a href={`https://github.com/${fakeProfile.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">GitHub</a>
                            <a href={`https://linkedin.com/in/${fakeProfile.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs underline">LinkedIn</a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function ProfileViewScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-4xl mb-2">👤</div>
            <div className="text-lg font-semibold mb-1">Profile</div>
            <div className="text-sm">View your public profile.</div>
        </div>
    );
}
function MessagingScreen() {
    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <div className="text-4xl mb-2">💬</div>
            <div className="text-lg font-semibold mb-1">Messages</div>
            <div className="text-sm">Connect and chat with matches.</div>
        </div>
    );
}

function CreateProfileScreen() {
    return (
        <form className="w-full flex-1 px-6 pt-4 pb-4 flex flex-col gap-4 overflow-y-auto">
            <h2 className="text-lg font-semibold text-[#2A2A2A] mb-2">Tell us about yourself!</h2>
            <div className="flex gap-3">
                <div className="flex-1 min-w-0 flex flex-col">
                    <label className="text-xs text-gray-600 mb-1" htmlFor="firstName">First name</label>
                    <input
                        id="firstName"
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    />
                </div>
                <div className="flex-1 min-w-0 flex flex-col">
                    <label className="text-xs text-gray-600 mb-1" htmlFor="lastName">Last name</label>
                    <input
                        id="lastName"
                        type="text"
                        className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                    />
                </div>
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="location">Location</label>
                <input
                    id="location"
                    type="text"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="linkedin">LinkedIn URL</label>
                <input
                    id="linkedin"
                    type="url"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="role">Role</label>
                <select
                    id="role"
                    className="border h-8 border-gray-300 rounded-lg px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                >
                    <option>Technical</option>
                    <option>Business</option>
                    <option>Designer</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="about">About Me</label>
                <textarea
                    id="about"
                    rows={2}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none transition"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="skills">Skills</label>
                <input
                    id="skills"
                    type="text"
                    placeholder="e.g. React, Marketing, Fundraising"
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                />
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="experience">Startup Experience</label>
                <select
                    id="experience"
                    className="border h-8 border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                >
                    <option>None</option>
                    <option>1-2 years</option>
                    <option>3+ years</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-xs text-gray-600 mb-1" htmlFor="lookingFor">Looking For</label>
                <select
                    id="lookingFor"
                    className="h-8 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
                >
                    <option>Technical Co-founder</option>
                    <option>Business Co-founder</option>
                    <option>Designer</option>
                    <option>Other</option>
                </select>
            </div>
            <button
                type="button"
                className="active:scale-95 active:shadow-inner active:bg-blue-600 mt-2 w-full bg-blue-500 text-white rounded-lg py-2 font-semibold hover:bg-blue-600 transition"
            >
                Save Profile
            </button>
        </form>
    );
}

const NAV_ITEMS = [
    { key: "create", label: "Create", icon: icons.create },
    { key: "search", label: "Discover", icon: icons.search },
    { key: "liked", label: "Liked", icon: icons.liked },
    { key: "message", label: "Messages", icon: icons.message },
];

type ScreenKey = "create" | "search" | "liked" | "message";

const SCREEN_COMPONENTS: Record<ScreenKey, React.FC> = {
    create: CreateProfileScreen,
    search: DiscoveryScreen,
    liked: LikedFoundersScreen,
    message: MessagingScreen,
};

const ProfileStandard = () => {
    const [screen, setScreen] = useState<ScreenKey>("create");
    const ScreenComponent = SCREEN_COMPONENTS[screen];
    return (
        <div
            className="w-[320px] h-[640px] mx-auto bg-white rounded-2xl shadow-xl flex flex-col items-center overflow-hidden font-['Fellix',_sans-serif]"
            style={{
                maxWidth: 340,
            }}
        >
            {/* Profile photo with carousel UI */}
            {screen === "create" && (
                <div className="relative w-full h-52 bg-gray-100 flex items-center justify-center">
                    <svg viewBox="-1.6 -1.6 19.20 19.20" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g color="#000000" font-weight="400" font-family="Ubuntu" letter-spacing="0" word-spacing="0" white-space="normal" fill="gray"> <path d="M8 2a2.84 2.84 0 0 0-1.12.221c-.345.141-.651.348-.906.615v.003l-.001.002c-.248.269-.44.592-.574.96-.137.367-.203.769-.203 1.2 0 .435.065.841.203 1.209.135.361.327.68.574.95l.001.002c.254.267.558.477.901.624v.003c.346.141.723.21 1.12.21.395 0 .77-.069 1.117-.21v-.002c.343-.147.644-.357.892-.625.255-.268.45-.59.586-.952.138-.368.204-.774.204-1.21h.01c0-.43-.065-.831-.203-1.198a2.771 2.771 0 0 0-.585-.963 2.5 2.5 0 0 0-.897-.618A2.835 2.835 0 0 0 7.999 2zM8.024 10.002c-2.317 0-3.561.213-4.486.91-.462.35-.767.825-.939 1.378-.172.553-.226.975-.228 1.71L8 14.002h5.629c-.001-.736-.052-1.159-.225-1.712-.172-.553-.477-1.027-.94-1.376-.923-.697-2.124-.912-4.44-.912z" overflow="visible"></path> </g> </g></svg>

                    {/* Add photo button */}
                    <button className="absolute right-2 bottom-2 bg-white/90 rounded-full p-1 shadow border border-gray-200">
                        <svg width={16} height={16} fill="none" stroke="gray" strokeWidth={2} viewBox="0 0 24 24">
                            <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>
            )}
            {/* Divider */}
            <hr className="w-full border-gray-200" />
            {/* Main content area (scrollable) */}
            <div className="flex-1 w-full overflow-y-auto">
                <ScreenComponent />
            </div>
            {/* Bottom Navbar */}
            <nav className="w-full h-14 bg-white border-t border-gray-200 flex items-center justify-between px-2">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.key}
                        className={`flex flex-col items-center flex-1 py-1 transition text-xs ${screen === item.key
                            ? "text-blue-600 font-semibold"
                            : "text-gray-400 hover:text-blue-400"
                            }`}
                        onClick={() => setScreen(item.key as ScreenKey)}
                        type="button"
                    >
                        <span className="mb-0.5">{item.icon}</span>
                        {item.label}
                    </button>
                ))}
            </nav>
        </div>
    );
};

// Simple, generic liked founders screen for left tab
function LikedFoundersScreen() {
    const liked = [
        {
            name: "John Anderson",
            role: "Technical Co-founder",
            location: "San Francisco, CA",
            bio: "Full-stack engineer, ex-Google. Built 3 SaaS products.",
            photo: "https://randomuser.me/api/portraits/men/33.jpg",
        },
        {
            name: "Amy Lee",
            role: "Product Manager",
            location: "New York, NY",
            bio: "Product at fintech unicorn. Loves clean UX and data.",
            photo: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
            name: "Alex Weiss",
            role: "AI Researcher",
            location: "Remote",
            bio: "PhD in ML. Building next-gen LLM tools.",
            photo: "https://randomuser.me/api/portraits/men/45.jpg",
        },
    ];
    return (
        <div className="w-full h-full flex flex-col items-center bg-gray-50 py-6 px-2 overflow-y-auto">
            <h2 className="text-lg font-bold text-gray-700 mb-4">Liked Founders</h2>
            <div className="flex flex-col gap-4 w-full max-w-xs">
                {liked.map((f, i) => (
                    <div key={i} className="w-full bg-white border border-gray-200 rounded-xl p-4 flex gap-3 items-center shadow-sm">
                        <img src={f.photo} alt={f.name} className="w-12 h-12 rounded-full object-cover border border-gray-100" />
                        <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-800 text-base truncate">{f.name}</div>
                            <div className="text-xs text-gray-500 mb-0.5">{f.role} • {f.location}</div>
                            <div className="text-xs text-gray-500 line-clamp-2">{f.bio}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProfileStandard;