export const getRandomNumber = () => {
    return (Math.floor(Math.random() * 10));
}

export const ImageGenerator = (): string => {
    return `https://source.unsplash.com/random?sig=${getRandomNumber()}`;
}

export const RandomFromArray = (dataArray: any[]) => {
    const random = Math.floor(Math.random() * dataArray.length);
    return dataArray[random]
}

const addZero = (num: number) => num < 10 ? `0${num}` : num;

export const TimeToDateString = (time: number) => {
    const cDate = new Date(time);
    return `${addZero(cDate.getDate())}-${addZero(cDate.getMonth() + 1)}-${cDate.getFullYear()}`
}