"use client";

import { cn } from "@/lib/utils";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import React from "react";

export type ImageProps = {
  rounded?: string;
  imageClassName?: string;
} & NextImageProps;

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, imageClassName, ...rest } = props;
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={cn(
        "overflow-hidden",
        isLoading && "animate-pulse",
        rounded,
        className
      )}
    >
      <NextImage
        className={cn(
          "my-0 transition-[scale,filter] duration-700",
          isLoading && "scale-[1.02] blur-xl grayscale",
          rounded,
          imageClassName
        )}
        src={src}
        alt={alt}
        loading="lazy"
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  );
};
export default Image;
