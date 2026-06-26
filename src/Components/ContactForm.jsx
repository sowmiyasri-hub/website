import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
 const response = await fetch(
  "https://menspoolwebsite-917433456.development.catalystserverless.com/server/submitEnquiry",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Name: form.name,
      Email: form.email,
      Phone_Number: form.phone,
      Project_Type: form.project,
      Message: form.message,
    }),
  }
);

const result = await response.json();
console.log(result);

      if (result.success) {
        alert("Enquiry Submitted Successfully!");

        setForm({
          name: "",
          email: "",
          phone: "",
          project: "",
          message: "",
        });
      } else {
        alert(result.message || "Submission Failed");
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="bg-white rounded-[30px] shadow-xl p-10">
      <span className="uppercase tracking-[4px] text-cyan-500 font-semibold">
        Contact Form
      </span>

      <h2 className="text-4xl font-bold mt-3 mb-10">
        Request A Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-xl p-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-xl p-4"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border rounded-xl p-4"
          required
        />

        <select
          name="project"
          value={form.project}
          onChange={handleChange}
          className="w-full border rounded-xl p-4"
          required
        >
          <option value="">Select Project Type</option>
          <option value="Residential Pool">Residential Pool</option>
          <option value="Commercial Pool">Commercial Pool</option>
          <option value="Pool Renovation">Pool Renovation</option>
          <option value="Maintenance">Maintenance</option>
          <option value="Water Features">Water Features</option>
        </select>

        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your project..."
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded-xl p-4"
        />

        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-xl text-lg transition"
        >
          Send Enquiry
        </button>
      </form>
    </div>
  );
}

export default ContactForm;