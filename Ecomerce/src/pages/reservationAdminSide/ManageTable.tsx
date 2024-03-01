import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import AdminSidebar from "../adminSidebar.tsx";

import "../../css/ManageTable.css";
import {useMutation, useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useForm} from "react-hook-form";
import {CiEdit} from "react-icons/ci";
import {MdDelete} from "react-icons/md";

const ManageTable = () => {
    const location = useLocation();
    const currentLocation = location.pathname;


    // Fetching data from API
    const{data:tableData,refetch} = useQuery({
        queryKey:["GETDATA"],
        queryFn(){
            return axios.get("http://localhost:8080/manageTable/findAll")
        }
    })


    //Deleting data
    const deleteByIdApi=useMutation(
        {
            mutationKey:["DELETE_BY_ID"],
            mutationFn(id:number){
                return axios.delete("http://localhost:8080/manageTable/delete/"+id);
            },onSuccess(){refetch()}
        }
    )

    return (
        <div className={"manageTable-page"}>
            <div className={"manageTable-left"}>
                <AdminSidebar activePage={currentLocation} />
            </div>

            <div className={"manageTable-right"}>
                <header className={"manageTable-header"}>
                    <h1>Manage Table</h1>
                    <div className={"user-wrapper2"}>
                        <img
                            src={
                                "https://images.pexels.com/photos/14073969/pexels-photo-14073969.jpeg?auto=compress&cs=tinysrgb&w=800"
                            }
                            width={"40px"}
                            height={"40px"}
                            alt={"N"}
                        />
                        <div>
                            <h4>Admin</h4>
                            <small>Super admin</small>
                        </div>
                    </div>
                </header>
                <div className={"manageTable-main-content"}>
                    <div className={"ManageTableMain-content"}>

                        <div className={"table-container2"}>
                            <div className={"card-body2"}>
                                <table className={"table-bordered2"}>
                                    <thead>
                                    <tr>
                                        <th className={"id-box2"}>ID</th>
                                        <th className={"name-box2"}>Table Name</th>
                                        <th className={"Status-box2"}>Status</th>
                                        <th className={"delete-box2"}>Delete</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        tableData?.data.map((i) =>{
                                            return(
                                                <tr key={i?.id}>
                                                    <td>{i?.id}</td>
                                                    <td>{i?.tableName}</td>
                                                    <td>{i?.status}</td>
                                                    <td><button className={"delete-btn2"} onClick={() => {
                                                        // Display confirmation prompt before deletion
                                                        if (window.confirm("Are you sure you want to delete this table?")) {
                                                            deleteByIdApi.mutate(i?.id);
                                                        }
                                                    }}><MdDelete /></button></td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageTable;
