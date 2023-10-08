import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export default function GradientBlur({ className }: { className?: string }) {
  return (
    <svg
      width={1728}
      height={894}
      viewBox="0 0 1728 894"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        clsx("absolute inset-x-0 top-56 w-auto lg:inset-y-0", className)
      )}
    >
      <g clipPath="url(#clip0_8_95)">
        <g opacity="0.6" filter="url(#filter0_f_8_95)">
          <path
            d="M201.4 582.997H330V342.155L23 501.52L201.4 582.997Z"
            fill="#60A5FA"
            fillOpacity="0.45"
          />
          <path
            d="M330 342.155V284H90H-70L23 501.52L330 342.155Z"
            fill="#7DD3FC"
            fillOpacity="0.8"
          />
          <path
            d="M-70 582.997H201.4L23 501.52L-70 284V582.997Z"
            fill="#F0FDFA"
            fillOpacity="0.5"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_8_95"
          x={-370}
          y={-16}
          width={1000}
          height="898.997"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={150}
            result="effect1_foregroundBlur_8_95"
          />
        </filter>
        <clipPath id="clip0_8_95">
          <rect width={1728} height={894} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
