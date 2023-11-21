export default function AppleWatch9() {
  return (
    <>
      <div className="w-full h-[692px] pt-[55px] relative mt-3">
        <img src="/images/watch9text.png" className="mx-auto" alt="watchlogo" />
        <h2 className="text-[26px] font-[400] w-full text-center text-[#f5f5f7] font-[SDM] mt-3">
          보다 똑똑. 보다 또렷. 보다 강력.
        </h2>
        <div className="text-[21px] font-[400] w-full text-center mt-[6px] text-[#2997ff] font-[SDM]">
          <span className="mr-7 cursor-pointer">더 알아보기 &gt;</span>
          <span className="cursor-pointer">구입하기 &gt;</span>
        </div>
        <div className="w-full h-auto ">
          <img
            className="object-none object-bottom h-full absolute top-0 -z-10"
            src="/images/watch9.jpg"
            alt="watch9"
          />
        </div>
      </div>
    </>
  );
}
