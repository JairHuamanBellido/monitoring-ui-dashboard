import { IconProps } from "./IconProps";

export default function IconUser(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#prefix__clip0)">
        <path
          className={props.className}
          d="M6.25 10.833a3.75 3.75 0 110-7.499 3.75 3.75 0 010 7.5zM6.25 5a2.083 2.083 0 100 4.167A2.083 2.083 0 006.25 5zm6.25 14.167v-.417a6.25 6.25 0 00-12.5 0v.417a.833.833 0 001.667 0v-.417a4.583 4.583 0 119.166 0v.417a.833.833 0 001.667 0zM20 15a5.833 5.833 0 00-9.723-4.348.833.833 0 101.112 1.242A4.165 4.165 0 0118.333 15 .833.833 0 0020 15zm-5.417-7.5a3.75 3.75 0 110-7.5 3.75 3.75 0 010 7.5zm0-5.833a2.083 2.083 0 100 4.166 2.083 2.083 0 000-4.166z"
          fill={props.color}
        />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
