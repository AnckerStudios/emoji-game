import { useEffect, useState } from "react";

export default function TimerRoulette() {
    const time = 5000;
    const resolution = 10;
    const size = 400
    const [ticks, setTicks] = useState(time);
  useEffect(() => {
    const interval = setInterval(()=>{
        setTicks(prev => {
            const cur = prev - resolution;
            if (cur <= 0) clearInterval(interval);
            return cur;
        });
    }, resolution);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className=" relative w-full h-full">
      <svg width="100%" height="100%" className=" bg-slate-700">
        <g>
          <rect
            width="94%"
            height="94%"
            rx="5%"
            x="3%"
            y="3%"
            fill="transparent"
            stroke="red"
            strokeWidth="5%"
            strokeDasharray={`400% ${400-400*ticks/time}%`}
            strokeDashoffset={`${-1*(400-400*ticks/time+42)}%`}
            // strokeDashoffset={'-1*'}
            // strokeDasharray={`0 ${400-400*ticks/time} 400`}
            // strokeDashoffset={-35}
            strokeLinecap="round"
          ></rect>
        </g>
      </svg>
      <div className=" absolute top-0 left-0 z-20">
        {ticks}
      </div>
    </div>
  );
}
