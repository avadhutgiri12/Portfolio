"use client";

import {
BrainCircuit,
Code2,
Database,
GitBranch,
Globe2,
Layers3,
LineChart,
Server,
Smartphone,
Terminal,
} from "lucide-react";

const skills = [
{
name: "Python",
category: "PROGRAMMING",
icon: Terminal,
size: "large",
number:1
},
{
name: "Machine\nLearning",
category: "AI / ML",
icon: BrainCircuit,
size: "large",
},
{
name: "Next.js",
category: "WEB",
icon: Globe2,
size: "large",
},
{
name: "React",
category: "FRONTEND",
icon: Code2,
size: "medium",
},
{
name: "React Native\n/ Expo",
category: "MOBILE",
icon: Smartphone,
size: "medium",
},
{
name: "EDA",
category: "DATA",
icon: LineChart,
size: "small",
},
{
name: "NumPy",
category: "DATA SCIENCE",
icon: Layers3,
size: "small",
},
{
name: "Scikit-\nlearn",
category: "MACHINE LEARNING",
icon: BrainCircuit,
size: "medium",
},
{
name: "PyTorch",
category: "DEEP LEARNING",
icon: BrainCircuit,
size: "small",
},
{
name: "TensorFlow",
category: "DEEP LEARNING",
icon: BrainCircuit,
size: "small",
},
{
name: "Pandas",
category: "DATA SCIENCE",
icon: Database,
size: "small",
},
{
name: "Model\nDevelopment",
category: "MACHINE LEARNING",
icon: BrainCircuit,
size: "medium",
},
{
name: "Git",
category: "TOOLS",
icon: GitBranch,
size: "small",
},
{
name: "GitHub",
category: "TOOLS",
icon: GitBranch,
size: "small",
},
{
name: "MySQL",
category: "DATABASE",
icon: Database,
size: "small",
},
{
name: "Firebase",
category: "BACKEND",
icon: Server,
size: "small",
},
{
name: "Google Colab",
category: "ML TOOLS",
icon: Terminal,
size: "small",
},
];

