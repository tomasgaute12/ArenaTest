const ethers = require("ethers");

export const mapResult = (result)=>  {
    const map = result.map( a => ({ 
        from: a.args.from , 
        to: a.args.to,
        value: ethers.utils.formatUnits(a.args.value)}));
    return map
}
