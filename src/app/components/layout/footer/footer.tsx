// END OF IMPORTS

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-gradient-to-br from-slate-900 to-slate-700 text-white text-xs font-semibold text-center uppercase tracking-wide leading-normal">
      <section className="w-11/12 max-w-screen-2xl h-full mx-auto flex flex-col gap-2 items-center">
        <h3>application created for educational purposes only</h3>
        <p className="text-amber-500 tracking-widest font-bold">
          by: milica goločorbin
        </p>
        {/* TODO: ADD SOCIAL MEDIA */}
        <p>{new Date().getFullYear()}</p>
      </section>
    </footer>
  );
};

export default Footer;
