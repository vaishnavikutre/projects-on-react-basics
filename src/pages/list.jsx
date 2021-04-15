import React,{useState} from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export default function InteractiveList(props) {

  const [inputFields,setInputField] = useState([])
      const handleAddFields =()=>{
        setInputField([...inputFields, { firstName: ""}])
      }
      
      const handleRemoveFields = (index)=>{
        const values = [...inputFields];
        values.splice(index, 1);
        setInputField(values);
      }
  return (
    <div>
      <center>
      <IconButton color="primary" aria-label="add to shopping cart" style={{marginLeft:800}} onClick={()=> handleAddFields()}>
        <AddShoppingCartIcon/>
        </IconButton>
        { inputFields.map((inputField, index) => (
        <div key={index}>
         <Grid item xs={12} md={6}>
          <div>
            <List>
              <ListItem>
                  <ListItemText
                    primary="Mango"
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=> handleRemoveFields(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              </List>
          </div>
        </Grid>
        </div>
       ))}
        </center> 
         
    </div>
  );
}
