import { useField } from "formik";
// END OF IMPORTS

type Props = {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder: string;
};

const FormControl = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold" htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="bg-transparent bg-slate-700 rounded-md p-2 outline-none"
        autoComplete="off"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <p className="text-xs font-semibold text-red-500">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default FormControl;
