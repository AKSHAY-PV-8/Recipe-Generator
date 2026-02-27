
const HeroSection = ({
  onSearch
}) => {

  return (
    <header className="flex flex-col justify-center items-center m-10">
      <input type="text" className="bg-white h-10 z-10  w-[80%] border rounded-2xl p-6 shadow-xl/20 "
        placeholder="Search..."
        onChange={onSearch} />
    </header>
  )
}

export default HeroSection
