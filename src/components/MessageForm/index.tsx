export function MessageForm(): JSX.Element {
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
          className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2"
        />
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2"
        />
        <label htmlFor="message" className="font-bold">
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          maxLength={500}
          className="bg-[#616C6F] text-sm font-[500] opacity-75 focus:outline-none rounded-md px-2 resize-none"
        />
      </form>
    </div>
  );
}
