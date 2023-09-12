import axios from "axios";
const date = new Date();

const activatedLogs = () => {
    const positiveMessage = 'Aplicação iniciada em: ' + date;
    axios.post(`http://localhost:3002/logs/${positiveMessage}`);
}

const deactivateLogs = () => {
    //const dataLog = new Date().getDate() + "/" + new Date().getMonth() + "/" + new Date().getFullYear() + "as: " + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds();
    const negativeMessage = 'Aplicação pausada em: ' + date;
    axios.post(`http://localhost:3002/logs/${negativeMessage}`);
}

const controlDate = () => {

    const data = new Date().getHours() + ':' + new Date().getUTCMinutes();

    if (data === '23:59') {
        axios.get('http://localhost:3002/integra')
            .then(res => {
                if (res.status === 200) {
                    let message = 'Aplicação Integrada automaticamente em: ' + date;
                    axios.post(`http://localhost:3002/logs/${message}`);
                }
            })
            .catch(e => {
                let failMessage = 'Integração falhou em: ' + date + ' ' + e.message
                axios.post(`http://localhost:3002/logs/${failMessage}`);
            })
    }
}

export { activatedLogs, deactivateLogs, controlDate };