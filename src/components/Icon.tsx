import React from "react";
import { ReactComponent as LocationIcon } from "@assets/svg/icons/location.svg";
import { ReactComponent as TravelIcon } from "@assets/svg/icons/travel.svg";
import { ReactComponent as BuildingIcon } from "@assets/svg/icons/building.svg";
import { ReactComponent as LocationRecommandIcon } from "@assets/svg/icons/location-recommand.svg";
import { ReactComponent as ArrowLeftIcon } from "@assets/svg/icons/arrow-left.svg";
import { ReactComponent as ArrowRightIcon } from "@assets/svg/icons/arrow-right.svg";

import styled from "styled-components";

export type IconName =
  | "location"
  | "travel"
  | "building"
  | "location_recommand"
  | "arrow_left"
  | "arrow_right";

interface IconProps {
  name: IconName;
  color?: string;
  hoverColor?: string; // hover 시 적용할 색상
  size?: number;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps & { className?: string }> = ({
  name,
  color = "currentColor",
  hoverColor = "currentColor",
  size = 24,
  strokeWidth = 1,
  className,
}) => {
  const icons: { [key in IconName]: React.FC<React.SVGProps<SVGSVGElement>> } =
    {
      location: LocationIcon,
      travel: TravelIcon,
      building: BuildingIcon,
      location_recommand: LocationRecommandIcon,
      arrow_left: ArrowLeftIcon,
      arrow_right: ArrowRightIcon,
    };

  const IconComponent = icons[name];

  return (
    <Container className={className}>
      <StyledIcon
        as={IconComponent}
        width={size}
        height={size}
        $color={color}
        $hoverColor={hoverColor}
        $strokeWidth={strokeWidth}
      />
    </Container>
  );
};

export default Icon;

const Container = styled.div``;

const StyledIcon = styled.svg<{
  $color: string;
  $hoverColor: string;
  $strokeWidth: number;
}>`
  stroke: ${(props) => props.$color};
  stroke-width: ${(props) => props.$strokeWidth};

  * {
    stroke: ${(props) => props.$color};
    stroke-width: ${(props) => props.$strokeWidth};
  }

  &:hover {
    stroke: ${(props) => props.$hoverColor}; // hover 시 색상 변경
    * {
      stroke: ${(props) => props.$hoverColor}; // 모든 내부 요소에 적용
    }
  }
`;
