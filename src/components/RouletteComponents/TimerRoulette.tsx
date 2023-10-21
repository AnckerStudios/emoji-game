import { useEffect, useState } from "react";
interface TimerRouletteProps{
  time: number
  resolution?: number
  strokeWidth?: number
  borderRadius?: number
}

export default function TimerRoulette({time, resolution=10, strokeWidth=6, borderRadius = 15}:TimerRouletteProps) {
    const reset = true;

    const halfStWidth = strokeWidth/2;
    const rectLength = 400-8*borderRadius-4*strokeWidth+2*borderRadius*Math.PI;

    const [ticks, setTicks] = useState<number>(time);
  useEffect(() => {
    const interval = setInterval(()=>{
        setTicks(prev => {
            let cur = prev - resolution;
            if (cur <= 0) 
              if(reset)
                cur = time;
              else
                clearInterval(interval);
            return cur;
        });
    }, resolution);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" relative w-full h-full">
      <svg width="100%" height="100%" viewBox="0,0,100,100" className=" stroke-blue bg-peach">
        <path d={`M50,${halfStWidth} h${50-borderRadius-halfStWidth} a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},${borderRadius} v${100-2*borderRadius-strokeWidth} a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},${borderRadius} h-${100-2*borderRadius-strokeWidth} a${borderRadius},${borderRadius} 0 0 1 -${borderRadius},-${borderRadius} v-${100-2*borderRadius-strokeWidth} a${borderRadius},${borderRadius} 0 0 1 ${borderRadius},-${borderRadius} z`}
        fill="none"
        strokeWidth={`${strokeWidth}%`}
        strokeDasharray={`${rectLength}%`}
        strokeDashoffset={`${-1*(rectLength-rectLength*ticks/time)}%`}
        strokeLinecap="round"
        ></path>
      </svg>
      <div className=" absolute top-0 left-0 z-20">
        {ticks}
      </div>

      
    </div>
  );
}
