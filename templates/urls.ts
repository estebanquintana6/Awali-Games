// "urls.ts"
import { createTransport } from 'nodemailer';
import { template } from './templates';
import * as Router from 'koa-router';
import parse = require ('koa-body');
import { Context } from 'koa';

const Transport = createTransport({
	'host': 'mail.privateemail.com',
    'port': 465,
    'secure': true,
    'pool': true,
    'auth': {
        'user': 'admin@awaligames.com',
        'pass': 'b6Q750)s00%7T4W98x'
    }
});

export default function urls(router: Router): Router {

	router.get('/', template('index'));
	router.get('/drunken-cards/', template('drunkencards'));
	router.post('/contact/', parse(), function (ctx: Context): Promise<any> {

		let body = ((ctx.request as any).body) as any;
		let data = {
			'from': '"Administrator" <admin@awaligames.com>',
			'to': [ 'admin@awaligames.com' ],
			'subject': `Awali Site - Nuevo mensaje de "${body.email_address}"`,
			'text': `Nuevo mensaje de contacto
			${body.name} ha enviado un mensaje:
			
			${body.content}
			
			Teléfono: ${body.phone}
			Correo electrónico: ${body.email_address}
			`,
			'html': `<div style="width: 100%">
				<p style="text-align: center; width: 100%">
					<img src="http://awaligames.com/static/images/logo.svg" alt="Logotipo Awali Games" style="width: 128px" />
				</p>
				<h2>Nuevo mensaje de contacto</h2>
				<p style="width: 100%"><b>${body.name}</b> ha enviado un mensaje:</p>
				<p style="width: 100%"><blockquote style="width: 100%; padding-left: 5px; border-left: 4px solid #CDCDCD; margin-left: 15px">${body.content}</blockquote></p>
				<div style="width: 100%">
					<div style="width: 50%"><b>Tel&eacute;fono:</b> ${body.phone}</div>
					<div style="width: 50%"><b>Correo electr&oacute;nico:</b> ${body.email_address}</div>
				</div>
			</div>`
		};

		// Parse content and send mail to "contacto@awaligames.com", return if this succeeded
		ctx.response.type = 'application/json';
		ctx.response.charset = 'UTF-8';

		return Transport.sendMail(data).then(() => {

			ctx.body = JSON.stringify({ 'status': 201 });
			ctx.response.status = 201;
		}).catch((error: any) => {

			ctx.body = JSON.stringify({
				'status': 409,
				'cause': error.toString()
			});
			ctx.response.status = 409;
		});
	});

	return router;

};
