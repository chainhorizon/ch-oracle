import { SkyServer } from "skyserver";

new SkyServer({
    httpPort: 8530
    webPort: 8531,
}, (client: AbstractSocketClient) => {

});
