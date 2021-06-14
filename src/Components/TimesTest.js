import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Firebase
import firebase from ".././firebase";
export default function TimesTest() {
  // const [startDate, setStartDate] = useState(new Date());
  const [DateTime, setDateTime] = useState();
  const [posts, setPosts] = useState([]);

  // for firebase
  // const [date, setDate] = useState("");
  // add to database
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("datelist")
        .add({
          // Date:firebase.firestore.Timestamp.fromDate(date.toString()),
          CreateDate: firebase.firestore.Timestamp.fromDate(new Date()),
        });
      // .then(history.push("/"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("datelist").get();
      setPosts(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          sec: doc.data().seconds,
        }))
      );
      data.docs.map((d) => console.log(d.data()));
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>React - Firebase TimeStamp - Dayjs --Test</h1>
      <div>
        <hr></hr>
        Display current time - dayjs
        <p>{dayjs().format()}</p>
        <hr></hr>
      </div>
      <div>
        <hr></hr>
        Display time with format - day js | Y-M-D-H:m
        <p>{dayjs("2021-06-01-21:30").format("YYYY-MM-DDTHH:mm")}</p>
        <hr></hr>
      </div>
      <div>
        {/* <DatePicker selected={startdate} onChange={(date) => setStartDate(date)} /> */}
      </div>
      <div>
        <p>Material UI date time selector</p>
        <TextField
          id="datetime-local"
          label="Next appointment"
          type="datetime-local"
          defaultValue={dayjs("2021-06-01-21:30").format("YYYY-MM-DDTHH:mm")}
          // className={classes.textField}
          onChange={(e) => setDateTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <p>Display DateTime : {DateTime}</p>
        <p>
          Using Dayjs to DateTime : {dayjs(DateTime).format("YYYY-MM-DD-HH:mm")}
        </p>
        <p>Using Dayjs to Milliseconds : {dayjs(DateTime).valueOf()}</p>
        <hr></hr>
      </div>
      <div>
        <h2>Firebase </h2>
        <p>Add Current Date Time to firestore</p>
        <Button variant="primary" onClick={() => sendData()}>
          Submit
        </Button>
        <hr></hr>
      </div>
      <div>
        <h2>Fetch Data</h2>
        {/* <p>{posts.CreateDate}</p>
         */}
        {posts.map((post) => (
          <ul>
            <li>
              {post.CreateDate.toDate().toString().substr(11, 13)}|Origin
              <br></br>
              {dayjs(post.CreateDate.toDate().toString().substr(11, 13)).format(
                "YYYY-MM-DDTHH:mm"
              )}|Dayjs
              <br></br>
              <TextField
                id="datetime-local"
                label="Next appointment"
                type="datetime-local"
                defaultValue={dayjs(post.CreateDate.toDate().toString().substr(11, 13)).format(
                  "YYYY-MM-DDTHH:mm"
                )}
                // className={classes.textField}
                onChange={(e) => setDateTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              /> | Using Material UI
            </li>
          </ul>
        ))}
        {/* {Date(1318781876)} */}
      </div>
    </div>
  );
}
//Save current timestamp
//Extract timestamp from firestore
//Convert firebase timestamp to readble format
//Save others time formats
