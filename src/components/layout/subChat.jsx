import { Grid, StepContext, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import { useEffect } from "react";
const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    maxHeight: 200,
    backgroundColor: "#fff",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: 0,
    },
  },
}));

const SubChat = (selectedUser) => {
  const [fromChat, setFromChat] = useState([
    "Loreum ipsum dolor sit amet , consector",
    "Loreum ipsum dolor sit amet , consector",
  ]);
  const [toChat, setToChat] = useState([
    "Loreum ipsum dolor sit amet , consector",
    "Loreum ipsum dolor sit amet , consector",
  ]);
  const [text ,setText] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setToChat([
        "Loreum ipsum dolor sit amet , consector",
        "Loreum ipsum dolor sit amet , consector",
      ]);
      setFromChat([
        "Loreum ipsum dolor sit amet , consector",
        "Loreum ipsum dolor sit amet , consector",
      ]);
  },[selectedUser]);
  const onSend = () => {
    if(text){
        const chats = toChat;
        chats.push(text);
        setToChat(chats);
        setText('');
    }
  }
  return (
    <>
      <Grid item sm={12} container className={classes.container}>
        <Grid
          sm={12}
          item
          pl={2}
          pr={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          {fromChat.map((text) => (
            <Grid
              sm={6}
              display="flex"
              bgcolor={"#c0c0c0 "}
              key={text}
              mb={1}
              borderRadius="8px"
            >
              <Typography>{text}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid
          sm={12}
          item
          pl={2}
          pr={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          {toChat.map((text) => (
            <Grid
              sm={6}
              display="flex"
              bgcolor={"#c0c0c0 "}
              key={text}
              mb={1}
              borderRadius="8px"
            >
              <Typography>{text}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid sm={12} item display={"flex"} p={2} borderTop="1px solid #999" alignContent={'center'}>
          <TextField fullWidth style={{ height: "10px" }} size={"small"} placeholder={"Send Message"} onChange={(e) => setText(e.target.value)} value={text}/>
          <SendIcon sx={{marginTop:'10px', marginLeft:'10px'}}onClick={onSend} />
        </Grid>
      </Grid>
    </>
  );
};

export default SubChat;
