import { SVGAttributes } from "react";

import sprite from "../../assets/icons/sprite.svg";

type IconProps = SVGAttributes<SVGSVGElement> & { id: string; size?: number };

const Icon = ({ id, size = 24, ...props }: IconProps) => {
  return (
    <svg width={props.width ?? size} height={props.height ?? size} {...props}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};
export default Icon;
