
const HeroSection = ({
  onSearch
}) => {

  return (

    <header className="bg-black rounded-b-4xl flex flex-col justify-center items-center shadow-xl/20">

      <div className="text-white text-4xl font-extrabold font-serif m-6 mt-10 lg:text-8xl whitespace-nowrap">Find Your Next</div>
      <div className="text-[#c84b2f] text-3xl font-bold font-serif italic mb-10 lg:text-7xl">Favorite dish</div>

      <input type="text" className="bg-white h-14 z-10 w-[50%] border rounded-2xl p-6 shadow-xl/20 mb-30 lg:mb-50"
        placeholder="Search..."
        onChange={onSearch} />
    </header>
  )
}

export default HeroSection
