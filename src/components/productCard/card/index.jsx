import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import CardItem from "./cardItem";

const Card = ({ text }) => {
  const products = [
    {
      id: 1,
      image:
        "https://s3-alpha-sig.figma.com/img/53e4/bfc1/4a80bc28c83a620aacda487ce0e69f5d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Bj0eIPBhW7ZWVvkdpp1QIxNBHvfFULlGR8nrFE5CNoe9RvDeGoeHXJqq6p7v4Lco6XV6L6O29E7ClKn92-RTHPVPcUNf3yJukIVT1oY1jjBDWteGwRkZuYuZzXGq9fP4AvhfeIUtTBqIGBvlne6d-6mT~4xmk3MaY0K4AmwSInAChykOTJn4kd1GS1i1aTjmhjtlR5XbvPUF7Kc13S76VTZPydgy8uhoPFaWJiVt803X-sVNmSNPOxL0cpvVOO6fl993nlZR5KxSbMISMMnIAI8RDpkm2OmRpZbzPhYSpFz1oLLzprJwQ4GwW5lvwKfVQa4aYSshyHgpqaE52~4kew__",
      title: "Эмаль Condor ПФ-115 жёлтая",
      weight: "1,8 кг",
      price: "500 ₽",
      oldPrice: "720 ₽",
      inStock: true,
    },
    {
      id: 2,
      image:
        "https://s3-alpha-sig.figma.com/img/380c/a44e/cb00b5a55b648b7338a0ccf686c984be?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NtfjSPaKCtEXlxTzcE4Wi8d~xZYU2982PcHM86lm-xT3W-dT~UgZZWTKUp1sdu9r1I8vzY3zwX0ez7YDX6yZUALsgs9QASEdHTSfaX7PCe7jyV8TMWCp5OcjaQlxISrkpQTWeU4aTImp7t~utasEIPcA2Ub5CkPeLDduBzn7OzCg-W43HCq~mcM0Lg547N7Yd0t2f62udQiR9G8-cEh10uJ3J4GtiJ4xZhTcGcfhkabZuZDdxqoLuIErKVB8zvrfu6efrXKU4Q9I97Zbk70DrlZQUxsBhjC4-IBoceSfsGW13~qKyh3wUgRzSETpbGZqwq6Vn-pOtW0IjSS3uAXAjA__",
      title: "Эмаль Condor ПФ-115 жёлтая",
      weight: "1,8 кг",
      price: "500 ₽",
      oldPrice: "720 ₽",
      inStock: true,
    },
    {
      id: 3,
      image:
        "https://s3-alpha-sig.figma.com/img/8a9e/0578/e3e474bcfb19971eb5eeb1c4cb51b593?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=k9T79QRoBeZ-49k~ZNxYuswY2q-mGAxDa1NwZ30b9lOdbP4dCmpBxlaWgWp9wwdyeC0kMb8zshqicsf~WjqSaDKp4JeHukcYkIw~INPpupRmjxhVNB7RgvjBaMiucya5EXEIXMiYOi4qECd1mOjbIco3IOeeU4X72loyZkBiFGVu6f~lIZAqzk-8C5eaonwALIOyCv4EMU3VDcmnzTH2Hbq30PwQKJy9rp0NnkjYjry~cwpFDF-7f~qQe3XGtkwua0OkyAAQn0nhLU5rYiK5lZH4e7W8yTTBZEwCPXkX5hfjI6HB7~3S1Nh0RLdqck-WbWfGwzgDZruuy9rWpzVrNQ__",
      title: "Эмаль Condor ПФ-115 жёлтая",
      weight: "1,8 кг",
      price: "500 ₽",
      oldPrice: "720 ₽",
      inStock: true,
    },
    {
      id: 4,
      image:
        "https://s3-alpha-sig.figma.com/img/0440/825e/bce82c96cc3e1f75e2beca24da07810a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=D9A9RQ~UxpkhC8K7xAa8-hiXfPv1Ke1P7nZVAEfm7HokdZyakRoZDCE6Gf4sfgVQmNRDJXa0up40CVPxFtRkJP3AdxKEg70LhXuXlLOwYuh3TtGDMmKxuuWSAk662Uq2NihKrcamUGNe2CHDm7z4QKAOjA5BkQ8enHF9AS43WtsX6U53L9TWgO17Cx9nUyEj~0bAoFUHKLLdfudEaYBAeWttgpCu6FBt0m1RbtXGCfzyVdLOHpgmFbKU4xEbZb5YvKHLDyMsv7vcuItPdatYvCGY4jWi95jrp6RHVy6t8ZkWpVi8c8TiQYJMfXpKLejE0fzZaa3Zx-HhBL1mOc4mjQ__",
      title: "Эмаль Condor ПФ-115 жёлтая",
      weight: "1,8 кг",
      price: "500 ₽",
      oldPrice: "720 ₽",
      inStock: true,
    },
  ];
  return (
    <>
      <div className="">
        <h2 className="text-2xl font-bold mb-4">{text}</h2>
        <div className="relative  ">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.2}
            pagination
            className="py-4"
            modules={[Pagination]}
            breakpoints={{
              430: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              660: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <CardItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Card;
