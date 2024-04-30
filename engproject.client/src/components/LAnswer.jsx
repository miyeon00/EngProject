import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


function createData(no) {
    return {
        no: no,
        category: "Listening",
        problem: "",
        input_answer: "",
    };
}

const LAnswer = (props) => {
    const [sumNumber, setSumnumber] = useState(0);
    const answerno = props.answerno;
    
    const rows = [
        //createData('1'),
        //createData('2'),
        //createData('3'),
        //createData('4'),
        //createData('5'),
        //createData('6'),
        //createData('7'),
        //createData('8'),
        //createData('9'),
        //createData('10'),
    ];
    {
        for (var i = 1; i <= answerno; i++) {
            rows.push(createData(i));
        }
    }
    const [answer, setAnswer] = useState(rows);

    const onChangeHandler = (index, event) => {
        let data = [...answer];
        data[index][event.target.name] = event.target.value;
        setAnswer(data);
        console.log(answer);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        setAnswer(createData);
        /*setSumnumber(sumNumber + answerno);*/
    }

    function saveAnswer() {

    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>NO</TableCell>
                            <TableCell>Answer</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.no}
                                </TableCell>
                                <TableCell><input type="text" name="input_answer" value={row.input_answer} onChange={event => onChangeHandler(index, event)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell>
                                <Button variant="contained" color="secondary" onClick={onSubmitHandler}>
                                    SAVE ANSWERS
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </>
    );

}

export default LAnswer;