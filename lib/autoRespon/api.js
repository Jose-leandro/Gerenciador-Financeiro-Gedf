
export async function conectionWithApi(supportElem, positionElem, element, sizeOfWidonwsBroswer) {
    console.log(fullPath)

    console.log("Received fileFullPath: ", fullPath);

    const response = await fetch('http://localhost:7000/api/element-visibility', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ element, sizeOfWidonwsBroswer }),
    });

    if (!response.ok) {
        throw new Error('Failed to update styles');
    }

    return await response.json();
}
