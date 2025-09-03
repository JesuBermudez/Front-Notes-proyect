export function ChkeckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="13"
      id="check"
      {...props}
    >
      <path
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 1 6 12 1 7"
      ></path>
    </svg>
  );
}
