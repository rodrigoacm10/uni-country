import { ReactNode } from "react";

export function InfosLi({
  children,
  icon,
  title,
}: {
  children: ReactNode;
  icon: string;
  title: string;
}) {
  return (
    <li className="  md:text-[17px] lit:text-[16px] text-[14px] text-[#7B7B7B] font-semibold items-center gap-2">
      <p className="flex items-center gap-2">
        <span className="hidden lit:block">{icon}</span> {title}
      </p>
      {children}
    </li>
  );
}
