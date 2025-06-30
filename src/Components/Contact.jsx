import React, { useRef, useState } from 'react'
import colorUI from "../Common/coolorUi.json"
import emailjs from '@emailjs/browser';
import ArrowUp from "../assets/img/arrow-up.png"
import useAlert from '../Common/useAlert';
import Alert from '../Common/Alert';
import ContactImg from "../assets/img/contact.png"


const Contact = ({color}) => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Deepak Gautam',
          from_email: form.email,
          to_email: 'gautamd35@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [2000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };




  return (
    <section id="contact" className={`${colorUI[color].contentTextColor} ${colorUI[color].darkContentTextColor} dark:text-opacity-80`}>
      <div className="header text-4xl font-semibold text-center my-5">
        Contact US !!
      </div>

      <div className="contactContainer my-5 flex align-middle shadow-md items-center py-2 rounded-lg bg-opacity-60">
        <div className="basis-[40%] ms-auto">
          <img src={ContactImg} alt="contactUs"/>
        </div>
        <div className="basis-[60%]">
          <div className={`contactForm max-w-screen-md h-[100%] w-full shadow-md rounded-lg ${colorUI[color].backgroundSecondaryColor} ${colorUI[color].darkBackgroundSecondaryColor} ${colorUI[color].contentTextColor} ${colorUI[color].darkContentTextColor} bg-opacity-80 my-10 p-10 dark:bg-opacity-25 dark:text-opacity-80`}>
            <form
              className="max-w-lg mx-auto"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className={`block font-bold mb-2`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  className={`w-full px-3 py-2  bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:${colorUI[color].backgroundSecondaryColor} dark:focus:${colorUI[color].darkBackgroundSecondaryColor}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block  font-bold mb-2`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  className={`w-full px-3 py-2  bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:${colorUI[color].backgroundSecondaryColor} dark:focus:${colorUI[color].darkBackgroundSecondaryColor}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`block  font-bold mb-2`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg focus:outline-none focus:${colorUI[color].backgroundSecondaryColor} dark:focus:${colorUI[color].darkBackgroundSecondaryColor}`}
                  required
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className={`${colorUI[color].buttonColor} ${colorUI[color].darkButtonColor} hover:bg-zinc-400 ${colorUI[color].buttonTextColor} ${colorUI[color].darkButtonTextColor} font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline flex flex-row justify-center items-center`}
                  disabled={loading}
                >
                  {/* Send Message */}
                  {loading ? "Sending..." : "Send Message"}
                  <img
                    src={ArrowUp}
                    alt="arrow-up"
                    className="text-xs field-btn_arrow w-[15px] h-[15px] ms-2"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact