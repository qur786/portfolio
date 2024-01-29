export function Footer(): JSX.Element {
  return (
    <div className="h-72 pt-8">
      <h5 className="text-primary font-semibold text-2xl static bottom-0 text-center py-12">
        Thanks for visiting!
      </h5>
      <div className="flex flex-row justify-center gap-8">
        <button>Back to top</button>
        <button>Send message</button>
        <button>Give me a call</button>
      </div>
    </div>
  );
}
