import data from '../data/data.json'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 text-white text-center p-4 text-2xl bg-black font-bold">
      <h1>{data.header}</h1>
    </header>
  );
}
