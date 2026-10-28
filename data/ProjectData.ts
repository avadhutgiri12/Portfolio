import {
  Target,
  PenTool,
  Hexagon,
  Box,
  Layout,
  LucideIcon,
} from "lucide-react";

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  sideText: string;
  year: string;
  role: string;
  tools: string[];
  image: string;
  description: string;
  impact: string;
  tags: string[];
  // New fields for enhanced project showcase
  liveSiteUrl?: string;
  repositoryUrl?: string;
  status?: string;
}

export interface Skill {
  name: string;
  percent: number;
  icon: LucideIcon;
}

export const SKILLS_DATA: Skill[] = [
  {
    name: "USER RESEARCH & ETHNOGRAPHY",
    percent: 92,
    icon: Target,
  },
  {
    name: "UI / UX DESIGN & PROTOTYPING",
    percent: 98,
    icon: PenTool,
  },
  {
    name: "DESIGN SYSTEMS & ARCHITECTURE",
    percent: 95,
    icon: Hexagon,
  },
  {
    name: "COMPLEX DATA VISUALIZATION",
    percent: 88,
    icon: Box,
  },
  {
    name: "INTERACTION & MOTION DESIGN",
    percent: 90,
    icon: Layout,
  },
];

export const METRICS_DATA = [
  {
    num: "5+",
    label: "YEARS OF INDUSTRY EXP",
  },
  {
    num: "42+",
    label: "COMPLETED SHIPMENTS",
  },
  {
    num: "28+",
    label: "CLIENTS & VENTURES",
  },
];

export const PROJECT_DATA: Project[] = [
  {
    id: "01",
    num: "01",
    title: "HomeWorth",
    subtitle: "MACHINE LEARNING & PREDICTIVE ANALYTICS",
    category: "MACHINE LEARNING & WEB APPLICATION",
    sideText: "PREDICT PROPERTY VALUES WITH MACHINE LEARNING",
    year: "2025",
    role: "ML Engineer & Developer",
    tools: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Streamlit",
      "Joblib",
    ],
    image: "/images/house-price-prediction.jpeg",
    description:
      "A machine learning-based house price prediction system that analyzes housing data and applies predictive modeling to estimate property values. The project explores data preprocessing, feature engineering, model training, and evaluation to build a complete predictive analytics workflow.",
    impact:
      "Developed an end-to-end machine learning pipeline using the California Housing Dataset, comparing regression models and evaluating their predictive performance through RMSE and cross-validation.",
    tags: [
      "Machine Learning",
      "Regression",
      "Data Analysis",
      "Predictive Analytics",
    ],
    liveSiteUrl: "https://homeworthh.vercel.app/",
    repositoryUrl: "https://github.com/avadhutgiri12/HousePricePrediction",
    status: "Live",
  },
  {
    id: "02",
    num: "02",
    title: "CareSight AI",
    subtitle: "REAL-TIME FALL DETECTION",
    category: "COMPUTER VISION & AI SAFETY",
    sideText: "DETECT FALLS FASTER. ENABLE TIMELY ALERTS.",
    year: "2025",
    role: "Machine Learning & Full-Stack Developer",
    tools: [
      "Python",
      "YOLOv8",
      "PyTorch",
      "OpenCV",
      "FastAPI",
      "WebSockets",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SMTP Email",
    ],
    image: "/images/fall-detection.jpeg",
    description:
      "A real-time fall detection system for elderly care and safety monitoring. Stream a live webcam or upload a video, and a YOLOv8 pose model tracks each person frame by frame, flags a fall the moment it happens, and emails an alert to a chosen contact. A Next.js dashboard on Vercel talks to a FastAPI + YOLOv8 API on Render over HTTPS and secure WebSockets.",
    impact:
      "Shipped an end-to-end product with a live public demo: real-time webcam detection over WebSockets, batch video analysis with progress tracking, and rate-limited email alerts (one per minute per session). Tuned the ML backend to run on Render's 512 MB free tier with CPU-only PyTorch, serialized inference, streamed uploads and automatic cleanup.",
    tags: [
      "Fall Detection",
      "YOLOv8 Pose",
      "Computer Vision",
      "Real-Time Streaming",
      "Email Alerts",
      "Elderly Care",
    ],
    liveSiteUrl: "https://caresightai.vercel.app",
    repositoryUrl: "https://github.com/avadhutgiri12/fall-detection",
    status: "Live",
  },
];