export default function Skills() {
return (
<section
    id="skills"
    className="
    relative
    overflow-hidden
    px-6
    py-32
    text-white
    md:px-12
    lg:py-40
    "
>
    <div className="mx-auto max-w-7xl">
    {/* =====================================================
        HEADER
    ====================================================== */}

    <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
        <p className="mb-6 font-mono text-[10px] tracking-[0.35em] text-emerald-400">
            SKILLS / 003
        </p>

        <h2
            className="
            text-6xl
            font-bold
            leading-[0.82]
            tracking-[-0.06em]
            text-white
            md:text-8xl
            lg:text-[9rem]
            "
        >
            TOOLS
            <br />
            <span className="text-neutral-700">I USE.</span>
        </h2>
        </div>

        <div className="max-w-sm border-l border-white/10 pl-6">
        <p className="font-mono text-[9px] uppercase tracking-[0.25em] text-neutral-600">
            TECHNICAL STACK
        </p>

        <p className="mt-4 text-sm leading-7 text-neutral-500">
            A collection of technologies, frameworks, tools, and
            machine-learning techniques I use to turn ideas into working
            products.
        </p>
        </div>
    </div>

    {/* =====================================================
        DESKTOP SKILL VISUALIZATION
    ====================================================== */}

    <div className="relative hidden min-h-[760px] md:block">
        {/* Background grid */}
        <div
        className="
            pointer-events-none
            absolute
            inset-0
            opacity-20
            [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)]
            [background-size:32px_32px]
        "
        />

        {/* Connecting line */}
        <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 760"
        fill="none"
        preserveAspectRatio="none"
        >
        <path
            d="
            M0 390
            C100 390 110 390 160 390
            C210 390 210 250 280 250
            C350 250 350 510 430 510
            C510 510 500 210 600 210
            C700 210 680 390 770 390
            C860 390 850 570 940 570
            C1030 570 1000 390 1200 390
            "
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.5"
        />

        <path
            d="
            M0 390
            C100 390 110 390 160 390
            C210 390 210 250 280 250
            C350 250 350 510 430 510
            C510 510 500 210 600 210
            C700 210 680 390 770 390
            C860 390 850 570 940 570
            C1030 570 1000 390 1200 390
            "
            stroke="rgba(52,211,153,0.20)"
            strokeWidth="1"
            strokeDasharray="3 10"
        />
        </svg>

        {/* =================================================
            SKILL NODE 01 — PYTHON
        ================================================= */}

        <SkillNode
        skill={skills[0]}
        className="
            left-[9%]
            top-[34%]
        "
        />

        {/* =================================================
            SKILL NODE 02 — MACHINE LEARNING
        ================================================= */}

        <SkillNode
        skill={skills[1]}
        className="
            left-[28%]
            top-[12%]
        "
        />

        {/* =================================================
            SKILL NODE 03 — NEXT.JS
        ================================================= */}

        <SkillNode
        skill={skills[2]}
        className="
            left-[49%]
            top-[7%]
        "
        />

        {/* =================================================
            SKILL NODE 04 — REACT
        ================================================= */}

        <SkillNode
        skill={skills[3]}
        className="
            left-[64%]
            top-[31%]
        "
        />

        {/* =================================================
            SKILL NODE 05 — MODEL DEVELOPMENT
        ================================================= */}

        <SkillNode
        skill={skills[8]}
        className="
            left-[78%]
            top-[48%]
        "
        />

        {/* Smaller floating skills */}

        <SmallSkill skill={skills[5]} className="left-[18%] top-[67%]" />

        <SmallSkill skill={skills[6]} className="left-[37%] top-[64%]" />

        <SmallSkill skill={skills[7]} className="left-[53%] top-[61%]" />

        <SmallSkill skill={skills[9]} className="left-[67%] top-[70%]" />

        <SmallSkill skill={skills[10]} className="left-[75%] top-[17%]" />

        <SmallSkill skill={skills[11]} className="left-[87%] top-[24%]" />

        <SmallSkill skill={skills[12]} className="left-[88%] top-[76%]" />

        <SmallSkill skill={skills[13]} className="left-[42%] top-[82%]" />

        {/* Center label */}

        <div
        className="
            absolute
            left-1/2
            top-[48%]
            -translate-x-1/2
            -translate-y-1/2
            text-center
        "
        >
        <p className="font-mono text-[8px] tracking-[0.35em] text-neutral-700">
            STACK
        </p>

        <p className="mt-2 text-xs tracking-widest text-emerald-400">
            BUILD · TRAIN · DEPLOY
        </p>
        </div>
    </div>

    {/* =====================================================
        MOBILE VERSION
    ====================================================== */}

    <div className="grid grid-cols-2 gap-3 md:hidden">
        {skills.map((skill) => {
        const Icon = skill.icon;

        return (
            <div
            key={skill.name}
            className="
                group
                relative
                flex
                min-h-[150px]
                flex-col
                justify-between
                overflow-hidden
                border
                border-white/10
                bg-[#0b0b0b]
                p-5
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-emerald-400/40
                hover:bg-emerald-400/[0.025]
            "
            >
            <div className="flex items-start justify-between">
                <span className="font-mono text-[8px] tracking-[0.2em] text-neutral-700">
                {skill.category}
                </span>

                <Icon
                size={17}
                strokeWidth={1.3}
                className="
                    text-neutral-600
                    transition-colors
                    duration-500
                    group-hover:text-emerald-400
                "
                />
            </div>

            <div>
                <h3 className="whitespace-pre-line text-xl font-semibold leading-[0.9] tracking-tight text-white">
                {skill.name}
                </h3>

                <div className="mt-4 h-px w-6 bg-emerald-400/40 transition-all duration-500 group-hover:w-12" />
            </div>
            </div>
        );
        })}
    </div>

    {/* =====================================================
        BOTTOM INFO
    ====================================================== */}

    <div className="mt-12 grid border-t border-white/10 md:grid-cols-3">
        <div className="border-b border-white/10 py-5 md:border-b-0 md:border-r md:pr-8">
        <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
            MACHINE LEARNING
        </span>

        <p className="mt-2 text-sm leading-6 text-neutral-500">
            Python · NumPy · Pandas · EDA · Scikit-learn · PyTorch ·
            TensorFlow · Model Development
        </p>
        </div>

        <div className="border-b border-white/10 py-5 md:border-b-0 md:px-8 md:border-r">
        <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
            WEB DEVELOPMENT
        </span>

        <p className="mt-2 text-sm text-neutral-500">
            React · Next.js · React Native · Expo
        </p>
        </div>

        <div className="py-5 md:pl-8">
        <span className="font-mono text-[9px] tracking-[0.2em] text-neutral-700">
            TOOLS & BACKEND
        </span>

        <p className="mt-2 text-sm text-neutral-500">
            Git · GitHub · Colab · MySQL · Firebase
        </p>
        </div>
    </div>
    </div>
</section>
);
}

