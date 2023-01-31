type Props = {
  children: React.ReactNode;
};

const FormSection = ({ children }: Props) => {
  return (
    <section className="bg-slate-800 text-white rounded-md shadow-xl w-11/12 max-w-xl mx-auto p-8 text-sm">
      {children}
    </section>
  );
};

export default FormSection;
