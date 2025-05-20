"use client"
import React from "react";
import TextBox from "@/components/input/TextBox";
import { InputsType, inputs } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useForm,
  SubmitHandler
} from "react-hook-form";
import Button from "@/components/Button";


const Validation: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<InputsType>({
    resolver: zodResolver(inputs)
  });

  const onSubmit: SubmitHandler<InputsType> = (
    data
  ) => console.log(data)

  console.log("errors", errors);

  return (
    <div>
      <section>
        React Hook Formと
        Zodを使用してformを作成
      </section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>必須項目</p>
        <div className="py-2">
          <TextBox register={register} name={"characterLimited"} />
          {errors.characterLimited && (
            <p className="text-red-500 text-sm mt-1">
              {errors.characterLimited.message}
            </p>
          )}
        </div>
        <Button type="submit">送信</Button>
      </form>

    </div>
  );
};

export default Validation;
