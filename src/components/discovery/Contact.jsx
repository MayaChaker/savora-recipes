import { useEffect, useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!sent) return undefined;

    const timer = window.setTimeout(() => setSent(false), 5000);
    return () => window.clearTimeout(timer);
  }, [sent]);

  function submitMessage(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const subject = String(form.get("subject") ?? "Savora message");
    const message = String(form.get("message") ?? "");
    const body = `From: ${name} (${email})\n\n${message}`;

    setSent(true);
    event.currentTarget.reset();
    window.location.href = `mailto:hello@savora.example?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className="bg-[#e9efe7] px-[clamp(20px,5vw,56px)] py-[clamp(70px,9vw,115px)]" id="contact" aria-labelledby="contact-heading">
      {sent && (
        <div
          className="fixed top-24 right-5 z-[120] flex w-[min(390px,calc(100%-40px))] items-start gap-3 rounded-2xl border border-[#cbdccf] bg-[#fffdf8] p-4 text-left shadow-[0_18px_50px_rgba(23,60,44,.18)]"
          role="status"
          aria-live="polite"
        >
          <span
            className="grid size-9 shrink-0 place-items-center rounded-full bg-[#e8f1e9] font-bold text-[#246044]"
            aria-hidden="true"
          >
            ✓
          </span>
          <div className="min-w-0 flex-1 pt-0.5">
            <strong className="block text-sm text-[#173c2c]">Message ready</strong>
            <p className="mt-1 text-xs leading-5 text-[#687169]">
              Your email app will open so you can review and send it.
            </p>
          </div>
          <button
            className="grid size-7 shrink-0 place-items-center rounded-full border-0 bg-transparent text-lg text-[#687169] hover:bg-[#f0eee7] hover:text-[#173c2c]"
            type="button"
            onClick={() => setSent(false)}
            aria-label="Dismiss confirmation"
          >
            ×
          </button>
        </div>
      )}

      <div className="mx-auto grid w-full max-w-[1240px] grid-cols-[.82fr_1.18fr] items-center gap-[clamp(45px,8vw,100px)] max-[850px]:grid-cols-1">
        <div className="max-[850px]:text-center">
          <span className="text-xs font-bold tracking-[.14em] text-[#3f8a62] uppercase">Let’s cook together</span>
          <h2 className="mt-2.5 mb-[18px] font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.03] tracking-[-.03em] text-[#173c2c]" id="contact-heading">Have a recipe idea or a question?</h2>
          <p className="max-w-[490px] leading-7 text-[#687169] max-[850px]:mx-auto">Tell us what you want to cook, share a family favorite, or ask for help finding the right recipe.</p>
          <div className="mt-8 grid gap-3 max-[850px]:mx-auto max-[850px]:w-fit max-[850px]:text-left">
            <a className="flex items-center gap-3 text-sm font-semibold text-[#173c2c] no-underline" href="mailto:hello@savora.example"><span className="grid size-[38px] place-items-center rounded-full bg-[#fffdf8] text-[#246044]" aria-hidden="true">@</span><div><small className="mb-0.5 block text-[.62rem] font-medium tracking-[.06em] text-[#687169] uppercase">Email us</small>hello@savora.example</div></a>
            <div className="flex items-center gap-3 text-sm font-semibold text-[#173c2c]"><span className="grid size-[38px] place-items-center rounded-full bg-[#fffdf8] text-[#246044]" aria-hidden="true">⌂</span><div><small className="mb-0.5 block text-[.62rem] font-medium tracking-[.06em] text-[#687169] uppercase">Our kitchen</small>Beirut, Lebanon</div></div>
          </div>
        </div>
        <form className="grid gap-[19px] rounded-[30px] border border-[rgba(23,60,44,.1)] bg-[#fffdf8] p-[clamp(24px,4vw,40px)] shadow-[0_8px_24px_rgba(29,49,37,.08)] max-[520px]:px-[18px] max-[520px]:py-[23px]" onSubmit={submitMessage}>
          <div className="grid grid-cols-2 gap-[15px] max-[520px]:grid-cols-1">
            <label className="grid gap-[7px] text-xs font-bold text-[#173c2c]">Name<input className="w-full rounded-[10px] border border-[#e4e1d8] bg-white px-[14px] py-[13px] text-sm text-[#263028] outline-0 transition focus:border-[#3f8a62] focus:ring-3 focus:ring-[rgba(63,138,98,.12)]" name="name" required placeholder="Your name" /></label>
            <label className="grid gap-[7px] text-xs font-bold text-[#173c2c]">Email<input className="w-full rounded-[10px] border border-[#e4e1d8] bg-white px-[14px] py-[13px] text-sm text-[#263028] outline-0 transition focus:border-[#3f8a62] focus:ring-3 focus:ring-[rgba(63,138,98,.12)]" name="email" type="email" required placeholder="you@example.com" /></label>
          </div>
          <label className="grid gap-[7px] text-xs font-bold text-[#173c2c]">What can we help with?
            <select className="w-full rounded-[10px] border border-[#e4e1d8] bg-white px-[14px] py-[13px] text-sm text-[#263028] outline-0 focus:border-[#3f8a62]" name="subject" defaultValue="recipe">
              <option value="recipe">Recipe suggestion</option>
              <option value="question">Cooking question</option>
              <option value="feedback">Product feedback</option>
              <option value="partnership">Partnership</option>
            </select>
          </label>
          <label className="grid gap-[7px] text-xs font-bold text-[#173c2c]">Message<textarea className="w-full resize-y rounded-[10px] border border-[#e4e1d8] bg-white px-[14px] py-[13px] text-sm text-[#263028] outline-0 focus:border-[#3f8a62]" name="message" required rows={5} placeholder="Tell us a little more..." /></label>
          <button className="flex min-h-12 items-center justify-between rounded-[10px] border-0 bg-[#173c2c] px-[19px] text-xs font-bold text-white" type="submit">Send message <span aria-hidden="true">→</span></button>
          <p className="-mt-[7px] min-h-[19px] text-[.68rem] text-[#687169]">
            Review your message in your email app before sending.
          </p>
        </form>
      </div>
    </section>
  );
}

export default Contact;
