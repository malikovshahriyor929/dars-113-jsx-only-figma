import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Showcase = () => {
  return (
    <div className=" bg-[#212526] py-5">
      <section className="w-[95%] mx-auto max-w-[1440px] max-[320px]:w-[90%] grid grid-cols-2 max-[470px]:grid-cols-1 max-[470px]:*:min-h-[250px] *:min-h-[500px] min-[832px]:grid-cols-4 gap-4  text-white">
        <div
          className="relative col-span-2 max-[470px]:*:col-span-1  bg-cover bg-center p-6 flex flex-col justify-between"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/4903/fc9f/00d13a53e8ec76a9e387f1bf76b3ffc0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VgMEon3ih~zyBxagbT7YXucAdWzNrId3Ht5giIQNtJoPgeYh8UEmAUwLTR2JbjMc7uQ4A3imza6pe-PVPzO67yR3cJpKtoFAi4JavWQRXVQXCWvcaa4ErzNNIdU4JagWL1FuvZq6bAkdAYKTykXsmbPwAcVAqCKdn1joAi5OLtyVY6AaQjHBfMO7~kFmUJOltnMsjraZlFLpXAicQWn94e~Kt-jKjsyKTeM9TY64RxgQ7efa85qvQvqa5CZ6D10rh3pe09-bdLjgiFjvfvDFUeDoUvDBG86nOt-PVTHnRn6f4vwRvB88bwAyKOGm0uWCaTH-L2Y3gTVEXva1~A1DJg__')",
          }}
        >
          <h1 className="text-3xl font-bold max-[500px]:text-[16px]">
            DeWALT – Инструмент с настоящим характером
          </h1>
          <button className="bg-orange-500 text-white px-6 py-3 max-[500px]:p-[5px_10px] max-[500px]:text-[14px] rounded-md mt-4">
            ПЕРЕЙТИ В КАТАЛОГ
          </button>
        </div>
        <div
          className="relative max-[470px]:col-span-2 bg-cover bg-center p-6 flex flex-col justify-between"
          style={{
            backgroundImage:
              "url('https://s3-alpha-sig.figma.com/img/2d9a/5422/1506c5a0f5aaf7d1b713e9b48e7fac09?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jocfpYzeqIIp4lCNpHWUMjlzZ1My9Vv4X4FS8nBeYWY59GqqTGxBPg-l7akdXSUtCoThMfc16SYagnjPMZSiZxc6e2w93TA0MzqO94dGfl3iCkduKlNO1iu7tF5JC11Ax~c0zxZv-PHraZKWK7S0gudG0lhrlra13WVVeFSr6LtjYyupHP4p-xdT4CUGR9ASBQ8PJ-nDnR2HXoKm6bWBiwrvqHi4gqtfbix8YXRlf-JhqVX6eROWx5r66SdOPEnhkk3TQA-QK-Ys6esIoBtV0JsZxeMc0-Ul5r~vkUVDLql3BK52Dtx4pB6knw3n5xJAa6-Gf4yC7D9CSGaLrIxR1A__')",
          }}
        >
          <span className="text-lg">Акции</span>
          <button className="bg-orange-500 text-white p-3 rounded-full self-start">
            <FaArrowRight />
          </button>
        </div>
        <div className="flex flex-col *:min-h-[240px] max-[470px]:*:min-h-[150px] gap-4">
          <div
            className="relative bg-cover bg-center p-6 flex justify-between items-start"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/6e86/431a/2997dec54bdde055e46692c2652bbeac?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NkFQLF5vhtMuW2V-hNV59jEj0kqD-oPuA8qEXxZ5KUJInpZPB6Q3eS4-g3fAbzqaU4RzAwiFqLfBDf8xOHVpT0qk6QO-9To1Co-~dIai3ulZM2T5PBVQh18qc9Z7miMgyW0TlawFkjZz2R81r47orwguERhRjNo20WEg14A8RuMxew-aTD5ZVtEsNv8s9tZlnmaJ5WJePggfBuZpq7Dza-f1i01hM03NTZpWIKPTZcHf4ILKbPwW6GorrshyWCopO6kLfsfE1xGb7Wdkt6S8rax7GZRmWrueisaSMp~CyFL3XrD0D4abspR5bQLGrBzrcCONRnMO5QrfnrxNTQ19Hg__')",
            }}
          >
            <span className="text-lg">Новое поступление</span>
            <button className="bg-black text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
          </div>
          <div
            className="relative bg-cover bg-center p-6 flex justify-between items-start"
            style={{
              backgroundImage:
                "url('https://s3-alpha-sig.figma.com/img/e8cf/299e/8b9b8ea614c30abecd9e187de096cd65?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FTQr-8PyayKSGrwCao90WFGldC5NnFHbajHSVh-S150ctURc9giCjKf3bUmCQBwQow9aDPrmPGZiqASPLgA2MP-NPVU~Vyf4OkW9iGhccGK8ixxu~3aT-Tl-~4Zu14kAIQwAVBh2m13aWwMv6330ozwnYt4VeuIklZ1IOwfhO8ts5MmwMRf0hXYM51Cn4gBrpVsa0aUUXkAXVn8eS0skAFwSEujHoAsoZEQuP6E0p1H1eIBPhdbCO2Jmn12R9dbhS7Bhw70OYVMBB6gWYtjCSuuuYTWU3Pa-emTV-mRtrXLsny9CaA848MaF0gZ~vQ~LSykIdfm45hkiFkRgp~UvLg__')",
            }}
          >
            <span className="text-lg">Акции на сверла</span>
            <button className="bg-black text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
