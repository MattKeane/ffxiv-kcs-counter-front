export async function createRoom(sRank) {
    const roomResponse = await fetch('/room/new', {
        method: 'POST',
        body: JSON.stringify({sRank}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const roomJson = await roomResponse.json();
    return roomJson;
}