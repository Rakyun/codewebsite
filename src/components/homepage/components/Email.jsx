import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Email = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_danilopablito",
        "template_4qvtp1p",
        form.current,
        "u9BG08vzxqup94kfh",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <div
      id="email"
      className="font-comfortaa text-bold bg-[#EA5880]  p-14 text-white"
    >
      <h1 className="mb-14 text-3xl font-bold md:text-4xl">
        Join our free Trial Class now!
      </h1>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex w-[100%] flex-col md:w-[70%]"
      >
        <h1 className="mb-5 text-2xl">Information</h1>
        <input type="hidden" name="page_name" value={props.pageName} />
        <label>Student's Name</label>
        <input
          type="text"
          name="student_name"
          className="mb-5 rounded-xl p-3 px-4  text-black"
          required
        />
        <label>Student's Age</label>
        <input
          type="number"
          min="1"
          max="90"
          name="student_age"
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Student's School</label>
        <input
          type="text"
          name="student_school"
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <label>Parent's Name</label>
        <input
          type="text"
          name="parent_name"
          className="mb-5 rounded-xl p-3 px-4 text-black"
          required
        />
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div className="w-full md:w-[45%]">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="parent_number"
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
              required
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label>LINE ID</label>
            <input
              type="text"
              name="line_id"
              className="mb-5 w-full rounded-xl px-4 py-3 text-black"
            />
          </div>
        </div>
        <h1 className="my-5 text-2xl font-bold">Available Time to study</h1>
        <label htmlFor="option1" className="text-lg">
          <input
            type="checkbox"
            id="option1"
            name="options[]"
            value="Weekdays"
            className="mb-5 mr-3"
          />
          Weekdays
        </label>

        <label htmlFor="option2" className="text-lg">
          <input
            type="checkbox"
            id="option2"
            name="options[]"
            value="Weekdays After School"
            className="mb-5 mr-3"
          />
          Weekdays After School
        </label>

        <label htmlFor="option3" className="text-lg">
          <input
            type="checkbox"
            id="option3"
            name="options[]"
            value="Saturday Morning"
            className="mb-5 mr-3"
          />
          Saturday Morning
        </label>
        <label htmlFor="option4" className="text-lg">
          <input
            type="checkbox"
            id="option4"
            name="options[]"
            value="Saturday Afternoon"
            className="mb-5 mr-3"
          />
          Saturday Afternoon
        </label>

        <label htmlFor="option5" className="text-lg">
          <input
            type="checkbox"
            id="option5"
            name="options[]"
            value="Sunday Morning"
            className="mb-5 mr-3"
          />
          Sunday Morning
        </label>

        <label htmlFor="option6" className="text-lg">
          <input
            type="checkbox"
            id="option6"
            name="options[]"
            value="Sunday Afternoon"
            className="mb-5 mr-3"
          />
          Sunday Afternoon
        </label>

        <label htmlFor="option7" className="text-lg">
          <input
            type="checkbox"
            id="option7"
            name="options[]"
            value="Anytime"
            className="mb-5 mr-3"
          />
          Anytime
        </label>

        <input
          type="submit"
          value="Submit"
          className="mt-4 w-[200px] cursor-pointer rounded-[50px] bg-[#F7C94B] p-3 hover:opacity-90 active:opacity-50"
        />
      </form>
    </div>
  );
};

export default Email;
