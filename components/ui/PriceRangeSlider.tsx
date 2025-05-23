interface PriceRangeSliderProps {
    min: number;
    max: number;
    value: number[];
    onChange: (value: number[]) => void;
    className?: string;
}
  
  export const PriceRangeSlider = ({ min, max, value, onChange, className = '' }: PriceRangeSliderProps) => {
    return (
      <div className={`space-y-2 ${className}`}>
        <input
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={(e) => onChange([value[0], parseInt(e.target.value)])}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-sm">
          <span>${value[0]}</span>
          <span>${value[1]}</span>
        </div>
        <style jsx>{`
          .slider::-webkit-slider-thumb {
            appearance: none;
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            box-shadow: 0 0 2px 0 #555;
          }
          
          .slider::-moz-range-thumb {
            height: 20px;
            width: 20px;
            border-radius: 50%;
            background: #3b82f6;
            cursor: pointer;
            border: none;
            box-shadow: 0 0 2px 0 #555;
          }
        `}</style>
      </div>
    );
  };