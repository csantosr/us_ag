import amqp from 'amqplib/callback_api'
import { hls_entryPoint, hls_port, hls_url } from '../us_stream/server';
import { generalRequest } from '../utilities';

const HLS_URL = `http://${hls_url}:${hls_port}/${hls_entryPoint}`;

const host = "us_notification_mq"
const NTF_QUEUE = "notifications" 

amqp.connect(`amqp://${host}`, function (error0, connection) {
    if (error0) {
        console.log(error0);
        // throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            console.log(error1);
            // throw error1;
        }

        channel.assertQueue(NTF_QUEUE, {
            durable: false
        });

        channel.consume(NTF_QUEUE, async function (msg) {
            try{
                console.log(" [x] Received %s", msg.content.toString());
                let data = JSON.parse(msg.content.toString());
                await generalRequest(`${HLS_URL}/`, 'POST', {name: data.userid, state: data.state})
            } catch(error2) {
                console.log(error2)
            }
            // console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});