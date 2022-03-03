import { execa } from "execa";
const printAline = () => {
    return new Promise(async () => {
        const { stdout } = await execa('echo', ['unicorns']);
        console.log(stdout);
    });
};
export default printAline;
