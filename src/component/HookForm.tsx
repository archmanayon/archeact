import { FieldValues, useForm } from "react-hook-form";

const HookForm = () => {
  const {register, handleSubmit, formState:{errors}} = useForm(); console.log(errors);
  const handleData = (data:FieldValues) =>console.log(data);
  return (
    <div>
      <form onSubmit={handleSubmit(handleData)}>        
        <label htmlFor="name">Name</label>
        <input {...register('name', {required:true, minLength:3})} name="name" />
        {errors.name?.type === 'required' && <p className="text-danger">Cannot be Blank</p>}
        {errors.name?.type === 'minLength' && <p className="text-danger">At lease 3 characters</p>}
      </form>
    </div>
  );
};

export default HookForm;
