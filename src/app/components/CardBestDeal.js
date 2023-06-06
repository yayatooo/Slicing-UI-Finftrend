export default function CardBestDeal({ tittle, desc, price, benefits }) {
  return (
    <div>
      <h1 className="font-bold text-3xl font-effra-reguler">{tittle}</h1>
      <p className="font-normal font-effra-reguler pb-4">{desc}</p>
      <hr className="border-gray-500" />
      <div className="flex items-end py-8">
        <h1 className="font-bold text-6xl font-effra-reguler">{price}</h1>
        <p>/Month</p>
      </div>
      <div className=" flex flex-col gap-y-4">
        <div className="h-[320px] flex flex-col gap-y-4">
          <p className="font-normal font-effra-medium">✅ {benefits}</p>
          <p className="font-normal font-effra-medium">
            ✅ Up to 5 page each group
          </p>
          <p className="font-normal font-effra-medium">
            ✅ Up to 5 page each group
          </p>
          <p className="font-normal font-effra-medium">
            ✅ Up to 5 page each group
          </p>
          <p className="font-normal font-effra-medium">
            ✅ Up to 5 page each group
          </p>
        </div>
      </div>
    </div>
  );
}
