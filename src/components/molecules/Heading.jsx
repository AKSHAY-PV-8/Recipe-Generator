export function Heading({
  recipeName
}) {

  let words = [];
  let FirstWords = "";

  if (recipeName != undefined) {
    words = recipeName.split(" ")
  }

  let lastWord = words[words.length - 1];
  let remaingWords = words.slice(0, words.length - 1);

  for (let word of remaingWords) {
    FirstWords = FirstWords + " " + word;
  }

  return (
    <>
      {words?.length == 1 ?
        <>
          <h1 className="text-[#c84b2f] text-4xl font-bold font-serif italic">{lastWord}</h1>
          <hr className="border text-[#c84b2f] w-17" />
        </> :
        <>
          <h1 className="text-black text-4xl font-bold font-serif ">{FirstWords}</h1>
          <h1 className="text-[#c84b2f] text-4xl font-bold font-serif italic">{lastWord}</h1>
          <hr className="border text-[#c84b2f] w-[20%]" />
        </>
      }
    </>

  )
}