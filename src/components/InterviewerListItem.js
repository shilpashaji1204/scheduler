import React from "react";
import classNames from "classnames";
import 'components/InterviewerListItem.scss';


export default function InterviewerListItem(props) {

    let interviewerStyles = classNames("interviewers__items",{
        "interviewers__item--selected": props.selected,
    });

    let imageStyles = classNames("interviewer__item-image",{
        "interviewers__item--selected-image": props.selected,
    });

    return(
<li 
className= {interviewerStyles} onClick={props.setInterviewer}
>
  <img
    className={imageStyles}
    src={props.avatar}
    alt={props.name}
  />
  {props.selected && props.name}
</li>
  )
}