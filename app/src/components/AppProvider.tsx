"use client";
interface Props {
  children: React.ReactNode;
}
export default function AppProvider({ children }: Props) {
  return <div style={{ height: "100%" }}>{children}</div>;
}
