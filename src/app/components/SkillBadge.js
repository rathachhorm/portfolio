export const skillLogos = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  springboot:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  mybatisdataaccess: "/assets/skills/mybatis.svg",
  springrestfulwebservice:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  springsecurity:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  jsonwebtoken: "https://cdn.simpleicons.org/jsonwebtokens",
  thymeleafengine: "https://cdn.simpleicons.org/thymeleaf",
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  "c++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  "c#":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  php: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "tailwindcss": "https://cdn.simpleicons.org/tailwindcss",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
  "node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  datamodeling: "https://cdn.simpleicons.org/neo4j/018bff",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "sql(basicsql)": "https://cdn.simpleicons.org/mysql/4479A1",
  linux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "versioncontrol(github)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  gitlab:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg",
  digitalocean: "https://cdn.simpleicons.org/digitalocean",
  kubernetes:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  ansible: "https://cdn.simpleicons.org/ansible",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
  "ui/uxfigma":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  "devops(kubernetes,ansible,jenkins,gitlab,digitalocean)":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  networking: "https://cdn.simpleicons.org/cisco/1BA0D7",
  googlecloud:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
  word: "/assets/skills/word.svg",
  excel: "/assets/skills/excel.svg",
  powerpoint: "/assets/skills/powerpoint.svg",
  figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  jest: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-plain.svg",
  storybook:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg",
};

export default function SkillBadge({ name }) {
  const initials = name.slice(0, 2).toUpperCase();
  const key = name.toLowerCase().replace(/\s+/g, "");
  const icon = skillLogos[key];

  return (
    <span className="inline-flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-white shadow-sm">
        {icon ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={icon}
            alt={name}
            className="h-6 w-6 rounded-md object-contain"
          />
        ) : (
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-[#8c7bff] to-[#00d8ff] text-[11px] font-bold text-white">
            {initials}
          </span>
        )}
      </span>
      {name}
    </span>
  );
}
