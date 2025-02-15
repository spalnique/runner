import { SVGAttributes } from "react";

type IconProps = SVGAttributes<SVGSVGElement> & { id: string; size?: number };

const Icon = ({ id, size = 24, ...props }: IconProps) => {
  return (
    <svg width={props.width ?? size} height={props.height ?? size} {...props}>
      <use href={`../../assets/icons/sprite.svg#${id}`}></use>
    </svg>
  );
};
export default Icon;
