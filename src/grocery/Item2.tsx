import { FieldValues, Form, useForm } from "react-hook-form";

  interface Props{    
      onAdd : ({}:FieldValues) => void;
  }

const Item2 = ({onAdd}:Props) => {
  const { register, handleSubmit } = useForm();
  return (
    <div>
      <form onSubmit={handleSubmit((data) => {
        // console.log(data);
        onAdd(data)})}>
        <label htmlFor="itemName"> Item </label>
        <input {...register("itemName")} />
        <br />
        <label htmlFor="quantity"> How Many </label>
        <input {...register("quantity")} />
        <br />
        <label htmlFor="amount"> How Much </label>
        <input {...register("amount")} />
        <br />
        <label htmlFor="group">Select Group:</label>
        <select
          {...register("group")}
        >
          <option value="">Select...</option>
          <option value="Weapons">Weapons</option>
          <option value="Food">Food</option>
          <option value="Others">Others</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default Item2;
