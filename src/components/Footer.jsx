import data from '../data/data.json'

export default function Footer() {
  return (
    <footer className="bg-black text-white text-center absolute bottom-0 flex gap-4 py-4 items-center justify-center w-full">
      <Link name={data.name} url={data.url} />
      <Link name={data.author} url={data.authorUrl} />
    </footer>
  )
}

function Link({name, url}) {
  return <a href={url}>{name}</a>
}
