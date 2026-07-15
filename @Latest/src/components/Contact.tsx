import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [sent, setSent] = useState(false);

  function submitMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Savora message");
    const message = String(form.get("message") ?? "");
    const body = `From: ${name} (${email})\n\n${message}`;
    window.location.href = `mailto:hello@savora.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    event.currentTarget.reset();
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-heading">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Let’s cook together</span>
          <h2 id="contact-heading">Have a recipe idea or a question?</h2>
          <p>Tell us what you want to cook, share a family favorite, or ask for help finding the right recipe.</p>
          <div className={styles.details}>
            <a href="mailto:hello@savora.example"><span aria-hidden="true">@</span><div><small>Email us</small>hello@savora.example</div></a>
            <div><span aria-hidden="true">⌂</span><div><small>Our kitchen</small>Beirut, Lebanon</div></div>
          </div>
        </div>
        <form className={styles.form} onSubmit={submitMessage}>
          <div className={styles.fieldRow}>
            <label>Name<input name="name" required placeholder="Your name" /></label>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
          </div>
          <label>What can we help with?
            <select name="subject" defaultValue="recipe">
              <option value="recipe">Recipe suggestion</option>
              <option value="question">Cooking question</option>
              <option value="feedback">Product feedback</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>
          <label>Message<textarea name="message" required rows={5} placeholder="Tell us a little more..." /></label>
          <button type="submit">Send message <span aria-hidden="true">→</span></button>
          <p className={styles.status} aria-live="polite">{sent ? "Your email app is ready with the message." : "This form opens your email app so you stay in control."}</p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
