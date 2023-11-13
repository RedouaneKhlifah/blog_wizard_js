import { FormEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const email = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value: string = email.current?.value ?? "";
    const data = encodeURIComponent(value);
    navigate(`/Thankyou/${data}`);
  };
  return (
    <div>
      <div>
        <p className="font-bold text-xl pt-4">Register for Wizard Tech</p>

        <p className="text-sm pt-4">
          the north and the Atlantic Ocean to the west, and has land borders
          with Algeria to the east, and the disputed territory of Western Sahara
          to the south. Morocco also claims the Spanish exclaves of Ceuta,
          Melilla and
        </p>
      </div>
      <form action="" onSubmit={handelSubmit}>
        <div className="flex justify-center pt-6">
          <div className=" w-3/6 ">
            <label className="block text-gray-600" htmlFor="">
              Email :
            </label>
            <input
              ref={email}
              className=" mt-2 py-1 pl-2 w-full outline-none focus:outline-none border-[2px] border-gray-300"
              type="text"
            />
            <div className="mt-2">
              <button className="bg-teal-500 text-white w-full font-semibold py-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Register;