/* =============================================================
LARGE SKILL NODE
============================================================= */

function SkillNode({
skill,
className,
}: {
skill: (typeof skills)[number];
className?: string;
}) {
const Icon = skill.icon;

return (
<div
    className={`
    group
    absolute
    z-10
    -translate-x-1/2
    -translate-y-1/2
    ${className}
    `}
>
    <div
    className="
        relative
        flex
        h-44
        w-44
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-[#080808]
        transition-all
        duration-700
        group-hover:scale-105
        group-hover:border-emerald-400/60
        group-hover:shadow-[0_0_60px_rgba(52,211,153,0.08)]
    "
    >
    {/* Inner ring */}
    <div
        className="
        absolute
        inset-3
        rounded-full
        border
        border-white/[0.05]
        transition-all
        duration-700
        group-hover:border-emerald-400/20
        "
    />

    <div className="relative z-10 text-center">
        <Icon
        size={23}
        strokeWidth={1}
        className="
            mx-auto
            mb-3
            text-neutral-600
            transition-colors
            duration-500
            group-hover:text-emerald-400
        "
        />

        <h3 className="whitespace-pre-line text-xl font-semibold leading-[0.9] tracking-[-0.04em] text-white">
        {skill.name}
        </h3>

        <p className="mt-3 font-mono text-[7px] tracking-[0.25em] text-neutral-700">
        {skill.category}
        </p>
    </div>
    </div>

    {/* Number */}
    <span
    className="
        absolute
        -right-1
        -top-2
        font-mono
        text-[8px]
        text-neutral-700
        transition-colors
        group-hover:text-emerald-400
    "
    >
    {skill.number ?? ""}
    </span>
</div>
);
}

/* =============================================================
SMALL SKILL NODE
============================================================= */

function SmallSkill({
skill,
className,
}: {
skill: (typeof skills)[number];
className?: string;
}) {
const Icon = skill.icon;

return (
<div
    className={`
    group
    absolute
    z-20
    -translate-x-1/2
    -translate-y-1/2
    ${className}
    `}
>
    <div
    className="
        flex
        h-24
        w-24
        items-center
        justify-center
        rounded-full
        border
        border-white/15
        bg-[#080808]
        text-center
        transition-all
        duration-500
        group-hover:scale-110
        group-hover:border-emerald-400/50
        group-hover:shadow-[0_0_35px_rgba(52,211,153,0.07)]
    "
    >
    <div>
        <Icon
        size={14}
        strokeWidth={1}
        className="
            mx-auto
            mb-2
            text-neutral-700
            transition-colors
            group-hover:text-emerald-400
        "
        />

        <p className="px-2 text-[10px] font-medium leading-tight text-neutral-500 transition-colors group-hover:text-neutral-300">
        {skill.name}
        </p>
    </div>
    </div>
</div>
);
}
