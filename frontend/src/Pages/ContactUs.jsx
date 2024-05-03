import { useState } from "react";
import GetInTouchCategory from "../Component/GetInTouchCategory";
import { toast } from "react-toastify";

const ContactUs = () => {

 const [data,setData]=useState({
    firstName:"",
    email:"",
    phoneNumber:"",
    category:"",
    message:"",
    option: false,
 })

const handleOnChange = (e) => {
  const { name, value, type, checked } = e.target;

  const newValue = type === "checkbox" ? checked : value;

  setData((prev) => ({
    ...prev,
    [name]: newValue,
  }));
};

 
  const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("Form submitted!");
     console.log("Form data:", data);

    try {
      const response = await fetch(`http://localhost:8000/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success(responseData.message);
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="  bg-slate-900 text-white px-4 min-h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="w-[800px] px-4">
          <h1 className="font-extrabold items-center text-center  text-5xl mt-5 py-5">
            Get In Touch With Us
          </h1>
          <p className="text-center sm:text-sm">
            Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt illo tenetur fuga ducimus numquam ea! Lorem ipsum dolor sit
            amet
          </p>
        </div>
      </div>

      <form className="mt-8 mv-16" onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1">
          <div className="flex flex-col p-2">
            <label htmlFor="firstName" className="pb-2">
              First Name{" "}
            </label>
            <input
              type="text"
              id="firstName"
              value={data.firstName}
              name="firstName"
              placeholder="Enter the First name"
              className="bg-slate-200 p-2 text-black"
              required
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="email" className="pb-2">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              placeholder="Enter the Email"
              className="bg-slate-200 p-2 text-black"
              required
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="phoneNumber" className="pb-2">
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              value={data.phoneNumber}
              onChange={handleOnChange}
              name="phoneNumber"
              placeholder="Enter the Phone Number"
              className="bg-slate-200 p-2 text-black"
              required
            />
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="category" className="pb-2">
              Get in Touch With Us
            </label>
            <select
              required
              value={data.category}
              onChange={handleOnChange}
              className="bg-slate-200 p-2 text-black"
              name="category"
            >
              <option value={""}>Select Category</option>
              {GetInTouchCategory.map((el, index) => {
                return (
                  <option value={el.value} key={el.value + index}>
                    {el.label}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex flex-col p-2">
            <label htmlFor="message" className="mt-2">
              Message
            </label>
            <textarea
              className="h-32 resize-none rounded text-black bg-slate-200 "
              rows={3}
              
              value={data.message}
              onChange={handleOnChange}
              id="message"
              name="message"
              placeholder="  Hi We are Lookscout..."
            ></textarea>
          </div>
        </div>

        <div className="p-2">
          <label
            htmlFor="option"
            className="flex cursor-pointer items-start gap-4"
          >
            <div className="flex items-center">
              &#8203;
              <input
                required
                name="option"
                value={data.option}
                onChange={handleOnChange}
                type="checkbox"
                className="size-4 rounded border-gray-300"
                id="option"
              />
            </div>

            <div>
              <strong className="font-medium text-white">
                {" "}
                I agree with Lookscout Privacy Policy{" "}
              </strong>
            </div>
          </label>
        </div>
        <div className="p-2 mb-12">
          <button className="py-3 px-7 bg-blue-500 text-white rounded hover:bg-blue-900">
           Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs