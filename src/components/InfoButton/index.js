import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import './style.css';

export default function InfoButton({ onClick }) {
    return (
        <div className="infoButtonContainer">
            <IconButton 
                aria-label="information" 
                size="small"
                onClick={ onClick }
            >
                <InfoIcon />
            </IconButton>
        </div>
    );
}