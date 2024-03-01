import "../css/editEvents.css"
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import AdminSidebar from "./adminSidebar.tsx";

const EditEvent=()=>{

    const navigate = useNavigate();

    const useApiCall = useMutation({
        mutationKey:["POST_EVENT_ADMINEVENT"],
        mutationFn:(payload:any)=>{
            console.log(payload)
            return axios.post("http://localhost:8080/event/save",payload)
        },onSuccess: () => {
            reset();
            navigate("/AdminEvent");
        }
    })

    const onSubmit=(value:any)=>{
        useApiCall.mutate(value)
    }

    //To update
    const{pk_id} = useParams();

    const{data:getByIdApi}=useQuery({
        queryKey:["GET_BY_ID_EVENT_API"],
        queryFn(){
            return axios.get("http://localhost:8080/event/getById/"+pk_id)
        },enabled:!!pk_id
    })

    //hitting server on port 8081
    const{register,
        handleSubmit,
        formState
        ,reset}=useForm({values:getByIdApi?.data});

    const{errors} = formState;

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <AdminSidebar activePage={currentLocation} />
            <div className="edit-category-modal" >
                <div className="edit-event-modal-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h2>Edit Event</h2>

                        <div className={"event-type-id"}>
                            <label>ID: {pk_id}</label>
                        </div>
                        <div className={"event-name-box"}>
                            <label>Event Name</label>
                            <input type={"text"} placeholder={"Enter Category Name"} {...register("eventName",{required:"Category Name is required!!"})}/>
                            <h6 style={{paddingLeft:"3px"}}>{errors?.name?.message}</h6>
                        </div>
                        <div className={"edit-event-image-price"}>
                            <div className={"event-modal-time"}>
                                <label>Image: </label>
                                <input type={"text"}
                                       className={"event-modal-time-input"}{...register("eventImage", {required: "Please provide the arrival time!!"})}/>
                                <h6 style={{paddingLeft: "3px"}}>{errors?.eventTime?.message}</h6>
                            </div>
                            <div className={"event-modal-guests"}>
                                <label>Price: </label>
                                <input type={"number"}
                                       className={"event-modal-guests-input"}{...register("eventPrice", {required: "Number of guest is required!!"})}/>
                                <h6 style={{paddingLeft: "3px"}}>{errors?.noOfGuest?.message}</h6>
                            </div>
                        </div>
                        <div className={"edit-description-box"}>
                            <label>Description</label>
                            <input type={"text"} placeholder={"Enter Category Name"} {...register("eventDescription",{required:"Category Name is required!!"})}/>
                            <h6 style={{paddingLeft:"3px"}}>{errors?.name?.message}</h6>
                        </div>
                        <div className={"category-name-add-btn2"}>
                            <button type={"submit"} >Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditEvent;