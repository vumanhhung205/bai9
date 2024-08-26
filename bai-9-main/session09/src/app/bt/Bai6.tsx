"use client"
import React, { useState } from 'react';
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

type SliderProps = React.ComponentProps<typeof Slider>;

export default function Bai6({ className, ...props }: SliderProps) {
  const [value, setValue] = useState([60]);

  return (
    <div>
        Bai6
      <Slider
        defaultValue={value}
        max={100}
        step={1}
        className={cn("w-[60%]", className)}
        onValueChange={(newValue) => setValue(newValue)}
        {...props}
      />
      <br />
      <b>Value: {value}</b> 
    </div>
  );
}
