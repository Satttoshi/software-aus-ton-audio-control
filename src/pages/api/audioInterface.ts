import type { NextApiRequest, NextApiResponse } from 'next';
import net from 'net';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { ip, group_id, fx_id, label } = req.body;

    const client = net.connect({ port: 6881, host: ip }, function () {
      if (group_id) {
        client.write(`group_${group_id}`);
        client.end();
        res.status(200).send(`Playing Atmo "${label}" (Group_Id: ${group_id})`);
      }

      if (fx_id) {
        client.write(`fx_${fx_id}`);
        client.end();
        res.status(200).send(`Started Fx "${label}" (Fx_Id: ${fx_id})`);
      }
    });

    client.on('error', function (err) {
      res.status(500).send('ERROR_ON_CONNECTING');
    });
  } else {
    res.status(404).send('Page Not Found');
  }
};

export default handler;
