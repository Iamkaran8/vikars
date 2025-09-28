


// import { useState } from "react";
// import { auth } from "../../firebase/setup";
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

// interface FormData {
//     Name: string;
//     Email: string;
//     Board: string;
//     Location: string;
//     Phone: string;
// }

// export const Form = () => {
//     const [formData, setFormData] = useState<FormData>({
//         Name: "",
//         Email: "",
//         Board: "",
//         Location: "",
//         Phone: ""
//     });

//     // Handle input changes
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value }); // Keep all fields as strings
//     };

//     // Submit form data to Google Sheet
//     // Submit form data to Google Sheet
//     const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();

//         try {
//             // Add Date & Time automatically
//             const date = new Date();
//             const formDataWithTime = {
//                 ...formData,
//                 Date: date.toLocaleDateString(),
//                 Time: date.toLocaleTimeString(),
//             };

//             // Convert to URL encoded form body
//             const body = Object.entries(formDataWithTime)
//                 .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
//                 .join("&");

//             const response = await fetch(
//                 "https://script.google.com/macros/s/AKfycbw38TcByi0hyzwkZNGskVOss6ObGtgVLAk3HV5LAdEnRPEkq2_Yr5ZjeXapXXh195uh/exec",
//                 {
//                     method: "POST",
//                     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//                     body,
//                 }
//             );

//             const data = await response.json();
//             console.log("Google Sheet Response:", data);

//             if (data.status === "success") {
//                 alert(`✅ Hello ${formData.Name}, your details are saved!`);
//                 setFormData({ Name: "", Email: "", Board: "", Location: "", Phone: "" });
//             } else {
//                 alert("⚠️ Something went wrong. Please try again!");
//             }
//         } catch (err) {
//             console.error("Submit Error:", err);
//             alert("❌ Failed to submit data!");
//         }
//     };


//     // Send OTP via Firebase
//     const sendOtp = async () => {
//         try {
//             const phoneNumber = formData.Phone.startsWith("+")
//                 ? formData.Phone
//                 : `+91${formData.Phone}`;
//             const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
//             const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
//             console.log("OTP sent:", confirmation);
//         } catch (err) {
//             console.error("OTP Error:", err);
//         }
//     };

//     return (
//         <div className="cont">
//             <div className="bg-forest rounded-lg flex flex-col lg:flex-row md:flex-col pt-8 px-4 py-4">
//                 {/* Left section */}
//                 <div className="p-8 gap-6 flex flex-col w-full lg:w-1/2 md:w-full">
//                     <h2 className="text-32 text-white font-semibold leading-tight">
//                         Book Your Free Online Demo Class See the Difference in Just 30 Minutes
//                     </h2>
//                     <p className="text-white font-light pt-2">
//                         Personalised 1:1 learning that adapts to your child’s pace. Watch doubts vanish and confidence grow.
//                     </p>
//                     <h3 className="bg-cream inline-flex text-center text-forest font-bold leading-tight p-4 rounded-lg">
//                         Hurry — limited demo slots available today! Trusted by 5,000+ parents across India.
//                     </h3>
//                     <p className="text-white pt-4">
//                         Bonus: Get a free detailed learning report + customised study plan after your trial
//                     </p>
//                 </div>

//                 {/* Right form section */}
//                 <div className="w-full lg:w-1/2 md:w-full md:px-32">
//                     <form onSubmit={handleSubmit} className="flex flex-col justify-center">
//                         <label className="text-white flex flex-col">Name:</label>
//                         <input
//                             className="rounded p-2 text-black text-20"
//                             type="text"
//                             name="Name"
//                             value={formData.Name}
//                             onChange={handleChange}
//                             required
//                         />
//                         <br />

//                         <label className="text-white flex flex-col">Email:</label>
//                         <input
//                             className="rounded p-2 text-black"
//                             type="email"
//                             name="Email"
//                             value={formData.Email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <br />

