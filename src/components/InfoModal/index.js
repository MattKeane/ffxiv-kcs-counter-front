import Card from '@mui/material/Card';
import './style.css';

export default function InfoModal() {
    return (
        <Card className="dialog" id="infoModal">
            <h3>Welcome to TeamSpawn!</h3>
            <p>TeamSpawn is a tool to help you keep track of the mobs you kill while attempting to spawn S rank hunts in Final Fantasy XIV. Unlike other mob trackers, TeamSpawn allows you to share your progress with other players. As you increment the mobs you have killed, TeamSpawn will automatically other users' mob counts!</p>
            <h2>Starting a New Spawn Attempt</h2>
            <p>To begin a new spawn attempt in TeamSpawn, simply select the S rank you wish to spawn from the home screen. You will then be redirected to a new page with all the mobs required for that spawn. You can invite other players to join your spawn attempt by sending them the url for your spawn attempt. Spawn attempts will remain active for 24 hours, automatically saving your progress if you navigate away from the page.</p>
            <h2>Joining a Spawn Attempt in Progress</h2>
            <p>To join a spawn attempt that has already started, either paste the url for that spawn attempt into your browser, or enter the unique four letter room code into the dialog on TeamSpawn's homepage.</p>
            <h2>Using TeamSpawn</h2>
            <p>Using TeamSpawn is simple. You can increment or decrement the number of mobs you've killed either individually or by lap. The number of mobs killed per lap is customizable. Updating your counts will automatically update the counts of other users in the same spawn attempt!</p>
        </Card>
    )
};