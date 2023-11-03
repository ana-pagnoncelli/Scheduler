// import React from "react";
// import { Typography } from "@mui/material";

// export function Schedule() {
//   // type ScheduleHour = {
//   //   hour: string;
//   //   number_of_spots: string;
//   //   available_spots: string;
//   // };

//   // type ScheduleDay = {
//   //   day: string;
//   //   hours_schedule: ScheduleHour[];
//   // };

//   // const schedule_list: ScheduleDay[] = [
//   //   {
//   //     day: "2021-03-02",
//   //     hours_schedule: [
//   //       {
//   //         hour: "13",
//   //         number_of_spots: "2",
//   //         available_spots: "2"
//   //       },
//   //       {
//   //         hour: "14",
//   //         number_of_spots: "2",
//   //         available_spots: "1"
//   //       },
//   //       {
//   //         hour: "15",
//   //         number_of_spots: "2",
//   //         available_spots: "0"
//   //       },
//   //       {
//   //         hour: "16",
//   //         number_of_spots: "2",
//   //         available_spots: "1"
//   //       },
//   //       {
//   //         hour: "17",
//   //         number_of_spots: "2",
//   //         available_spots: "2"
//   //       }
//   //     ]
//   //   },
//   //   {
//   //     day: "2021-03-03",
//   //     hours_schedule: [
//   //       {
//   //         hour: "13",
//   //         number_of_spots: "2",
//   //         available_spots: "2"
//   //       },
//   //       {
//   //         hour: "14",
//   //         number_of_spots: "2",
//   //         available_spots: "1"
//   //       },
//   //       {
//   //         hour: "15",
//   //         number_of_spots: "2",
//   //         available_spots: "0"
//   //       },
//   //       {
//   //         hour: "16",
//   //         number_of_spots: "2",
//   //         available_spots: "1"
//   //       },
//   //       {
//   //         hour: "17",
//   //         number_of_spots: "2",
//   //         available_spots: "2"
//   //       }
//   //     ]
//   //   }
//   // ];

//   return (
//     <>
//       <h1>My Schedule</h1>
//       <Typography paragraph>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//         tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus
//         non enim praesent elementum facilisis leo vel. Risus at ultrices mi
//         tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
//         tellus. Convallis convallis tellus id interdum velit laoreet id donec
//         ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
//         suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod
//         quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
//         proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras
//         tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum
//         varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt.
//         Lorem donec massa sapien faucibus et molestie ac.
//       </Typography>
//       <Typography paragraph>
//         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//         ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
//         integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
//         lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
//         Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//         vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
//         accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
//         Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
//         senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
//         Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
//         maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
//         aliquam ultrices sagittis orci a.
//       </Typography>

//       <h1>Schedule a class</h1>
//       <Typography paragraph>
//         Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
//         ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum
//         integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi
//         lacus sed viverra tellus. Purus sit amet volutpat consequat mauris.
//         Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
//         vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra
//         accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac.
//         Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique
//         senectus et. Adipiscing elit duis tristique sollicitudin nibh sit.
//         Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra
//         maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
//         aliquam ultrices sagittis orci a.
//       </Typography>
//     </>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
  price: number
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "2020-01-05",
        customerId: "11091700",
        amount: 3
      },
      {
        date: "2020-01-02",
        customerId: "Anonymous",
        amount: 1
      }
    ]
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {row.name}
        </TableCell>
        <TableCell align='right'>{row.calories}</TableCell>
        <TableCell align='right'>{row.fat}</TableCell>
        <TableCell align='right'>{row.carbs}</TableCell>
        <TableCell align='right'>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout='auto' unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant='h6' gutterBottom component='div'>
                History
              </Typography>
              <Table size='small' aria-label='purchases'>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align='right'>Amount</TableCell>
                    <TableCell align='right'>Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component='th' scope='row'>
                        {historyRow.date}
                      </TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell align='right'>{historyRow.amount}</TableCell>
                      <TableCell align='right'>
                        {Math.round(historyRow.amount * row.price * 100) / 100}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, 3.99),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, 4.99),
  createData("Eclair", 262, 16.0, 24, 6.0, 3.79),
  createData("Cupcake", 305, 3.7, 67, 4.3, 2.5),
  createData("Gingerbread", 356, 16.0, 49, 3.9, 1.5)
];

export function Schedule() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
