"use client";

import { motion } from "framer-motion";

const Keyword = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#8b5cf6]">{children}</span>
);
const Var = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#0ea5e9]">{children}</span>
);
const Str = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#16a34a]">{children}</span>
);
const Prop = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#e11d48]">{children}</span>
);
const Punct = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[var(--muted-foreground)]">{children}</span>
);
const Bool = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[#f59e0b]">{children}</span>
);

export function CodeCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.6, 0.35, 1] }}
      className="w-full max-w-md overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)] shadow-xl shadow-[var(--primary)]/5"
    >
      <div className="flex items-center gap-3 border-b border-[var(--border)] bg-[var(--muted)]/60 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[11px] text-[var(--muted-foreground)]">
          nut.profile.ts
        </span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-[1.7]">
        <code>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              1
            </span>
            <span>
              <Keyword>const</Keyword> <Var>nut</Var> <Punct>= {"{"}</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              2
            </span>
            <span>
              {"  "}
              <Prop>role</Prop>
              <Punct>:</Punct> <Str>{`"Full-stack Developer"`}</Str>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              3
            </span>
            <span>
              {"  "}
              <Prop>based</Prop>
              <Punct>:</Punct> <Str>{`"Thailand"`}</Str>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              4
            </span>
            <span>
              {"  "}
              <Prop>stack</Prop>
              <Punct>: [</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              5
            </span>
            <span>
              {"    "}
              <Str>{`"Next.js"`}</Str>
              <Punct>,</Punct> <Str>{`"NestJS"`}</Str>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              6
            </span>
            <span>
              {"    "}
              <Str>{`"TypeScript"`}</Str>
              <Punct>,</Punct> <Str>{`"Python"`}</Str>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              7
            </span>
            <span>
              {"  "}
              <Punct>]</Punct>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              8
            </span>
            <span>
              {"  "}
              <Prop>shipping</Prop>
              <Punct>:</Punct> <Bool>true</Bool>
              <Punct>,</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              9
            </span>
            <span>
              <Punct>{"};"}</Punct>
            </span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              {" "}
            </span>
            <span className="text-[var(--muted-foreground)]">{" "}</span>
          </div>
          <div className="flex gap-3">
            <span className="select-none text-[var(--muted-foreground)]/50">
              10
            </span>
            <span>
              <Var>nut</Var>
              <Punct>.</Punct>
              <span className="text-[#ea580c]">build</span>
              <Punct>(</Punct>
              <Str>{`"things people use"`}</Str>
              <Punct>)</Punct>
              <Punct>;</Punct>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="ml-1 inline-block h-3.5 w-1.5 translate-y-0.5 bg-[var(--primary)]"
              />
            </span>
          </div>
        </code>
      </pre>
    </motion.div>
  );
}
