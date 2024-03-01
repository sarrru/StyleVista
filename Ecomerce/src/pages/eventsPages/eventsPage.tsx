import HomeNavbar from "../Navbar&Modals/HomeNavbar.tsx";
import { useLocation} from "react-router-dom";
import "../../css/eventsPage.css"
import {useEffect, useState} from "react";
import gsap from "gsap";
import {toast, ToastContainer} from "react-toastify";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {FaRegWindowClose} from "react-icons/fa";


const EventsPage = () =>{

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    const [modalType, setModalType] = useState<string | null>(null);

    const [user, setUser] = useState({
    })
    useEffect(() => {
        const data: any = JSON.parse(localStorage.getItem("userDetails"));
        setUser(data);
    }, [localStorage.getItem("userDetails")]);
    console.log(user?.id)

    const toggleModal = (type: string | null) => {
        setModalType(type);
    };
    const closeModal = () => {
        toggleModal(null);
        reset(); // Reset the form when the modal is closed
    };

    const handleBookClick = (type: string) => {
        toggleModal(type);
    };

    useEffect(() => {
        if (modalType) {
            gsap.from(`.${modalType}-modal`, {
                y: -50,
                duration: 0.4,
                opacity: 0,
            });
        }
    }, [modalType]);

    //Toast
    const reservationSuccess = () =>toast.success('Event Reservation Successful.', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
    });

    const useApiCall = useMutation({
        mutationKey:["POST_EVENT_DATA"],
        mutationFn:(payload:any)=>{
            return axios.post("http://localhost:8080/eventBooking/save",payload)
        },onSuccess: () => {
            reservationSuccess();
            reset();
        }
    })

    const onSubmit = (value) => {
        if (!user || !user.id) {
            console.error("User ID is not available.");
            return;
        }
        const eventId = modalType === 'anniversary' ? 1 : 2;
        const payload = {
            eventDate: value.eventDate,
            eventTime: value.eventTime,
            noOfGuest: value.noOfGuest,
            userId: user.id,
            eventId: eventId,
            specialRequest: value.specialRequest || '', // Assuming specialRequest can be optional
        };

        console.log(payload);
        useApiCall.mutate(payload);
    };


    //hitting server on port 8081
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm();

    const{errors} = formState;

    // Fetching data from API
    const{data:eventData} = useQuery({
        queryKey:["GET_EVENT_DATA"],
        queryFn(){
            return axios.get("http://localhost:8080/event/getAll")
        }
    })

    // Separate anniversary and birthday events
    const anniversaryEvents = eventData?.data.filter(event => event?.eventName === 'Wedding Anniversary') || [];
    const birthdayEvents = eventData?.data.filter(event => event?.eventName === 'Birthday') || [];

    return(
        <>
            <div className={"events-page-div"}>
                <HomeNavbar activePage={currentLocation} />
                <div className={"events-text-div"}>
                    <h1>events<b>.</b></h1>
                </div>
                <div className={"events-main-container"}>
                    {/* Display Anniversary Events */}
                    {anniversaryEvents.map((event, index) => (
                        <div className={"anniversary-div"} key={`anniversary-${index}`}>
                            <div className={"anniversary-img"}>
                                <img src={event?.eventImage} alt={event?.eventName} />
                                <div className={"img-overlay"}></div>
                                <div className={"book-btn"} onClick={() => handleBookClick('anniversary')}>
                                    <h2>BOOK</h2>
                                </div>
                            </div>
                            <div className={"anniversary-info"}>
                                <h1>{event?.eventName}</h1>
                                {/*{event?.eventDescription}*/}
                                <p>Create unforgettable anniversary celebrations with feast! Our user-friendly platform streamlines the planning process, allowing you to personalize every detail, from decorations to invitations.Explore romantic decor options, and customize your celebration with cake and catering choices.</p>
                                <p style={{fontSize:"1.6rem"}}>Rs. {event?.eventPrice}</p>
                                <button onClick={() => handleBookClick('anniversary')}>Book</button>
                            </div>
                        </div>
                    ))}

                    {/* Display Birthday Events */}
                    {birthdayEvents.map((event, index) => (
                        <div className={"birthday-div"} key={`birthday-${index}`}>
                            <div className={"birthday-info"}>
                                <h1>{event?.eventName}</h1>
                                {/*{event?.eventDescription}*/}
                                <p>Celebrate birthdays like never before with our dedicated birthday party planning feature! feast is your go-to companion for creating magical moments that will be cherished forever.Our easy-to-use platform lets you plan your party with cool themes and decorations in a snap.</p>
                                <p style={{fontSize:"1.6rem"}}>Rs. {event?.eventPrice}</p>
                                <button onClick={() => handleBookClick('birthday')}>Book</button>
                            </div>
                            <div className={"birthday-img"}>
                                <img src={event?.eventImage} alt={event?.eventName} />
                                <div className={"img-overlay"}></div>
                                <div className={"book-btn"} onClick={() => handleBookClick('birthday')}>
                                    <h2>BOOK</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={"line2"}></div>
                <div className={"copyright-text"}>
                    <h5>Copyright © 2023/2024 Feast</h5>
                </div>
            </div>

            {modalType && (
                <div className={`${modalType}-modal`}>
                    <div onClick={() => toggleModal(null)} className={`${modalType}-modal-overlay`}></div>
                    <div className={`${modalType}-modal-content`}>
                        <h2>{modalType === 'anniversary' ? 'Wedding Anniversary' : 'Birthday'}</h2>
                        <button className={`close-${modalType}-modal-btn`} onClick={closeModal}>
                            <FaRegWindowClose />
                        </button>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className={"event-modal-date-time-guests"}>
                                <div className={"event-modal-date"}>
                                    <label>Date:</label>
                                    <input
                                        type={"date"}
                                        className={"event-modal-date-input"}
                                        {...register("eventDate", {
                                            required: "Date is required!!",
                                            validate: value => {
                                                const selectedDate = new Date(value);
                                                const currentDate = new Date();
                                                return selectedDate >= currentDate || "Selected date cannot be in the past";
                                            }
                                        })}
                                    />
                                    <h6 style={{ paddingLeft: "3px" }}>{errors?.eventDate?.message}</h6>
                                </div>
                                <div className={"event-modal-time"}>
                                    <label>Arrival Time: </label>
                                    <input type={"time"}
                                           className={"event-modal-time-input"}{...register("eventTime", {required: "Please provide the arrival time!!"})}/>
                                    <h6 style={{paddingLeft: "3px"}}>{errors?.eventTime?.message}</h6>
                                </div>
                                <div className={"event-modal-guests"}>
                                    <label>No. of Guests: </label>
                                    <input
                                        type={"number"}
                                        className={"event-modal-guests-input"}
                                        {...register("noOfGuest", {
                                            required: "Number of guests is required!!",
                                            validate: value => {
                                                return parseInt(value, 10) <= 25 || "Maximum number of guests allowed is 25";
                                            }
                                        })}
                                    />
                                    <h6 style={{ paddingLeft: "3px" }}>{errors?.noOfGuest?.message}</h6>
                                </div>
                            </div>
                            <div className={"event-modal-request"}>
                                <label>Special Request </label>
                                <input type={"text"} className={"event-modal-request-input"} {...register("specialRequest")} />
                            </div>
                            <div className={"event-modal-book-btn"}>
                                <button type={"submit"}>Book</button>
                            </div>
                        </form>


                    </div>
                    <ToastContainer/>
                </div>
            )}
        </>
    )
}

export default EventsPage