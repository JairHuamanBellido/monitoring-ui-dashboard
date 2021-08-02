import { IconProps } from "./IconProps";

export default function IconDashboard(props: IconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={props.className}
        d="M5.833 0h-2.5A3.333 3.333 0 000 3.333v2.5a3.333 3.333 0 003.333 3.334h2.5a3.333 3.333 0 003.334-3.334v-2.5A3.333 3.333 0 005.833 0zM7.5 5.833A1.667 1.667 0 015.833 7.5h-2.5a1.667 1.667 0 01-1.666-1.667v-2.5a1.667 1.667 0 011.666-1.666h2.5A1.667 1.667 0 017.5 3.333v2.5zM16.667 0h-2.5a3.333 3.333 0 00-3.334 3.333v2.5a3.333 3.333 0 003.334 3.334h2.5A3.333 3.333 0 0020 5.833v-2.5A3.333 3.333 0 0016.667 0zm1.666 5.833A1.667 1.667 0 0116.667 7.5h-2.5A1.667 1.667 0 0112.5 5.833v-2.5a1.667 1.667 0 011.667-1.666h2.5a1.667 1.667 0 011.666 1.666v2.5zM5.833 10.833h-2.5A3.333 3.333 0 000 14.167v2.5A3.333 3.333 0 003.333 20h2.5a3.333 3.333 0 003.334-3.333v-2.5a3.333 3.333 0 00-3.334-3.334zM7.5 16.667a1.667 1.667 0 01-1.667 1.666h-2.5a1.667 1.667 0 01-1.666-1.666v-2.5A1.667 1.667 0 013.333 12.5h2.5A1.667 1.667 0 017.5 14.167v2.5zM16.667 10.833h-2.5a3.333 3.333 0 00-3.334 3.334v2.5A3.333 3.333 0 0014.167 20h2.5A3.333 3.333 0 0020 16.667v-2.5a3.333 3.333 0 00-3.333-3.334zm1.666 5.834a1.667 1.667 0 01-1.666 1.666h-2.5a1.667 1.667 0 01-1.667-1.666v-2.5a1.666 1.666 0 011.667-1.667h2.5a1.666 1.666 0 011.666 1.667v2.5z"
        fill={props.color}
      />
    </svg>
  );
}