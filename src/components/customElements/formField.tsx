type Option = { id: string; name: string };

export type FormFieldProps = {
  label: string;
  name: string;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  as?: "input" | "select" | "textarea" | "checkbox-group";
  type?: string;
  options?: Option[];
  placeholder?: string;
  dir?: "ltr" | "rtl";
  error?: string;
};

function FormField({
  label,
  name,
  value,
  onChange,
  as = "input",
  type = "text",
  options,
  placeholder,
  dir,
  error,
  ...rest
}: FormFieldProps & Record<string, unknown>) {
  return (
    <div>
      <label className="text-[13px] flex font-semibold text-textcolor mb-1.75">
        {label}
      </label>

      {as === "select" ? (
        <select
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] cursor-pointer"
          {...rest}
        >
          {options?.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
      ) : as === "checkbox-group" ? (
        <div className="grid grid-cols-2 gap-2">
          {options?.map((opt) => {
            const current = Array.isArray(value) ? value : [];
            const isChecked = current.includes(opt.id);
            return (
              <label
                key={opt.id}
                className={`flex items-center justify-center text-center gap-1.5 py-2 px-3 rounded-[11px] text-[13px] cursor-pointer border transition-colors ${
                  isChecked
                    ? "bg-greencolorlight border-primary text-primary font-semibold"
                    : "border-border text-textcolor"
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {
                    const next = isChecked
                      ? current.filter((id) => id !== opt.id)
                      : [...current, opt.id];
                    onChange(next);
                  }}
                  className="hidden"
                />
                {opt.name}
              </label>
            );
          })}
        </div>
      ) : as === "textarea" ? (
        <textarea
          rows={4}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px] leading-[1.9] resize-y"
          {...rest}
        />
      ) : (
        <input
          type={type}
          dir={dir}
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full py-2.75 px-3.25 border border-border rounded-[11px] bg-bginput text-[14px]"
          {...rest}
        />
      )}

      {error && <p className="text-exit text-[12px] mt-1.25">{error}</p>}
    </div>
  );
}

export default FormField;
