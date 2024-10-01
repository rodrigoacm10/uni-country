import { ReactElement } from "react";

export function PrinciInfosLi({
  icon,
  title,
  component,
}: {
  icon: ReactElement;
  title?: string;
  component?: ReactElement;
}) {
  return (
    // text-[#7B7B7B]
    <li className="flex md:text-[18px] text-[16px] text-[#7B7B7B] font-semibold items-center gap-2">
      <span>{icon}</span> {title} {component}
    </li>
  );
}
