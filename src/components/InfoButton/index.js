import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './style.css';

export default function InfoButton() {
    return (
        <div className="infoButtonContainer">
            <IconButton aria-label="information" size="small">
                <InfoIcon />
            </IconButton>
        </div>
    );
}