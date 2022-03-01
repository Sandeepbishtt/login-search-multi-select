import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { TextField, ListSubheader, Button } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 10.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
export default function CustomSelect(props) {
  const [personName, setPersonName] = React.useState([]);
  const [searchName, setSearchName] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
    setSearchName("");
  };

  const [searchedData, setSearchedData] = React.useState([]);
  const [checkSearch, setCheckSearch] = React.useState(false);
  const searchHandler = () => {
    if (searchName === "") {
      setCheckSearch(false);
    } else {
      const val = props.options.filter((val) =>
        val.title.toLowerCase().includes(searchName.toLowerCase())
      );
      setSearchedData(val);
      setCheckSearch(true);
    }
  };
  React.useMemo(() => {
    searchHandler();
  }, [searchName]);

  React.useEffect(() =>{
if(personName[0]===undefined && personName.length ===1){
  setPersonName([])
}
  },[personName])

  return (
    <div>
      <FormControl sx={{ m: 1, width: 400 }}>
        <InputLabel id="demo-multiple-checkbox-label">Select</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple={props.multiChecked}
          value={personName ?? ""}
          onChange={handleChange}
          input={<OutlinedInput label="Select" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {props.checked && (
            <ListSubheader>
              <form onChange={searchHandler}>
                <TextField
                  value={searchName ?? ""}
                  size="small"
                  autoFocus
                  placeholder="Type to search..."
                  fullWidth
                  onChange={(e) => setSearchName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key !== "Escape") {
                      e.stopPropagation();
                    }
                  }}
                />
              </form>
            </ListSubheader>
          )}
          {(checkSearch ? searchedData : props.options).map((val) => (
            <MenuItem key={val.id} value={val.title}>
              <Checkbox
                checked={
                  personName !== undefined && personName.indexOf(val.title) > -1
                }
              />
              <ListItemText primary={val.title} />
            </MenuItem>
          ))}
          {props.multiChecked &&
            (personName[0] === undefined && personName.length === 1
              ? null
              : personName.length > 0 && (
                  <div>
                    <Button type="button" variant="contained" color="primary">
                      Submit
                    </Button>
                    <Button type="button" variant="contained" color="secondary">
                      Clear
                    </Button>
                  </div>
                ))}
        </Select>
      </FormControl>
    </div>
  );
}
