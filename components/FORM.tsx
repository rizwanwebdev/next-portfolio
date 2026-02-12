"use client";
import { useState } from "react";
import { Button } from "./ui/Button";

const FORM = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      message: formData.get("message"),
    };

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(rawData),
      });

      if (res.ok) {
        form.reset();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 *:flex *:flex-col"
    >
      <fieldset className="relative">
        <input
          type="text"
          id="name"
          placeholder=" "
          className="form-input border px-3 py-3"
          name="name"
          autoComplete="name"
          required
        />
        <label htmlFor="name" className="form-label text-foreground/90">
          Full Name
        </label>
      </fieldset>
      <fieldset className="relative">
        <input
          type="text"
          id="email"
          name="email"
          autoComplete="email"
          placeholder=" "
          required
          className="form-input border px-3 py-3"
        />
        <label htmlFor="email" className="form-label text-foreground/90">
          Email
        </label>
      </fieldset>
      <input type="text" name="company" hidden />
      <fieldset className="relative">
        <textarea
          name="message"
          autoComplete="message"
          id="message"
          aria-label="message"
          className="form-input border px-3 py-3"
          rows={6}
          required
          placeholder=" "
        />
        <label htmlFor="message" className="message-label text-foreground/90">
          Message
        </label>
      </fieldset>
      <fieldset>
        {loading ? (
          <Button submit text="Sending..." variant="primary" />
        ) : (
          <Button submit text="Send" variant="primary" />
        )}
      </fieldset>
    </form>
  );
};

export default FORM;
