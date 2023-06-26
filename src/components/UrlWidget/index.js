import './style.css';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function UrlWidget() {
    const currentUrl = window.location.href;

    const handleClick = e => {
        e.preventDefault();
        navigator.clipboard.writeText(currentUrl);
    };

    return (
        <div className="urlWidget">
            <p>Invite a friend with this url.</p>
            <p>
                { currentUrl }
                <IconButton 
                    aria-label="copy" 
                    color="primary"
                    onClick={ handleClick }
                >
                    <ContentCopyIcon />
                </IconButton>                
            </p>
        </div>
    );
}