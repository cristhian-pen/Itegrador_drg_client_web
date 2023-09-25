import api from '../Services/API/index';
const date = new Date();

const activatedLogs = () => {
    const positiveMessage = 'Aplicação iniciada em: ' + date;
    api.post(`/logs/${positiveMessage}`);
}

const deactivateLogs = () => {
    const negativeMessage = 'Aplicação pausada em: ' + date;
    api.post(`/logs/${negativeMessage}`);
}

const controlDate = () => {

    const data = new Date().getHours() + ':' + new Date().getUTCMinutes();

    if (data === '23:59') {
        api.get('/integra')
            .then(res => {
                if (res.status === 200) {
                    let message = 'Aplicação Integrada automaticamente em: ' + date;
                    api.post(`/logs/${message}`);
                }
            })
            .catch(e => {
                let failMessage = 'Integração falhou em: ' + date + ' ' + e.message
                api.post(`/logs/${failMessage}`);
            })
    }
}

export { activatedLogs, deactivateLogs, controlDate };