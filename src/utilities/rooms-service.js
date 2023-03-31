export async function createRoom(sRank) {
    console.log(sRank);
    const roomResponse = await fetch('/room/new', {
        method: 'POST',
        body: JSON.stringify(sRank),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const roomJson = await roomResponse.json();
    console.log(roomJson);
}