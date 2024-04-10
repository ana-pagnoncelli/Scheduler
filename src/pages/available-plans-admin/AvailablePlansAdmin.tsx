// import React from "react";
// import { Typography } from "@mui/material";
// import { AvailablePlanApp, AvailablePlanBox, ItemPlanBox } from "./styles";

// type Plan = { name: string; text: string; price: number };

// const availablePlansList: Plan[] = [
//   {
//     name: "Daily",
//     text: "Usage: You pay only the day you want, for one hour class.",
//     price: 40
//   },
//   {
//     name: "Monthly - one time per week",
//     text: "Usage: You pay monthly, for one hour class per week.",
//     price: 60
//   },
//   {
//     name: "Monthly - two times per week",
//     text: "Usage: You pay monthly, for one hour class two times a week.",
//     price: 90
//   }
// ];

// // TODO: If admin, add/edit/remove plan
// // Create in the backend and retrieve it

// export function AvailablePlansAdmin() {
//   return (
//     <AvailablePlanApp>
//       <AvailablePlanBox>
//         <Typography variant='h3'> Available plans </Typography>
//         {availablePlansList.map((plan) => (
//           <ItemPlanBox>
//             <legend>{plan.name}</legend>
//             {plan.text}
//             <br />
//             Price: ${plan.price}
//           </ItemPlanBox>
//         ))}
//       </AvailablePlanBox>
//     </AvailablePlanApp>
//   );
// }

import * as React from "react";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AvailablePlanApp, AvailablePlanBox } from "./styles";
import { tableHeadItemStyle, tableHeadStyle } from "../styles";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export function AvailablePlansAdmin() {
  return (
    <AvailablePlanApp>
      <AvailablePlanBox>
        <Typography variant='h3'> Available plans </Typography>
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableHead style={tableHeadStyle}>
              <TableRow>
                <TableCell style={tableHeadItemStyle} align='center'>
                  Name
                </TableCell>
                <TableCell style={tableHeadItemStyle} align='center'>
                  Description
                </TableCell>
                <TableCell style={tableHeadItemStyle} align='center'>
                  Price
                </TableCell>
                <TableCell style={tableHeadItemStyle} align='center'>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell align='center'>{row.name}</TableCell>
                  <TableCell align='center'>{row.calories}</TableCell>
                  <TableCell align='center'>{row.fat}</TableCell>
                  <TableCell align='center'>{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AvailablePlanBox>
    </AvailablePlanApp>
  );
}
