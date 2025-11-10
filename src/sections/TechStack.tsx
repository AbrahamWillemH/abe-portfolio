import SkillTree, { Skill } from '@/components/ui/SkillTree';
import Marquee from "react-fast-marquee";
import LogoLoop from '@/components/ui/LogoLoop';
import GinIcon from "../assets/gin-cleaned.svg?react";
import GinNegIcon from "../assets/gin-cleaned-negative.svg?react";
import NestIcon from "../assets/NestJS.svg?react";
import NestNegIcon from "../assets/NestJS-negative.svg?react";
import FastAPIIcon from "../assets/fastapi.svg?react";
import FlaskIcon from "../assets/flask.svg?react";
import FlaskNegIcon from "../assets/flask-negative.svg?react";
import FastAPINegIcon from "../assets/fastapi-negative.svg?react";
import NextIcon from "../assets/nextjs.svg?react";
import NextNegIcon from "../assets/nextjs-negative.svg?react";
import GoIcon from "../assets/go.svg?react";
import GoNegIcon from "../assets/go-negative.svg?react";
import TSIcon from "../assets/ts.svg?react";
import TSNegIcon from "../assets/ts-negative.svg?react";
import JSIcon from "../assets/js.svg?react";
import JSNegIcon from "../assets/js-negative.svg?react";
import PythonIcon from "../assets/python.svg?react";
import PythonNegIcon from "../assets/python-negative.svg?react";
import DockerIcon from "../assets/docker.svg?react";
import DockerNegIcon from "../assets/docker-negative.svg?react";
import KubernetesIcon from "../assets/kubernetes.svg?react";
import KubernetesNegIcon from "../assets/kubernetes-negative.svg?react";
import JenkinsIcon from "../assets/jenkins.svg?react";
import JenkinsNegIcon from "../assets/jenkins-negative.svg?react";
import GrafanaIcon from "../assets/grafana.svg?react";
import GrafanaNegIcon from "../assets/grafana-negative.svg?react";
import ReactIcon from "../assets/react.svg?react";
import ReactNegIcon from "../assets/react-negative.svg?react";

export default function TechStack() {
  const skills: Skill[] = [
    { id: 'skill-0', name: 'JavaScript', icon: JSIcon, iconNegative: JSNegIcon, color: 'from-white to-gray-100', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', dependencies: [] },
    { id: 'skill-1', name: 'TypeScript', icon: TSIcon, iconNegative: TSNegIcon, color: 'from-white to-gray-100', href: 'https://www.typescriptlang.org/', dependencies: ['skill-0'] },
    { id: 'skill-2', name: 'Next.js', icon: NextIcon, iconNegative: NextNegIcon, color: 'from-white to-gray-100', href: 'https://nextjs.org', dependencies: ['skill-1'] },
    { id: 'skill-3', name: 'Go', icon: GoIcon, iconNegative: GoNegIcon, color: 'from-white to-gray-100', href: 'https://golang.org', dependencies: [] },
    { id: 'skill-4', name: 'Python', icon: PythonIcon, iconNegative: PythonNegIcon, color: 'from-white to-gray-100', href: 'https://www.python.org/', dependencies: [] },
    { id: 'skill-5', name: 'FastAPI', icon: FastAPIIcon, iconNegative: FastAPINegIcon, color: 'from-white to-gray-100', href: 'https://fastapi.tiangolo.com/', dependencies: ['skill-4'] },
    { id: 'skill-6', name: 'Gin', icon: GinIcon, iconNegative: GinNegIcon, color: 'from-white to-gray-100', href: 'https://gin-gonic.com/', dependencies: ['skill-3'] },
    { id: 'skill-7', name: 'NestJS', icon: NestIcon, iconNegative: NestNegIcon, color: 'from-white to-gray-100', href: 'https://nestjs.com/', dependencies: ['skill-1'] },
    { id: 'skill-8', name: 'Docker', icon: DockerIcon, iconNegative: DockerNegIcon, color: 'from-white to-gray-100', href: 'https://www.docker.com/', dependencies: ['skill-5', 'skill-6', 'skill-7', 'skill-2', 'skill-12', 'skill-13'] },
    { id: 'skill-9', name: 'Kubernetes', icon: KubernetesIcon, iconNegative: KubernetesNegIcon, color: 'from-white to-gray-100', href: 'https://kubernetes.io/', dependencies: ['skill-8'] },
    { id: 'skill-10', name: 'Jenkins', icon: JenkinsIcon, iconNegative: JenkinsNegIcon, color: 'from-white to-gray-100', href: 'https://www.jenkins.io/', dependencies: ['skill-8'] },
    { id: 'skill-11', name: 'Grafana', icon: GrafanaIcon, iconNegative: GrafanaNegIcon, color: 'from-white to-gray-100', href: 'https://grafana.com/', dependencies: ['skill-9', 'skill-10'] },
    { id: 'skill-12', name: 'React', icon: ReactIcon, iconNegative: ReactNegIcon, color: 'from-white to-gray-100', href: 'https://react.com/', dependencies: ['skill-1'] },
    { id: 'skill-13', name: 'Flask', icon: FlaskIcon, iconNegative: FlaskNegIcon, color: 'from-white to-gray-100', href: 'https://react.com/', dependencies: ['skill-4'] },
  ];

  const positions = [
    { x: 10, y: 5 },    // skill-0
    { x: 10, y: 20 },   // skill-1
    { x: 30, y: 20 },   // skill-2
    { x: 50, y: 5 },    // skill-3
    { x: 90, y: 5 },   // skill-4
    { x: 90, y: 40 },   // skill-5
    { x: 50, y: 20 },   // skill-6
    { x: 25, y: 32.5 },   // skill-7
    { x: 50, y: 40 },   // skill-8
    { x: 35, y: 60 },   // skill-9
    { x: 65, y: 60 },   // skill-10
    { x: 50, y: 80 },   // skill-11
    { x: 10, y: 40 },   // skill-12
    { x: 70, y: 20 },   // skill-12
  ];

  const techLogos = [
    { node: <GoIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <TSIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <JSIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <PythonIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <FastAPIIcon />, title: "FastAPI", href: "https://fastapi.tiangolo.com/" },
    { node: <GinIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <NestIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <NextIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <DockerIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <KubernetesIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <JenkinsIcon />, title: "Next.js", href: "https://nextjs.org" },
    { node: <GrafanaIcon />, title: "Next.js", href: "https://nextjs.org" },
  ];

  return (
    <div className="flex flex-col gap-10 mx-auto w-full max-w-[1400px] px-8">
      <Marquee
        gradient={false}
        speed={120}
        className="text-white font-extrabold whitespace-nowrap select-none text-[17vw] md:text-[8vw] leading-none overflow-hidden quantico-bold mb-4"
      >
        TECH✷STACK✷TECH✷STACK✷TECH✷STACK✷TECH✷STACK✷
      </Marquee>
      <div style={{ height: '38px', position: 'relative', overflow: 'hidden' }} className="mb-12">
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={32}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff00"
          ariaLabel="Technology partners"
        />
      </div>
      <SkillTree skills={skills} positions={positions} />
    </div>
  );
};
