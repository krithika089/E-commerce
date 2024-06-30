import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './LoginPage.css';
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
    const schema = z.object({
        email: z.string().email({message:"Enter minimum of 3 characters"}).min(3),
        password: z.string().min(8)
    });

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    });
    const onSubmit = (formData) => console.log(formData);

    return(
        <section className="align_item login_form">
            <form className="authentication_form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Login Form</h2>
                <div className="form_inputs">
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email"
                             id="email"
                             className="form_text_input"
                             placeholder="Enter your email address"
                             {...register("email")}
                        />
                        {
                                errors.email &&
                                <em className="form_errors">{errors.email.message}</em>
                        }
                       
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" 
                            id="password"
                            className="form_text_input" 
                            placeholder="Enter your password"
                            {...register("password")}
                        />
                        {
                                errors.password &&
                                <em className="form_errors">{errors.password.message}</em>
                        }
                    </div>
                    {/* <button onClick={() => passwordRef.current.type == "password"}>Hide Password</button>
                    <button onClick={() => passwordRef.current.type == "text"}>Show Password</button> */}
                    <button type="submit" className="search_button form_submit">Submit Form</button>
                </div>
            </form>
        </section>
    );
}
export default LoginPage;