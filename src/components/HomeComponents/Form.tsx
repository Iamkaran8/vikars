import { useState } from "react"
import { auth } from "../../firebase/setup";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


interface FromData {
    name: string;
    email: string;
    board: string;
    location: string;
    phone: string;


}


export const Form = () => {
    const [formData, setFormData] = useState<FromData>({
        name: "",
        email: "",
        board: "",
        location: "",
        phone: ""
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: name === "phone" ? Number(value) : value, })
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(
            "https://script.google.com/macros/s/AKfycbyynMlNRw0gC4sxYQ1Gy03DzvywhbvnflshLY75tiu40U8hKEBRGndxinDjYI_km7yF/exec",
            {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: `Name=${encodeURIComponent(formData.name)}&Email=${encodeURIComponent(
                    formData.email
                )}&Board=${encodeURIComponent(formData.board)}&Location=${encodeURIComponent(
                    formData.location
                )}&Phone=${encodeURIComponent(formData.phone)}`
            }
        )
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err));

        console.log("Form Submitted:", formData);
        alert(`Hello ${formData.name}, your details are saved!`);
    };

    //// To Send OTP To The Mobile Number
    const sendOtp = async () => {
        try {
            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {})
            const confirmation = signInWithPhoneNumber(auth, "+91 9514179123", recaptcha)
            console.log(confirmation)
        } catch (err) {
            console.error(err)
        }
    }

    return (

        <div className="cont">
            <div className="bg-forest rounded-lg flex flex-col lg:flex-row  md:flex-col   pt-8 px-4 py-4">
                <div className="p-8 gap-6 flex flex-col w-full lg:w-1/2 md:w-full">
                    <div className=" ">
                        <h2 className="text-32 text-white font-semibold leading-tight">
                            Book Your Free Online Demo Class See the Difference in Just 30 Minutes
                        </h2>
                        <p className="text-white font-light pt-2">
                            Personalised 1:1 learning that adapts to your child’s pace. Watch doubts vanish and confidence grow.
                        </p>
                    </div>
                    <div>
                        <h3 className="bg-cream inline-flex text-center text-forest font-bold leading-tight p-4 rounded-lg">
                            Hurry — limited demo slots available today!  Trusted by 5,000+<br /> parents across India.
                        </h3>
                        <p className="text-white pt-4">Bonus: Get a free detailed learning report + customised study plan after your trial</p>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 md:w-full md:px-32">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center" >

                        <label className="text-white flex flex-col  ">
                            Name:

                        </label>
                        <input
                            className="rounded p-2 text-black text-20"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label className="text-white flex flex-col ">
                            Email:

                        </label>
                        <input
                            className="rounded p-2 text-black"

                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <div className="flex gap-4">
                            <label className="text-white flex flex-col w-[48%]">
                                Board:
                                <input
                                    className="rounded p-2 text-black"
                                    type="text"
                                    name="board"
                                    value={formData.board}
                                    onChange={handleChange}
                                />
                            </label>


                            <label className="text-white flex flex-col w-[48%] ">
                                Location:
                                <input
                                    className="rounded p-2 text-black"
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                            </label>

                        </div>
                        <br />

                        <label className="text-white flex flex-col ">
                            Phone:


                        </label>
                        <input
                            className="rounded p-2 text-black"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <button className="bg-red-100 mt-4 p-2 rounded-[7px] text-black" onClick={() => sendOtp()} >Send OTP</button>
                        <div id="recaptcha"></div>
                        <br />

                        <div className="flex items-center justify-center">
                            <button type="submit" className="flex justify-center bg-[#E95D5C] text-white py-1 px-8 rounded w-max ">Submit</button>
                        </div>
                    </form>


                </div>

            </div>
        </div>

    )
}