//                         <div className="flex gap-4">
//                             <label className="text-white flex flex-col w-[48%]">
//                                 Board:
//                                 <input
//                                     className="rounded p-2 text-black"
//                                     type="text"
//                                     name="Board"
//                                     value={formData.Board}
//                                     onChange={handleChange}
//                                 />
//                             </label>

//                             <label className="text-white flex flex-col w-[48%]">
//                                 Location:
//                                 <input
//                                     className="rounded p-2 text-black"
//                                     type="text"
//                                     name="Location"
//                                     value={formData.Location}
//                                     onChange={handleChange}
//                                 />
//                             </label>
//                         </div>
//                         <br />

//                         <label className="text-white flex flex-col">Phone:</label>
//                         <input
//                             className="rounded p-2 text-black"
//                             type="text"
//                             name="Phone"
//                             value={formData.Phone}
//                             onChange={handleChange}
//                         />
//                         <button
//                             type="button"
//                             className="bg-red-100 mt-4 p-2 rounded-[7px] text-black"
//                             onClick={sendOtp}
//                         >
//                             Send OTP
//                         </button>
//                         <div id="recaptcha"></div>
//                         <br />

//                         <div className="flex items-center justify-center">
//                             <button
//                                 type="submit"
//                                 className="flex justify-center bg-[#E95D5C] text-white py-1 px-8 rounded w-max"
//                             >
//                                 Submit
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };



import { useState } from "react";
import { auth } from "../../firebase/setup";
import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from "firebase/auth";

interface FormData {
    Name: string;
    Email: string;
    Board: string;
    Location: string;
    Phone: string;
}

