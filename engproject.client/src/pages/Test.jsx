import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Title from '../components/Title';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import Listening from '../components/Listening';
import LAnswer from '../components/LAnswer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));


const Test = (props) => {
    const location = useLocation();
    const userInfo = location.state;

    const [no, setno] = useState(1); // the number of question
    const [answerno, setAnswerno] = useState(0); // how many answers needed to save

    function goToNextProblem() {
        setno(no + 1);
        console.log(no);
    }

    return (
        <>
            <Title></Title>
            <Box>
                <Grid container spacing={0.5} rowSpacing={1}>
                    <Grid item xs={6}>
                        <Item>
                            <Listening
                                problem_id={no}
                                setAnswerno={setAnswerno}
                            ></Listening>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <LAnswer
                                answerno={answerno}
                            ></LAnswer>
                        </Item>
                    </Grid>
                </Grid>
                <Grid container justifyContent="flex-end">
                    <Grid>
                        <Button variant="outlined" textAlign="right" onClick={goToNextProblem}>Next Question</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default Test