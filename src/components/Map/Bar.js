import React from 'react';
import Slider from '@material-ui/core/Slider';
import moment from 'moment';
import { AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
const timestamps = [{"device-id": "110", "event": "unlocked no keycard", "time": "1578153300"}, {"device-id": "110", "event": "door closed", "time": "1578153307"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578153690"}, {"device-id": "110", "event": "door closed", "time": "1578153697"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578157324"}, {"device-id": "110", "event": "door closed", "time": "1578157344"}, {"device-id": "151", "event": "successful keycard unlock", "time": "1578158607"}, {"device-id": "151", "event": "door closed", "time": "1578158610"}, {"device-id": "151", "event": "unlocked no keycard", "time": "1578164460"}, {"device-id": "151", "event": "door closed", "time": "1578164467"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578166800"}, {"device-id": "110", "event": "door closed", "time": "1578166807"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578169800"}, {"device-id": "110", "event": "door closed", "time": "1578169807"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578170190"}, {"device-id": "110", "event": "door closed", "time": "1578170197"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578177000"}, {"device-id": "110", "event": "door closed", "time": "1578177022"}, {"device-id": "155", "event": "successful keycard unlock", "time": "1578184308"}, {"device-id": "155", "event": "door closed", "time": "1578184312"}, {"device-id": "155", "event": "unlocked no keycard", "time": "1578187842"}, {"device-id": "155", "event": "door closed", "time": "1578187847"}, {"device-id": "150", "event": "unlocked no keycard", "time": "1578187853"}, {"device-id": "150", "event": "door closed", "time": "1578187855"}]
// const currTime = 0;

function formatTime(epoch){
    var timestamp = 1293683278;
    var date = new Date(timestamp * 1000);
    return " "
    
}

const handleSliderChange = event => {
    console.log()
}

// function filterStamps(timestaps){
//     marks = []
//     for( let stamp of timestamps ){
//         let time = stamp["time"];
//         marks.push({
//             value: parseInt(time),
//             label: moment(time).format('LT')
//         })
//     }
//     return marks
// }

function valuetext(value) {
    return moment(value).format('LT');
}
  

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },

  }));

const marks = timestamps.map(x => {
    return {
        value: parseInt(x["time"]),
        label: moment(x["time"]).format('LT')
    }
});
function Bar()  {
    return (
        <div >
          <AppBar className="header-bar" position="absolute" >
                <Slider 
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider-custom"
                    onChange={handleSliderChange.bind(this)}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </AppBar>
        </div>
        
    );
}

export default Bar;