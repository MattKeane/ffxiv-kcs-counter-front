import { useState } from 'react';
import './style.css';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function UrlWidget() {
    const [message, setMessage] = useState('Copy share URL');
    const currentUrl = window.location.href;

    const handleClick = e => {
        e.preventDefault();
        navigator.clipboard.writeText(currentUrl);
        setMessage('URL copied to clipboard!');
        setTimeout(() => {
            setMessage('Copy share URL');
        }, 2000);
    };

    return (
        <div className="urlWidget">
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
            <small>{ message }</small>
        </div>
    );
}