export class DataFormatter {
    constructor(){

    }

    static formatBytes(input:number, decimals:number = 2):string {
        if (!+input) return '0 Bytes'
    
        const k = 1024
        const dm = decimals < 0 ? 0 : decimals
        const sizes = ['Bytes', 'KH', 'MH', 'GH', 'TH', 'PH', 'EH', 'ZH', 'YH']
    
        const i = Math.floor(Math.log(input) / Math.log(k))
        console.log(`${parseFloat((input / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`);
        return `${parseFloat((input / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
    }
}