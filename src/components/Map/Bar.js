import React from 'react';
import Slider from '@material-ui/core/Slider';
const timestamps = [{"device-id": "110", "event": "unlocked no keycard", "time": "1578153300"}, {"device-id": "110", "event": "door closed", "time": "1578153307"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578153690"}, {"device-id": "110", "event": "door closed", "time": "1578153697"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578157324"}, {"device-id": "110", "event": "door closed", "time": "1578157344"}, {"device-id": "151", "event": "successful keycard unlock", "time": "1578158607"}, {"device-id": "151", "event": "door closed", "time": "1578158610"}, {"device-id": "151", "event": "unlocked no keycard", "time": "1578164460"}, {"device-id": "151", "event": "door closed", "time": "1578164467"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578166800"}, {"device-id": "110", "event": "door closed", "time": "1578166807"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578169800"}, {"device-id": "110", "event": "door closed", "time": "1578169807"}, {"device-id": "110", "event": "successful keycard unlock", "time": "1578170190"}, {"device-id": "110", "event": "door closed", "time": "1578170197"}, {"device-id": "110", "event": "unlocked no keycard", "time": "1578177000"}, {"device-id": "110", "event": "door closed", "time": "1578177022"}, {"device-id": "155", "event": "successful keycard unlock", "time": "1578184308"}, {"device-id": "155", "event": "door closed", "time": "1578184312"}, {"device-id": "155", "event": "unlocked no keycard", "time": "1578187842"}, {"device-id": "155", "event": "door closed", "time": "1578187847"}, {"device-id": "150", "event": "unlocked no keycard", "time": "1578187853"}, {"device-id": "150", "event": "door closed", "time": "1578187855"}]
const currTime = 0;
function Bar()  {
    return (
        <div className="slider">
            <Slider value={value} onChange={handleInputChange} aria-labelledby="continuous-slider" />
        </div>
    )
}
const handleInputChange = event => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };
function valueLabelFormat(value) {
    return marks.findIndex(mark => mark.value === value) + 1;
}
export default Bar;