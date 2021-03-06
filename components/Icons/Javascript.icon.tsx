import { SVGProps } from "react";

function JavascriptIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 225 225"
      style={{ fill: "#000" }}
      {...props}
    >
      <g
        fill="none"
        strokeMiterlimit={10}
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
        style={{ mixBlendMode: "normal" }}
      >
        <path d="M0 225.99V0h225.99v225.99z" />
        <path d="M28.125 196.875V28.125h168.75v168.75z" fill="#ffd600" />
        <path
          d="M138.46 154.44c3.243 5.268 6.768 10.316 14.235 10.316 6.272 0 9.563-3.117 9.563-7.43 0-5.16-3.403-6.993-10.303-9.998l-3.783-1.612c-10.917-4.632-18.178-10.435-18.178-22.693 0-11.296 8.648-19.893 22.162-19.893 9.624 0 16.538 3.332 21.525 12.06l-11.784 7.533c-2.592-4.63-5.395-6.454-9.74-6.454-4.435 0-7.243 2.798-7.243 6.454 0 4.52 2.813 6.347 9.305 9.146l3.783 1.612c12.867 5.48 20.123 11.077 20.123 23.658 0 13.556-10.706 20.986-25.078 20.986-14.058 0-22.04-7.055-26.484-15.788zm-54.31.383c2.372 4.247 5.977 7.514 11.16 7.514 4.96 0 7.815-1.959 7.815-9.576v-49.636h15.623v52.036c0 15.783-9.154 22.964-22.523 22.964-12.08 0-20.798-8.184-24.352-15.788z"
          fill="#000001"
        />
      </g>
    </svg>
  );
}

export default JavascriptIcon;
