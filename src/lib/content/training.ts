// Shared training/course data — used by both the Experience page and the
// home page's About block, so the two can never disagree on how many
// programs exist (ISS-013 in the audit: "3 Programs" vs 4 listed items).
import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/icon";
import type { Tech } from "@/lib/tech";

import courseDepi from "@/assets/images/course-depi.jpg";
import courseBackend from "@/assets/images/course-backend.jpg";
import courseEnglish from "@/assets/images/course-english.jpg";

export type Training = {
  title: string;
  subtitle: string;
  desc: string;
  icon: IconName;
  tags: (Tech | string)[];
  status: "Current" | "Completed";
  image: StaticImageData;
};

export const TRAININGS: Training[] = [
  {
    title: "DevOps – DEPI",
    subtitle: "Digital Egypt Pioneers Initiative",
    desc: "In-depth knowledge of DevOps practices and tools — Docker, CI/CD pipelines, containerization, deployment, and operational awareness.",
    icon: "fileEarmarkCode",
    tags: ["Docker", "Jenkins"],
    status: "Current",
    image: courseDepi,
  },
  {
    title: "Backend Development",
    subtitle: "Laravel & Node.js — Self-Learning",
    desc: "Practical training in Laravel and Node.js using PHP, JavaScript, and TypeScript. Focused on building RESTful APIs and backend systems via YouTube and Mahara-Tech.",
    icon: "code",
    tags: ["Laravel", "Node.js", "PHP", "TypeScript"],
    status: "Completed",
    image: courseBackend,
  },
  {
    title: "English Language Training",
    subtitle: "AUC · SYE · CAMP",
    desc: "Completed English language courses at the American University in Cairo (AUC), SYE, and CAMP — focus on professional communication and technical English.",
    icon: "translate",
    tags: ["AUC", "Professional English", "Technical Communication"],
    status: "Completed",
    image: courseEnglish,
  },
];
