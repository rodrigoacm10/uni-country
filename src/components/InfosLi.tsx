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
    // text-[#7B7B7B]
    <li className="  md:text-[17px] lit:text-[16px] text-[14px]  text-[#7C05B5]   font-semibold items-center gap-2">
      <p className="flex items-center gap-2">
        <span className="hidden lit:block">{icon}</span> {title}
      </p>
      <p className="text-[#7B7B7B]">{children}</p>
    </li>
  );
}
