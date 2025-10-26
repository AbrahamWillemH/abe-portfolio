import Marquee from "react-fast-marquee";
import { GlareCard } from "@/components/ui/GlareCard";
import GinIcon from "../assets/gin-cleaned.svg?react";
import NestIcon from "../assets/NestJS.svg?react";
import FastAPIICon from "../assets/fastapi.svg?react";
import NextIcon from "../assets/nextjs.svg?react";
import GoIcon from "../assets/go.svg?react";
import TSIcon from "../assets/ts.svg?react";
import JSIcon from "../assets/js.svg?react";
import PythonIcon from "../assets/python.svg?react";
import DockerIcon from "../assets/docker.svg?react";
import KubernetesIcon from "../assets/kubernetes.svg?react";
import JenkinsIcon from "../assets/jenkins.svg?react";
import GrafanaIcon from "../assets/grafana.svg?react";
import LogoLoop from "@/components/ui/LogoLoop";

const techLogos = [
  { node: <GoIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <TSIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <JSIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <PythonIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <FastAPIICon />, title: "FastAPI", href: "https://fastapi.tiangolo.com/" },
  { node: <GinIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <NestIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <NextIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <DockerIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <KubernetesIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <JenkinsIcon />, title: "Next.js", href: "https://nextjs.org" },
  { node: <GrafanaIcon />, title: "Next.js", href: "https://nextjs.org" },
];

export default function TechStack() {
  return (
    <div className="flex flex-col gap-10 mx-auto w-full max-w-[1400px] px-8">
      <Marquee
        gradient={false}
        speed={120}
        className="text-white font-extrabold whitespace-nowrap select-none text-[8vw] leading-none overflow-hidden quantico-bold mb-4"
      >
        TECH✷STACK✷TECH✷STACK✷TECH✷STACK✷TECH✷STACK✷
      </Marquee>
      <div style={{ height: '32px', position: 'relative', overflow: 'hidden' }} className="mb-12">
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

      {/* LANGUAGES */}
      <h2 className="quantico-bold text-4xl text-left">
        LANGUAGES
      </h2>
      <div className="grid gap-8 w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-12">
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <GoIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Golang </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Go is an open source programming language that makes it simple to build secure, scalable systems.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <TSIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Typescript </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              TypeScript is a strongly typed programming language that builds on JavaScript, a better tool at any scale.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <JSIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Javascript </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              JavaScript is a high-level, interpreted programming language that is a core technology of the web
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <PythonIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Python </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Python is a programming language that lets you work quickly and integrate systems more effectively.
            </p>
          </div>
        </GlareCard>
      </div>

      {/* FRAMEWORKS */}
      <h2 className="quantico-bold text-4xl text-left">
        FRAMEWORKS
      </h2>
      <div className="grid gap-8 w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mb-12">
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <GinIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Gin </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Gin is a HTTP web framework written in Go designed for building REST APIs, web applications, and microservices
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <NestIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">NestJS </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Nest (NestJS) is a framework for building efficient, scalable Node.js server-side applications.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <FastAPIICon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">FastAPI </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              FastAPI is a modern, fast web framework for building APIs with Python based on type hints.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <NextIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">NextJS </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Next.js is a React framework where you use React components for building full-stack web applications.
            </p>
          </div>
        </GlareCard>
      </div>

      <h2 className="quantico-bold text-4xl text-left">
        DEVOPS
      </h2>
      <div className="grid gap-8 w-full md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <DockerIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Docker </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Docker is a platform designed to help developers build, share, and run container applications.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <KubernetesIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Kubernetes </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Kubernetes is a system for deployment and management of containerized applications.
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <JenkinsIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Jenkins </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Jenkins is an open source automation server to reliably build, test, and deploy their software
            </p>
          </div>
        </GlareCard>
        <GlareCard className="flex flex-col items-center justify-between h-full">
          <div className="flex-1 flex items-center justify-center">
            <GrafanaIcon className="h-32 w-32 text-white" />
          </div>

          <div className="w-full mb-4 p-5">
            <p className="font-bold text-white text-lg">Grafana </p>
            <p className="font-normal text-base text-neutral-200 mt-4">
              Grafana is a multi-platform open source analytics and interactive visualization web application
            </p>
          </div>
        </GlareCard>
      </div>
    </div>
  );
}
