import {useState} from "react";

export default function Counter() {
  let [temp, setCount] = useState(20);
  const [color, setColor] = useState("bg-white");

  function handleCount(mode) {
    mode ? setCount(++temp) : setCount(--temp);
    return handleColor(temp);
  }

  function handleColor(temp) {
    if (temp < 0) {
      setColor("bg-blue-900");
    } else if (temp >= 0 && temp <= 15) {
      setColor("bg-blue-400")
    } else if (temp > 15 && temp <= 25) {
      setColor("bg-white")
    } else if (temp > 25 && temp <= 35) {
      setColor("bg-yellow-600")
    } else if (temp > 35) {
      setColor("bg-red-600")
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <Button text="&#9650;" action={() => handleCount(true)} styles="bg-red-700 rounded text-white hover:bg-red-800 transition duration-300" />
      <div className={color + " py-8 px-8 rounded-full w-40 h-40 flex justify-center items-center text-4xl"}><span className="font-thin mr-2">{temp}</span><span className="font-thin">°C</span></div>
      <Button text="&#9660;" action={() => handleCount(false)} styles="bg-blue-300 rounded text-white hover:bg-blue-400 transition duration-300" />
    </div>
  );
}

function Button({ text, action, styles }) {
  return <button onClick={action} className={styles}>{text}</button>;
}
