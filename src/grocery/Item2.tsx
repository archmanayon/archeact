import { FieldValues, Form, useForm } from "react-hook-form";

interface Props {
  category: string[];
  onAdd: ({}: FieldValues) => void;
}

const Item2 = ({ category, onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  // console.log(formState.errors['itemName']?.type);
  // prepare the errors long way without formState destructured
  // const itemNameErrors = formState.errors['itemName']?.type ?? null;
  // const quantityErrors = formState.errors['quantity']?.type ?? null;
  // const priceErrors = formState.errors['price']?.type ?? null;
  // console.log(itemNameErrors);
  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          // console.log(data);

          onAdd(data);
        })}
      >
        <label htmlFor="itemName"> Item </label>
        <input {...register("itemName", { required: true, minLength: 3 })} />
        {/* display errors */}
        {errors.itemName?.type == "required"
          ? "Can't Be Blank"
          : errors.itemName?.type == "minLength"
          ? "Must be more than 3 characters"
          : null}

        <br />
        <label htmlFor="quantity"> How Many </label>
        <input
          {...register("quantity", {
            required: true,
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid number",
            },
          })}
        />
        {/* display errors */}
        <>
          {errors.quantity?.type === "required"
            ? "Can't Be Blank"
            : errors.quantity?.type === "pattern"
            ? "Please enter a valid number"
            : null}
        </>

        <br />
        <label htmlFor="price"> How Much </label>
        <input
          {...register("price", {
            required: true,
            pattern: {
              value: /^[0-9]+$/,
              message: "Please enter a valid number",
            },
          })}
        />
        {/* display errors */}
        <>
          {errors.price?.type === "required"
            ? "Can't Be Blank"
            : errors.price?.type === "pattern"
            ? "Please enter a valid number"
            : null}
        </>

        <br />

        <label htmlFor="group">Select Group:</label>
        <select {...register("group")}>
          <option value="">Select...</option>
          {category.map((categ) => (
            <option key={categ} value={categ}>
              {" "}
              {categ}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            return isValid ? "disabled = true" : "disabled = false";
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Item2;
