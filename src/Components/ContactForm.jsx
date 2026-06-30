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

    const formData = new FormData();

    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("projectType", form.project);
    formData.append("message", form.message);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzs7zLs1k2TxrOmaP0n8K-ke-GR6k96HMfgL7eVP7M5CmD6KSGSSNBffyCJgd9pK6k/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors",
        }
      );

      alert("Enquiry Submitted Successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to submit");
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