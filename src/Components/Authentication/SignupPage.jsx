import "./SignupPage.css";
import user from "../../assets/user.webp";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from 'react';

const SignupPage = () => {
    const schema = z.object({
        name: z.string().min(3 ,{message:"Name must be atleast 3 characters"}),
        email: z.string().email({message:"Please enter valid email"}),
        password: z.string().min(8 ,{message:"Password must be atleast 8 characters"}),
        cpassword: z.string(),
        address: z.string().min(15,{message:"Address must be atleast 15 characters"})
    }).refine(dataObj => dataObj.password === dataObj.cpassword ,
        {
            message: "Confirm password does not match password",
            path: ["cpassword"]
        }
    
    )
    const [profilepic, setProfilePic] = useState(null);

    const {register,handleSubmit,formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    });
    const submitData = formData => console.log(formData);
    
    console.log(profilepic);
    return (
        <section className='align_center form_page'>
            <form className='authentication_form signup_form' onSubmit={handleSubmit(submitData)} >
                <h2>SignUp Form</h2>

                <div className='image_input_section'>
                    <div className='image_preview'>
                        <img src={profilepic ? URL.createObjectURL(profilepic) : user} id='file-ip-1-preview' />
                    </div>
                    <label htmlFor='file-ip-1' className='image_label'>
                        Upload Image
                    </label>
                    <input type='file' onChange={e => setProfilePic(e.target.files[0])}
                         id='file-ip-1' 
                         className='image_input' 
                    />
                </div>

                {/* Form Inputs */}
                <div className='form_inputs signup_form_input'>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <input
                            id='name'
                            className='form_text_input'
                            type='text'
                            {...register("name")}
                            placeholder='Enter your name'
                        />
                       {
                        errors.name && 
                        <em className="form_errors">{errors.name.message}</em>
                        }
                    </div>

                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            id='email'
                            className='form_text_input'
                            type='email'
                            placeholder='Enter your email address'
                            {...register("email")}
                        />
                        {
                        errors.email &&
                        <em className="form_errors">{errors.email.message}</em>
                        }
                    </div>

                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            id='password'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter your password'
                            {...register("password")}
                        />
                        {
                        errors.password &&
                        <em className="form_errors">{errors.password.message}</em>
                        }
                    </div>

                    <div>
                        <label htmlFor='cpassword'>Confirm Password</label>
                        <input
                            id='cpassword'
                            className='form_text_input'
                            type='password'
                            placeholder='Enter confirm password'
                            {...register("cpassword")}
                        />
                        {
                        errors.cpassword &&
                        <em className="form_errors">{errors.cpassword.message}</em>
                        }
                    </div>

                    <div className='signup_textares_section'>
                        <label htmlFor='address'>Delivery Address</label>
                        <textarea
                            id='address'
                            className='input_textarea'
                            placeholder='Enter delivery address'
                            {...register("address")}
                        />
                        {
                        errors.address &&
                        <em className="form_errors">{errors.address.message}</em>
                        }
                    </div>
                </div>

                <button className='search_button form_submit' type='submit'>
                    Submit
                </button>
            </form>
        </section>
    );
};

export default SignupPage;

// name - Name should be at least 3 characters.
// email - Please enter valid email
// password - Password must be at least 8 characters.
// confirmPassword - Confirm Password does not match Password
// deliveryAddress - Address must be at least 15 characters.
