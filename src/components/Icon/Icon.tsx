import { ComponentPropsWithRef } from "react";

import sprite from "../../assets/icons/sprite.svg";

type Props = ComponentPropsWithRef<"svg"> & { id: string; size?: number };

const Icon = ({ id, size = 24, height, width, ...props }: Props) => {
  return (
    <svg width={width ?? size} height={height ?? size} {...props}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};
export default Icon;
