//
// interfaces
//
export type IconRestaurantProperties = {
  className?: string;
  size?: number;
};

//
// component
//
export function IconRestaurant(props: IconRestaurantProperties) {
  //
  // constants
  //
  const { className = "text-restaurants-950", size = 2.5 } = props;

  //
  // render
  //

  /*
    This comment is used for force tailwind smart build
      w-2.5 h-2.5
      w-4 h-4
      w-6 h-6
      w-8 h-8
  */
  return (
    <svg
      className={`w-${size} h-${size} ${className}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 128 128"
    >
      <g
        transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="none"
      >
        <path d="M135 1003 c-74 -80 -85 -181 -26 -245 11 -11 27 -36 36 -55 15 -31 15 -47 1 -192 -9 -87 -16 -166 -16 -174 0 -41 66 -62 105 -33 18 13 18 20 6 142 -26 255 -29 225 23 303 35 52 46 78 46 107 -1 79 -67 174 -121 174 -18 0 -38 -10 -54 -27z" />
        <path d="M1159 983 c-55 -47 -69 -91 -69 -234 0 -115 2 -127 21 -145 24 -21 23 -42 -6 -173 -21 -97 -18 -123 18 -135 21 -8 35 -7 55 5 l27 15 3 347 c1 211 -1 347 -7 347 -5 0 -24 -12 -42 -27z" />
        <path d="M590 976 c-72 -15 -138 -54 -190 -113 -70 -79 -85 -121 -85 -243 0 -94 3 -111 28 -161 34 -70 109 -142 185 -177 48 -23 71 -27 147 -27 82 0 97 3 157 33 66 32 144 105 172 161 44 86 46 244 5 329 -28 57 -111 142 -165 170 -39 20 -138 43 -178 41 -12 0 -46 -6 -76 -13z m202 -100 c53 -25 110 -84 138 -141 28 -59 32 -161 7 -218 -46 -106 -152 -177 -263 -177 -72 0 -166 41 -207 90 -55 65 -72 109 -72 190 0 66 5 83 31 130 33 58 103 120 158 138 45 16 164 9 208 -12z" />
        <path d="M617 859 c-115 -28 -187 -120 -187 -239 0 -205 231 -319 394 -194 67 51 91 102 91 194 0 88 -23 140 -80 188 -55 45 -151 68 -218 51z" />
      </g>
    </svg>
  );
}
