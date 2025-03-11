
const AboutUs = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1440px] max-[320px]:w-[90%]">
      <section className="flex flex-col md:flex-row items-center justify-between rounded-xl mb-10  bg-gray-100">
        <div className="w-full md:w-1/2">
          <img
            src="https://s3-alpha-sig.figma.com/img/e71f/8ad4/a4e05bfda908cbbfcef550c69ecca7e6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LeVWLb0KDXdpOfa7EQrO8lBrvbxCS7k-6v8uhw98tjaaBD15wTH28zfOolGinAby2KCYLvTOTYVC7oNyLlT8Wjboa7xwdESmMTGu6htVH8T7yKlbtuyXMCfohlW-N0OMCre6i7FS3qeLcXJpSgBNUg0KQ-Z~cd82K-pdP1Etb8qDYKqahum8Le6H~ZU9Zs5fZxI~nrkHogucf3kdEg51Dm-~~TdT3ttHs3KqVCC-SOt1TS4rAtLjA1wmFjNH28IhLhsKUgWD1~5g~6rZIoxb2XX3K0StomHy7iwWnCN4BnAIOpAQQ4FUg-o1ApY7HNHrhMj9WrqZ5LrC36jeU9SdMQ__"
            alt="Teamwork"
            className="w-full max-h-[480px] object-cover object-center rounded-lg shadow-lg"
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left mt-6 lg:mt-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">О нас</h2>
          <p className="text-gray-700 mb-4 max-[350px]:text-[14px]    ">
            Торговое или промышленное предприятие, торгово-промышленное
            объединение предпринимателей, форма организации предприятия, при
            которой его правосубъектность отличается от правосубъектности лиц, в
            нем участвующих.
          </p>
          <p className="text-gray-700 mb-6 max-[350px]:text-[14px]">
            Торговое или промышленное предприятие, торгово-промышленное
            объединение предпринимателей, форма организации предприятия.
          </p>

          <button className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition">
            ПЕРЕЙТИ В КАТАЛОГ 
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
