import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import axios from "axios";

function App() {
  const [url, setUrl] = useState();
  const [shortUrl, setShortUrl] = useState();
  const handleCLick = () => {
    axios
      .post("http://localhost:4000/url", {
        url
      })
      .then((res) => {
        setShortUrl("http://localhost:4000/" + res.data.id);
      });
  };
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid item>
        <TextField
          id="outlined-basic"
          label="URL"
          placeholder="Enter any URL"
          variant="outlined"
          margin="dense"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={handleCLick}>
          Shorten
        </Button>
      </Grid>
      <Grid container direction="row" xs={4}>
        <Grid item xs={11}>
          <TextField
            disabled
            id="outlined-basic"
            label="short Url"
            defaultValue={shortUrl ?? "shortened url"}
            variant="outlined"
            margin="dense"
            fullWidth></TextField>
        </Grid>
        <Grid item xs={1}>
          <Button
            style={{ height: 40, marginTop: 15 }}
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
            }}>
            <ContentCopyIcon />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
