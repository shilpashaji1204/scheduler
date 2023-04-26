import React, { useState } from "react";

import 'components/Appointment/styles.scss';
import useVisualMode from "hooks/useVisualMode";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Error from "./Error";
import Confirm from "./Confirm";


export default function Appointment(props) {

    const EMPTY = "EMPTY";
    const SHOW = "SHOW";
    const CREATE = "CREATE";
    const SAVING = "SAVING";
    const DELETE = "DELETE";
    const CONFIRM = "CONFIRM";
    const EDIT = "EDIT";
    const ERROR_SAVE = "ERROR_SAVE";
    const ERROR_DELETE = "ERROR_DELETE";

    const [interview, setInterview] = useState(props.interview);

    const { mode, transition, back } = useVisualMode(
        props.interview ? SHOW : EMPTY
    );

    function save(name, interviewer) {
        const newInterview = {
          student: name,
          interviewer
        };
        transition(SAVING);
        props.bookInterview(props.id, newInterview)
        .then(() => {
            setInterview(newInterview);
            transition(SHOW);
        })
        .catch(() => {
            transition(ERROR_SAVE, true);
        });
     }

     function deleteInterview() {
        transition(DELETE, true);
        props.cancelInterview(props.id)
        .then (() => {
            setInterview(null);
            transition(EMPTY);
        })
        .catch(() => {
            transition(ERROR_DELETE, true);  
        });
    }
    function edit() {
        transition(EDIT);
    }
    return (
        <article className="appointment">
            <Header time={props.time} />
            {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
            {mode === SHOW && (
                <Show
                    student={props.interview.student}
                    interviewer={props.interview.interviewer}
                    onDelete={() => transition(CONFIRM)}
                    onEdit={() => edit()}
                />
            )}

            {mode === CREATE && (
                <Form 
                interviewers={props.interviewers} 
                onCancel={() => back()} 
                onSave={save}
                />
            )}

            {mode === SAVING && <Status message="saving" /> }
            {mode === DELETE && <Status message="Deleting" /> }
            {mode === CONFIRM && (
                <Confirm
                message="Are you sure you would like to delete?"
                onCancel={() => back()}
                onConfirm={deleteInterview}
                />
            )}
            {mode === EDIT && (
                <Form
                interviewers={props.interviewers}
                onCancel={() => back()}
                onSave={save}
                name={interview.student}
                interviewer={props.interview.interviewer.id}
                />
            )}
            {mode === ERROR_SAVE && (
                <Error message="Could not save appointment" onClose={() => back()} />
            )}
            {mode === ERROR_DELETE && (
                <Error message="Could not delete appointment" onClose={() => back()} />
            )}
            
        </article>
    );
};
