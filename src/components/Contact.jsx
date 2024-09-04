import { useState } from 'react';
import Error from '../components/Error';

const Contact = ({ setForm }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [whatsapp, setWhatsApp] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false); // Estado de carga

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePhone = (phone) => /^\d{10,15}$/.test(phone);
    const validateTextOnly = (text) => /^[a-zA-Z\s]+$/.test(text);

    const clearError = () => {
        setError(false);
        setErrorMessage("");
    };

    const validations = [
        { field: firstName, validate: validateTextOnly, message: "First name should contain only letters." },
        { field: lastName, validate: validateTextOnly, message: "Last name should contain only letters." },
        { field: whatsapp, validate: validatePhone, message: "Invalid phone number format. It should contain only digits and be 10 to 15 characters long." },
        { field: email, validate: validateEmail, message: "Invalid email format." },
        { field: city, validate: validateTextOnly, message: "City should contain only letters." },
        { field: country, validate: validateTextOnly, message: "Country should contain only letters." },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([firstName, lastName, whatsapp, email, city, country].includes('')) {
            setErrorMessage("All fields are required.");
            setError(true);
            return;
        }

        for (const { field, validate, message } of validations) {
            if (!validate(field)) {
                setErrorMessage(message);
                setError(true);
                return;
            }
        }

        setError(false);
        setLoading(true);


        setTimeout(() => {
            setLoading(false);
            clearForm();
        }, 3000);
    };

    const clearForm = () => {
        setFirstName('');
        setLastName('');
        setWhatsApp('');
        setEmail('');
        setCity('');
        setCountry('');
    };

    return (
        <div id='contact' className="bg-black flex flex-col justify-center items-center font-nunito pt-10 pb-0">
            <p className='font-toxic text-white text-2xl md:text-4xl py-10'>CONTACT US</p>
            <div className='w-2/3'>
                <form onSubmit={handleSubmit} className="py-10 px-8">
                    <div className="mb-5">
                        <label htmlFor="firstName" className="block text-white uppercase font-bold">
                            First Name:
                        </label>
                        <input
                            id="firstName"
                            type="text"
                            name="firstName"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="lastName" className="block text-white uppercase font-bold">
                            Last Name:
                        </label>
                        <input
                            id="lastName"
                            type="text"
                            name="lastName"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="whatsapp" className="block text-white uppercase font-bold">
                            WhatsApp:
                        </label>
                        <input
                            id="whatsapp"
                            type="text"
                            name="whatsapp"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={whatsapp}
                            onChange={(e) => setWhatsApp(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="block text-white uppercase font-bold">
                            E-mail:
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="city" className="block text-white uppercase font-bold">
                            City:
                        </label>
                        <input
                            id="city"
                            type="text"
                            name="city"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="country" className="block text-white uppercase font-bold">
                            Country:
                        </label>
                        <input
                            id="country"
                            type="text"
                            name="country"
                            placeholder=""
                            className="w-full p-2 mt-2 placeholder-gray-400"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </div>
                    {error && <Error message={errorMessage} clearError={clearError} />}
                    
                    <button
                        type="submit"
                        className="bg-black border hover:bg-green-600 w-full p-3 text-white mt-8 uppercase font-bold cursor-pointer flex items-center justify-center"
                        disabled={loading}
                        >
                        SEND
                        {loading && (
                            <svg
                                className="animate-spin h-5 w-5 mr-3 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v8H4z"
                                />
                            </svg>
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
