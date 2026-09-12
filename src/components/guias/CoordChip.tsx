export default function CoordChip({ children }: { children: string }) {
  return (
    <code className="inline-block whitespace-nowrap rounded-none border border-border-soft bg-surface-2 px-1.5 py-0.5 font-mono text-[13px] text-accent">
      {children}
    </code>
  );
}
