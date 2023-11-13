import { useParams } from "react-router-dom";

function ThankYou() {
  const { data } = useParams();
  return (
    <div>
      <p className="font-bold text-xl pt-4">Register for Wizard Tech</p>
      <p className=" text-md pt-4">You're now registerd to Wizard Tech</p>
      <p className=" text-md pt-4">we sent more detailes to {data}</p>
    </div>
  );
}

export default ThankYou;
