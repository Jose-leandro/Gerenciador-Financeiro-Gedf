
export async function conectionWithApi(fullPath, firstElement, styles) {
    console.log(fullPath)

    console.log("Received fileFullPath: ", fullPath);

    const response = await fetch('http://localhost:7000/api/update-sass', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullPath, firstElement, styles }),
    });

    if (!response.ok) {
        throw new Error('Failed to update styles');
    }

    return await response.json();
}
