import amqp from 'amqplib/callback_api'
import { entryPoint, port, url } from '../us_streamchat/rooms/server';
import { generalRequest } from '../utilities';

const URL = `http://${url}:${port}/${entryPoint}`;

const host = "us_chat_mq"
const q = "messages" 

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

        channel.assertQueue(q, {
            durable: false
        });

        channel.consume(q, async function (msg) {
            try{
                let data = JSON.parse(msg.content.toString());
                const {id, ...messageRoom} = data;
                await generalRequest(`${URL}/${data.id}/message`, 'POST', messageRoom);
            } catch(error2) {
                console.log(error2)
            }
            // console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });
    });
});