import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  width = "auto",
  height = "auto",
  className,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default Image;

const StyledImage = styled.img<{
  width: number | string;
  height: number | string;
}>`
  width: ${(props) =>
    typeof props.width === "number" ? `${props.width}px` : props.width};
  height: ${(props) =>
    typeof props.height === "number" ? `${props.height}px` : props.height};
  object-fit: cover;
`;
