"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks, socials } from "../data/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="sticky top-0 z-50 flex items-center justify-between border-b border-slate-200/70 bg-[#f7f9fb]/85 pb-3 backdrop-blur-md"
        suppressHydrationWarning
      >
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-tight text-slate-700" aria-label="Home">
          <div
            className="relative h-12 w-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-2 ring-slate-100"
            suppressHydrationWarning
          >
            <Image
              src={`${basePath}/assets/logo.ico`}
              alt="Logo"
              fill
              sizes="48px"
              className="object-contain p-2"
            />
          </div>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-slate-700 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#7f5af0]"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-3 text-slate-500">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-slate-200 bg-white text-xs font-semibold uppercase tracking-wide transition hover:border-[#7f5af0] hover:text-[#7f5af0]"
              >
                {social.icon ? (
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={24}
                    height={24}
                    className="object-contain p-1"
                  />
                ) : (
                  <span className="grid h-full w-full place-items-center">{social.label[0]}</span>
                )}
              </a>
            ))}
          </div>
        </nav>
        <button
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-[#7f5af0] hover:text-[#7f5af0] md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="relative flex h-5 w-6 items-center justify-center">
            <span
              className={`absolute h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                open ? "rotate-45" : "translate-y-[-6px]"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                open ? "-rotate-45" : "translate-y-[6px]"
              }`}
            />
          </span>
        </button>
      {open ? (
        <div className="md:hidden">
          <div className="fixed inset-0 z-40 bg-slate-900/20 backdrop-blur-sm transition-opacity" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 z-50 overflow-y-auto bg-white p-5 sm:inset-x-0 sm:bottom-auto sm:top-16 sm:mx-auto sm:max-h-[75vh] sm:w-full sm:max-w-lg sm:rounded-2xl sm:border sm:border-slate-200 sm:shadow-2xl">
            <div className="flex items-center justify-between gap-3 pb-3">
              <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <Image
                  src={`${basePath}/assets/logo.ico`}
                  alt="Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-1.5"
                />
              </div>
              <button
                type="button"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-700 shadow-sm transition hover:border-[#7f5af0] hover:text-[#7f5af0]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rotate-45 rounded-full bg-current" />
                  <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 -rotate-45 rounded-full bg-current" />
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-2 text-sm font-medium text-slate-700">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block w-full rounded-lg px-3 py-2 text-left transition hover:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 border-t border-slate-100 pt-3 text-slate-500">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-slate-200 bg-white text-xs font-semibold uppercase tracking-wide transition hover:border-[#7f5af0] hover:text-[#7f5af0]"
                  >
                    {social.icon ? (
                      <Image
                        src={social.icon}
                        alt={social.label}
                        width={24}
                        height={24}
                        className="object-contain p-1"
                      />
                    ) : (
                      <span className="grid h-full w-full place-items-center">
                        {social.label[0]}
                      </span>
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
      </header>
    </>
  );
}
