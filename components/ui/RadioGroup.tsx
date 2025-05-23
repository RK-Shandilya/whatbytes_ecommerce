interface RadioOption {
    id: string;
    name: string;
  }
  
  interface RadioGroupProps {
    options: RadioOption[];
    selected: string;
    onChange: (value: string) => void;
    name: string;
    className?: string;
  }
  
  export const RadioGroup = ({ options, selected, onChange, name, className = '' }: RadioGroupProps) => {
    return (
      <div className={`space-y-2 ${className}`}>
        {options.map((option) => (
          <label key={option.id} className="flex items-center cursor-pointer rounded p-1 transition-colors">
            <input
              type="radio"
              name={name}
              checked={selected === option.id}
              onChange={() => onChange(option.id)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="ml-2 text-sm">
              {option.name}
            </span>
          </label>
        ))}
      </div>
    );
  };
  