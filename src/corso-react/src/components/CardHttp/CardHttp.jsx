import "./CardHttp.css";

function CardHttp({ title, body, description }) {
  return (
    <>
      <div className="flex flex-col justify-center items-center m-2 bg-white text-slate-600 font-semibold w-1/3 rounded-md shadow-md">
        <img
          alt="img"
          src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
          className=" w-full h-40 object-cover rounded-t-md"
        />
        <div className="p-2">
          <h2 className="text-2xl">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
}

export default CardHttp;
