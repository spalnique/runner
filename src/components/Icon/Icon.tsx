import { ComponentPropsWithRef } from "react";

import sprite from "../../assets/icons/sprite.svg";

type Props = ComponentPropsWithRef<"svg"> & { id: string; size?: number };

const Icon = ({ id, size = 24, ...Props }: Props) => {
  return (
    <svg width={Props.width ?? size} height={Props.height ?? size} {...Props}>
      <use href={`${sprite}#${id}`}></use>
    </svg>
  );
};
export default Icon;
