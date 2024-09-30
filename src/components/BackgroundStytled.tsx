export function BackgroundStyled({ white }: { white?: true }) {
  return (
    <>
      <div className="z-10 absolute min-h-screen bg-dot-black/[0.2] top-0 w-full"></div>
      <div
        className={`z-10 min-h-screen top-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] ${
          white ? "bg-white" : "bg-[#f7f7f7] "
        } w-full absolute`}
      ></div>
    </>
  );
}
