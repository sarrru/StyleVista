import "../../css/reservationPage.css";
import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import {useLocation, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const ReservationPage = () => {
    const location = useLocation();
    const currentLocation = location.pathname;

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        persons: "",
        day: "",
        tableId: "",
    });

    const tables = [
        { id: 1, name: "TABLE 1" },
        { id: 2, name: "TABLE 2" },
        { id: 3, name: "TABLE 3" },
        { id: 4, name: "TABLE 4" },
        { id: 5, name: "TABLE 5" },
        { id: 6, name: "TABLE 6" },
        { id: 7, name: "TABLE 7" },
        { id: 8, name: "TABLE 8" },
        { id: 9, name: "TABLE 9" },
        { id: 10, name: "TABLE 10" },
        { id: 11, name: "TABLE 11" },
        { id: 12, name: "TABLE 12" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setFormData({ ...formData, [name]: value });
    };

    const handleTableSelection = (e) => {
        const selectedTableId = parseInt(e.target.value, 10);
        setFormData({ ...formData, tableId: selectedTableId });
    };

    // console.log(formData)

    const handleFormSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8080/reservation/save", formData);
            console.log("Reservation successful:", response.data);
            alert("Table reserved Successfully");
            navigate('/OurMenu');

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error("Server responded with an error status:", error.response.status);
                console.error("Error details:", error.response.data);
                alert("Sorry This Table Is Booked");

            } else if (error.request) {
                // The request was made but no response was received
                console.error("No response received from the server");

            } else {
                // Something happened in setting up the request that triggered an Error
                console.error("Error during request setup:", error.message);

            }

        }
    };


    return (
        <div className={"reservation-page"}>
            <HomeNavbar activePage={currentLocation} />
            <div className={"reserv-text"}>
                <h2>Reservations</h2>
                <h1>Book a table</h1>
            </div>
            <div className={"info-reservation"}>
                <input type={"text"} className={"name_input"} placeholder={"Name"} onChange={(e) => handleInputChange({ target: { name: "name", value: e.target.value } })} />
                <input type={"text"} className={"phno_input"} placeholder={"Phone Number"} onChange={(e) => handleInputChange({ target: { name: "phone", value: e.target.value } })}/>
                <input type={"text"} className={"no_of_people_input"} placeholder={"Number of Persons"} onChange={(e) => handleInputChange({ target: { name: "persons", value: e.target.value } })} />
                <div className={"dropdown"}>
                    <select style={{minWidth:500,height:30}} className={"select-day"} onChange={(e) => handleInputChange({ target: { name: "day", value: e.target.value } })}>
                        <option>Reservation Day</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                    </select>
                </div>
                <div className={"dropdown"}>
                    <select style={{minWidth:500,height:30}} className={"select-Table"} onChange={(e) => handleInputChange({ target: { name: "tableId", value: e.target.value } })}>
                        <option>Select Table</option>
                        {tables.map((table) => (
                            <option key={table.id} value={table.id}>
                                {table.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={handleFormSubmit}>Book Now</button>
            </div>
        </div>
    );
};

export default ReservationPage;