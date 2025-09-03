export function EventCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      id="event"
    >
      <path
        fill="#000"
        fillRule="evenodd"
        d="M4.5 4a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-15Zm0 17V6h15v15h-15Z"
        clipRule="evenodd"
      ></path>
      <path
        fill="#000"
        fillRule="evenodd"
        d="M7 2v3h2V2H7zm8 0v3h2V2h-2zm3.207 8.207-7 7a1 1 0 0 1-1.414 0l-4-4 1.414-1.414 3.293 3.293 6.293-6.293 1.414 1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
