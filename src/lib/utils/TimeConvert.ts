const TimeFromNowToProvidedDate = (date: Date) => {

    const now = new Date();
    const timeDiff = now.getTime() - date.getTime();

    if(timeDiff < 60000) {
        return "Just now";
    }

    const minutes = Math.floor(timeDiff / 60000);
    if(minutes < 60) {
        return `${minutes}m`;
    }

    const hours = Math.floor(minutes / 60);
    if(hours < 24) {
        return `${hours}h`;
    }

    const days = Math.floor(hours / 24);
    if(days < 7) {
        return `${days}d`;
    }

    const weeks = Math.floor(days / 7);
    return `${weeks}w`;
}

export { TimeFromNowToProvidedDate };