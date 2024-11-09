

 const generateDeviceId = () => {
    const device_id = crypto.randomUUID()
    return device_id
}

export {
    generateDeviceId
}