import { useEffect, useState } from "react";

export default function TimerRoulette() {
    const time = 5000;
    const resolution = 10;
    const reset = true;
    const strokeWidth = 6;    
    const borderRdius = 15;

    const halfStWidth = strokeWidth/2;
    const rectLength = 400-8*borderRdius-4*strokeWidth+2*borderRdius*Math.PI;

    const [ticks, setTicks] = useState(time);
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
        <path d={`M50,${halfStWidth} h${50-borderRdius-halfStWidth} a${borderRdius},${borderRdius} 0 0 1 ${borderRdius},${borderRdius} v${100-2*borderRdius-strokeWidth} a${borderRdius},${borderRdius} 0 0 1 -${borderRdius},${borderRdius} h-${100-2*borderRdius-strokeWidth} a${borderRdius},${borderRdius} 0 0 1 -${borderRdius},-${borderRdius} v-${100-2*borderRdius-strokeWidth} a${borderRdius},${borderRdius} 0 0 1 ${borderRdius},-${borderRdius} z`}
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
