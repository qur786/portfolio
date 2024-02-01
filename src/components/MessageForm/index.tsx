import { MouseEventHandler } from "react";

export function MessageForm(): JSX.Element {
  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // TODO: add logic to send emails
  };
  return (
    <div className="pb-8 pt-6 px-12 flex flex-col gap-4 justify-center items-center">
      <h6 className="font-bold text-xl">Message</h6>
      <form className="flex flex-col w-full gap-2">
        <label htmlFor="name" className="font-bold">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="name"
          required
          className="bg-[#616C6F] text-mdfont-[500] opacity-75 focus:outline-none rounded-md px-2"
        />
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          required
          className="bg-[#616C6F] text-md font-[500] opacity-75 focus:outline-none rounded-md px-2"
        />
        <label htmlFor="message" className="font-bold">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          minLength={10}
          maxLength={500}
          required
          className="bg-[#616C6F] text-mdfont-[500] opacity-75 focus:outline-none rounded-md px-2 resize-none"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="py-1 self-end mt-2 font-bold transition-[transform, letter-spacing] duration-300 hover:tracking-wider hover:scale-105 rounded-md bg-sky-400 w-1/3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
