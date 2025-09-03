export function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      id="x"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M13 1 1 13M1 1l12 12"></path>
      </g>
    </svg>
  );
}
