import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./studentList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";

import DeleteIcon from '@mui/icons-material/Delete';

import { getAllUsers, clearErrors, deleteUser } from "../actions/studentAction";

import { useNavigate } from "react-router-dom";



const StudentList = () => {
  const dispatch = useDispatch();
 const navigate=useNavigate()
  const alert = useAlert();

  const { error, users } = useSelector((state) => state.allUsers);

  const {
    error: deleteError,
    isDeleted,
    message,
  } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    dispatch(deleteUser(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success(message);
      navigate("/all-students");
      dispatch({ type: 'DELETE_USER_RESET' });
    }

    dispatch(getAllUsers());
  }, [dispatch, alert, error, deleteError,navigate, isDeleted, message]);

  const columns = [
  

    {
      field: "email",
      headerName: "Email",
      minWidth: 200,
      flex: 1,
    },

    {
        field: "rollNo",
        headerName: "RollNO",
        minWidth: 200,
        flex: 1,
      },
    
  

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        rollNo: item.rollNo,
        email: item.email,
      
      });
    });

  return (
    <Fragment>
    

      <div className="dashboard">
        
        <div className="productListContainer">
          <h1 id="productListHeading">ALL STUDENTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={9}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default StudentList;