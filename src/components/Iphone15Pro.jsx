export default function Iphone15Pro() {
  return (
    <>
      <div className="w-full h-[692px] pt-[55px] relative">
        <h1 className="text-[56px] font-[600] w-full text-center text-[#f5f5f7] font-[SF]">
          iPhone 15 Pro
        </h1>
        <h2 className="text-[26px] font-[400] w-full text-center mt-[0px] text-[#f5f5f7] font-[SDM]">
          티타늄. 초강력. 초경량. 초프로.
        </h2>
        <div className="text-[21px] font-[400] w-full text-center mt-[6px] text-[#2997ff] font-[SDM]">
          <span className="mr-7 cursor-pointer">더 알아보기 &gt;</span>
          <span className="cursor-pointer">구입하기 &gt;</span>
        </div>
        <div className="w-full h-auto ">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-10"
            src="/images/15pro.jpg"
            alt="15pro"
          />
        </div>
      </div>
    </>
  );
}
