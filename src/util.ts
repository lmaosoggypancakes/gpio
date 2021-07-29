import { BinaryValue, Gpio as GPIO} from "onoff"
const opposite = (state: BinaryValue) => {
    if (state === 0) {
        return 1
    }
    else return 0;
}
export const blink = (interval: number, pin: GPIO) => {
    return setInterval(() => {
        pin.writeSync(opposite(pin.readSync()))
    }, interval)
}


