
import { HomeRepairServiceOutlined } from '@mui/icons-material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import  Button  from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home'
import { pink } from '@mui/material/colors';
import  Typography  from '@mui/material/Typography';
function App() {
  return (
    <>
      <div>trungbq</div>
      <Typography variant='body2' color='text.secondary'> theme custom</Typography>
      <AcUnitIcon/>
      <AddReactionIcon/>
      <Button variant='contained'>Hello world</Button>

      <HomeIcon />

      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