export const Form = () => {
    const [formData, setFormData] = useState<FormData>({
        Name: "",
        Email: "",
        Board: "",
        Location: "",
        Phone: ""
    });

    const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
    const [otp, setOtp] = useState<string>("");
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Submit form data to Google Sheet
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Check if phone is verified before submitting
        if (!verified) {
            alert("⚠️ Please verify your phone number before submitting the form!");
            return;
        }

        try {
            // Add Date & Time automatically
            const date = new Date();
            const formDataWithTime = {
                ...formData,
                Date: date.toLocaleDateString(),
                Time: date.toLocaleTimeString(),
            };

            // Convert to URL encoded form body
            const body = Object.entries(formDataWithTime)
                .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
                .join("&");

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbw38TcByi0hyzwkZNGskVOss6ObGtgVLAk3HV5LAdEnRPEkq2_Yr5ZjeXapXXh195uh/exec",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body,
                }
            );

            const data = await response.json();
            console.log("Google Sheet Response:", data);

            if (data.status === "success") {
                alert(`✅ Hello ${formData.Name}, your details are saved!`);
                setFormData({ Name: "", Email: "", Board: "", Location: "", Phone: "" });
                setOtp("");
                setVerified(false);
                setConfirmationResult(null);
            } else {
                alert("⚠️ Something went wrong. Please try again!");
            }
        } catch (err) {
            console.error("Submit Error:", err);
            alert("❌ Failed to submit data!");
        }
    };

    // Send OTP via Firebase
    const sendOtp = async () => {
        if (!formData.Phone) {
            alert("⚠️ Please enter your phone number!");
            return;
        }

        setLoading(true);
        try {
            const phoneNumber = formData.Phone.startsWith("+")
                ? formData.Phone
                : `+91${formData.Phone}`;

            const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {
                'size': 'invisible'
            });

            const result = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
            setConfirmationResult(result);
            console.log("OTP sent:", result);
            alert("✅ OTP sent to your phone number!");
        } catch (err) {
            console.error("OTP Error:", err);
            alert("❌ Failed to send OTP. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    // Verify OTP
    const verifyOtp = async () => {
        if (!confirmationResult) {
            alert("⚠️ Please send OTP first!");
            return;
        }

        if (!otp) {
            alert("⚠️ Please enter the OTP!");
            return;
        }

        setLoading(true);
        try {
            const result = await confirmationResult.confirm(otp);
            console.log("Phone verification successful:", result);
            setVerified(true);
            alert("✅ Phone number verified successfully!");
        } catch (err) {
            console.error("OTP Verification Error:", err);
            alert("❌ Invalid OTP. Please try again!");
        } finally {
            setLoading(false);
        }
    };

    return (

        <div className="bg-forest  pt-8 px-4 py-4" id="contact_us">
            <div className="cont flex flex-col lg:flex-row lg:px-10 px-3">
                {/* Left section */}
                <div className="p-8 gap-6 flex flex-col w-full lg:w-1/2 md:w-full">
                    <h2 className="text-32 text-white font-semibold leading-tight">
                        Book Your Free Online Demo Class See the Difference in Just 30 Minutes
                    </h2>
                    <p className="text-white font-light pt-2">
                        Personalised 1:1 learning that adapts to your child’s pace. Watch doubts vanish and confidence grow.
                    </p>
                    <h3 className="bg-cream inline-flex text-center text-forest font-bold leading-tight p-4 rounded-lg">
                        Hurry — limited demo slots available today! Trusted by 5,000+ parents across India.
                    </h3>
                    <p className="text-white pt-4">
                        Bonus: Get a free detailed learning report + customised study plan after your trial
                    </p>
                </div>

                {/* Right form section */}
                <div className="w-full lg:w-1/2 md:w-full md:px-32">
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                        <label className="text-white flex flex-col">Name:</label>
                        <input
                            className="rounded p-2 text-black text-20"
                            type="text"
                            name="Name"
                            value={formData.Name}
                            onChange={handleChange}
                            required
                        />
                        <br />

                        <label className="text-white flex flex-col">Email:</label>
                        <input
                            className="rounded p-2 text-black"
                            type="email"
                            name="Email"
                            value={formData.Email}
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
                                    name="Board"
                                    value={formData.Board}
                                    onChange={handleChange}
                                />
                            </label>

                            <label className="text-white flex flex-col w-[48%]">
                                Location:
                                <input
                                    className="rounded p-2 text-black"
                                    type="text"
                                    name="Location"
                                    value={formData.Location}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <br />

                        <label className="text-white flex flex-col">Phone:</label>
                        <input
                            className="rounded p-2 text-black"
                            type="text"
                            name="Phone"
                            value={formData.Phone}
                            onChange={handleChange}
                            required
                        />

                        {/* OTP Verification Section */}
                        <div className="mt-4">
                            <button
                                type="button"
                                className="bg-red-100 mt-2 p-2 rounded-[7px] text-black"
                                onClick={sendOtp}
                                disabled={loading || verified}
                            >
                                {loading ? "Sending OTP..." : "Send OTP"}
                            </button>

                            {confirmationResult && !verified && (
                                <div className="mt-4">
                                    <label className="text-white flex flex-col">Enter OTP:</label>
                                    <input
                                        className="rounded p-2 text-black"
                                        type="text"
                                        value={otp}
                                        onChange={(e) => setOtp(e.target.value)}
                                        placeholder="Enter OTP"
                                    />
                                    <button
                                        type="button"
                                        className="bg-green-100 mt-2 p-2 rounded-[7px] text-black"
                                        onClick={verifyOtp}
                                        disabled={loading}
                                    >
                                        {loading ? "Verifying..." : "Verify OTP"}
                                    </button>
                                </div>
                            )}

                            {verified && (
                                <div className="mt-2 p-2 bg-green-100 rounded text-black">
                                    ✅ Phone verified successfully!
                                </div>
                            )}

                            <div id="recaptcha"></div>
                        </div>
                        <br />

                        <div className="flex items-center justify-center">
                            <button
                                type="submit"
                                className={`flex justify-center py-1 px-8 rounded w-max ${verified ? 'bg-[#E95D5C] text-white' : 'bg-gray-400 text-gray-700 cursor-not-allowed'}`}
                                disabled={!verified}
                            >
                                {verified ? "Submit" : "Submit (Verify phone first)"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};