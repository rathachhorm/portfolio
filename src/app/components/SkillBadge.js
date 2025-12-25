export const skillLogos = {
  html5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "tailwindcss":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  sass: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  typescript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg",
  "node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
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
