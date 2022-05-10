import React, { useState } from "react";


const Contact = () => {
  // const form = useRef();

  const [data, setData] = useState({
      email:"",
      fullname:"",
      phone:"",
      msg:""
  });

 const inputEvent = (event) =>{
    const {name, value} = event.target;
    setData((preValue)=>{
        return{
          ...preValue,
          [name] : value
        }
    })
 }

const formSubmit = (e) =>{
   e.preventDefault();
   alert("Form submitted successfully");
}

// const sendEmail = (e) => {
//   e.preventDefault();

//   Emailjs.sendForm('service_abhi', 'template_wm67vdf', form.current, 'mJJfDw7U5lN8dgDQc')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
//     // alert("Email send!")
// };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form   onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Full name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your fullname"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                 Phone no.
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={inputEvent}
                  id="exampleFormControlInput1"
                  placeholder="XXXX-XXX-XXX"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                 Message
                </label>
                <textarea
                  className="form-control"
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="button" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
