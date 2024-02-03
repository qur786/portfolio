import { ChangeEventHandler, MouseEventHandler, useState } from "react";

interface MessageDatum {
  name: string;
  email: string;
  message: string;
}

export interface MessageFormProps {
  onSubmit?: (formData: MessageDatum) => void;
}

export function MessageForm({ onSubmit }: MessageFormProps): JSX.Element {
  const [messageData, setMessageData] = useState<MessageDatum>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // @ts-expect-error abc
    grecaptcha.ready(() => {
      // @ts-expect-error abc
      grecaptcha
        .execute("6LcxwmUpAAAAAC0_NxQ7n2rI-AZGF3KuT0D0772d", {
          action: "message-form-submit",
        })
        .then((token: string) => {
          console.log(token);
          onSubmit?.(messageData);
          setMessageData({
            name: "",
            email: "",
            message: "",
          }); // Reset the form
        });
    });
  };

  const handleInputChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e) => {
    setMessageData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
          onChange={handleInputChange}
          value={messageData.name}
          required
          className="dark:bg-[#4a4e4f] bg-[#ecebeb] dark:border dark:border-white text-md font-[500] opacity-75 shadow-inner rounded-md px-2"
        />
        <label htmlFor="email" className="font-bold">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          onChange={handleInputChange}
          value={messageData.email}
          required
          className="dark:bg-[#4a4e4f] bg-[#ecebeb] dark:border dark:border-white text-md font-[500] opacity-75 rounded-md px-2"
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
          onChange={handleInputChange}
          value={messageData.message}
          required
          className="dark:bg-[#4a4e4f] bg-[#ecebeb] dark:border dark:border-white text-md font-[500] opacity-75 rounded-md px-2 resize-none"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="dark:text-black-elevation-1 text-white py-1 self-end mt-2 font-bold transition-transform hover:scale-110 rounded-md bg-sky-400 w-1/3"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
