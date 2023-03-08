import React,{useState ,useEffect,} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import axios from 'axios';

import styles from './userTable.module.css'

const UsersTable = () => {
  
  localStorage.setItem("userToken","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDQ4OWJhZTk3NDViZmY1ZmVkNWE3MCIsImlzTG9nZ2VkSW4iOnRydWUsImlhdCI6MTY3ODEyMjkzNSwiZXhwIjoxNjc4NzI3NzM1fQ.jfpDX5A8JkOVYXzCeiYYK-MVHGFavTDmB9xoyMWh-tk");
  const [usersData,usersDataState] = useState([]);

 useEffect(() => {
   axios.get('http://localhost:3000/api/v1/admin/allUsers',{headers:{"Authorization": `Bearer ${localStorage.getItem("userToken")}`}}).then((data)=>{

     var test=data.data;
     usersDataState(test); 
   
 }).catch((err)=>{
     console.log("error msg" ,);
   });

 },[usersData]);




const BlockUser = async (param,stateblock)=>{
  try{

    let result = await axios.patch(`http://localhost:3000/api/v1/admin/user/block/${!stateblock}/${param}`,{},{headers:{"Authorization": `Bearer ${localStorage.getItem("userToken")}`}})
    if(result){
      return;
    }
  }catch(err){
    console.log(err);
  }
   
 }
 
 return (

     <div className='{styles.Table } col-lg-10 col-md-9'>
     <h3>All Users</h3>
       <TableContainer className={styles.tableContainer} >

         <Table  >

           <TableHead>

             <TableRow>
 
               <TableCell>User Name</TableCell>
               <TableCell align="left">Email</TableCell>
               <TableCell align="left">Phone</TableCell>
               <TableCell align="left">Role</TableCell>
               <TableCell align="left">Active</TableCell>
               <TableCell align="left">Block</TableCell>

             </TableRow>
           </TableHead>

           <TableBody >

             {usersData.map((row) => (
               <TableRow key={row.product_name} >
                  <TableCell > {row.user_name}</TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">{row.phone}</TableCell>
                  <TableCell align="left">{row.role}</TableCell>
                  <TableCell align="left">{row.active?"True":"False"}</TableCell>
                  <TableCell align="left">
                  <button className={styles.status}  
                   onClick={()=>{
                    const confirmBox = window.confirm("Do you really want to block this user?");
                    if (confirmBox === true) {

                      BlockUser(row._id ,row.isBlocked);
                      }
                    
                    }}>{row.isBlocked===true?"UnBlock":"Block"}


                  </button>
                  </TableCell>
                </TableRow>
             ))}
           </TableBody>
         </Table>
       </TableContainer>
     </div>
 );
};

export default UsersTable;