import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Listening = (props) => {
    const questionId = props.problem_id;
    const [problems, setProblems] = useState([]);
    //const [answerno, setAnswerno] = useState(props.answerno);

    useEffect(() => {
        axios.get('https://localhost:7056/Question/QuestionList?setTest=1&category=Listening&order=' + questionId).
            then(response => {
                setProblems(response.data);
            });
    }, [questionId]);

    function Problem({ problem }) {
        props.setAnswerno(problem.numberOfQuestion);
        return (
            <div>
                <input type='hidden' id='numberofquestion' value={problem.numberOfQuestion} />
                <input type='hidden' id='no' value={problem.no} />
                <h2>
                    {problem.category}
                </h2>
                <p>
                    <h3>
                        {problem.part}
                    </h3>
                </p>
                <p>
                    <h4>
                        {problem.title}
                    </h4>
                </p>
                <p>
                    <h4>
                        {problem.instruction}
                    </h4>
                </p>
                <p dangerouslySetInnerHTML={{ __html: problem.contents }}>
                </p>
            </div>
        );
    }

    return (
        <>
            <div>
                {problems.map(problem => 
                    (<Problem problem={problem} />))}
            </div>
        </>
    )
}

export default Listening;
