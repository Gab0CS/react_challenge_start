import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        placeholder="Contact-Name"/>
        <br />

        <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
        pattern="^[2-9]\d{2}-\d{3}-\d{4}$"
        placeholder="Contact-Phone"/>
        <br />

        <input
        type="text"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="email"/>
        <br />

        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
};
