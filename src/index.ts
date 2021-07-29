import { Gpio as GPIO } from "onoff"
import { blink } from "./util";

const LED1 = new GPIO(17, 'out')

const blinker = blink(250, LED1)
setTimeout(() => clearInterval(blinker), 5000)