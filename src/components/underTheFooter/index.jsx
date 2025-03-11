import React from "react";

const UnderTheFooter = () => {
  const newsData = [
    {
      id: 1,
      title: "Название новости",
      date: "12 января 2023",
      image: "https://s3-alpha-sig.figma.com/img/dd5d/2abc/f8a4bcf10b82da08505264d931f74076?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mj-Yp1fmew6v7X41UglZMmFYnooNLU4p601326YjYJFrU1G~BLr5EaXj94Lxgjgcx0q46--lpG~xc-j8Mf8WV2UPXV4i4p6U4VxA8d8FPGl4VcTGb3NKnXUPNEbHE2zfHrJGXfE5FOv9DQB8Bfoh7Tl6oXoIUPjpz3V2H6wRAdV5Wvb0RsJYNCS1Y7xCG3arG-9cRC7rRV-EaLO5V4wLkJWlPcqndm6ujMlkg8UJ9aRLC0hq6w306BaF-s6X96TZuIGcS5kW-Hvtj3~41dHn~TJOaZydwMWDUn2FJEeSIZx7VdlrOQV-nqjziZG-aXAn3RoigedE0RpKvFIH9Vwt5A__",
    },
    {
      id: 2,
      title: "Название новости",
      date: "12 января 2023",
      image: "https://s3-alpha-sig.figma.com/img/dd5d/2abc/f8a4bcf10b82da08505264d931f74076?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mj-Yp1fmew6v7X41UglZMmFYnooNLU4p601326YjYJFrU1G~BLr5EaXj94Lxgjgcx0q46--lpG~xc-j8Mf8WV2UPXV4i4p6U4VxA8d8FPGl4VcTGb3NKnXUPNEbHE2zfHrJGXfE5FOv9DQB8Bfoh7Tl6oXoIUPjpz3V2H6wRAdV5Wvb0RsJYNCS1Y7xCG3arG-9cRC7rRV-EaLO5V4wLkJWlPcqndm6ujMlkg8UJ9aRLC0hq6w306BaF-s6X96TZuIGcS5kW-Hvtj3~41dHn~TJOaZydwMWDUn2FJEeSIZx7VdlrOQV-nqjziZG-aXAn3RoigedE0RpKvFIH9Vwt5A__",
    },
    {
      id: 3,
      title: "Название новости",
      date: "12 января 2023",
      image: "https://s3-alpha-sig.figma.com/img/dd5d/2abc/f8a4bcf10b82da08505264d931f74076?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mj-Yp1fmew6v7X41UglZMmFYnooNLU4p601326YjYJFrU1G~BLr5EaXj94Lxgjgcx0q46--lpG~xc-j8Mf8WV2UPXV4i4p6U4VxA8d8FPGl4VcTGb3NKnXUPNEbHE2zfHrJGXfE5FOv9DQB8Bfoh7Tl6oXoIUPjpz3V2H6wRAdV5Wvb0RsJYNCS1Y7xCG3arG-9cRC7rRV-EaLO5V4wLkJWlPcqndm6ujMlkg8UJ9aRLC0hq6w306BaF-s6X96TZuIGcS5kW-Hvtj3~41dHn~TJOaZydwMWDUn2FJEeSIZx7VdlrOQV-nqjziZG-aXAn3RoigedE0RpKvFIH9Vwt5A__",
    },
    {
      id: 4,
      title: "Название новости",
      date: "12 января 2023",
      image: "https://s3-alpha-sig.figma.com/img/dd5d/2abc/f8a4bcf10b82da08505264d931f74076?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mj-Yp1fmew6v7X41UglZMmFYnooNLU4p601326YjYJFrU1G~BLr5EaXj94Lxgjgcx0q46--lpG~xc-j8Mf8WV2UPXV4i4p6U4VxA8d8FPGl4VcTGb3NKnXUPNEbHE2zfHrJGXfE5FOv9DQB8Bfoh7Tl6oXoIUPjpz3V2H6wRAdV5Wvb0RsJYNCS1Y7xCG3arG-9cRC7rRV-EaLO5V4wLkJWlPcqndm6ujMlkg8UJ9aRLC0hq6w306BaF-s6X96TZuIGcS5kW-Hvtj3~41dHn~TJOaZydwMWDUn2FJEeSIZx7VdlrOQV-nqjziZG-aXAn3RoigedE0RpKvFIH9Vwt5A__",
    },
  ];
  return (
    <div>
      <section className=" bg-gray-100">
        <div className="max-w-[1440px] w-[95%] max-[320px]:w-[90%] py-10 mx-auto flex flex-col lg:flex-row gap-8">
  
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Новости</h2>
            <p className="text-gray-700 mb-6">
              Торговое или промышленное предприятие, торгово-промышленное
              объединение предпринимателей, форма организации предприятия, при
              которой его правосубъектность отличается от правосубъектности лиц,
              в нем участвующих. Компании имеют статус юридического лица.
            </p>
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600 transition">
              ПЕРЕЙТИ К НОВОСТЯМ
            </button>
          </div>


          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white shadow-lg rounded-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{news.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderTheFooter;
