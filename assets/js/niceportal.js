class NicePortal{
	constructor(){
	    this.config = new Config();
		this.server = this.config.server;
		this.user_id = this.config.user_id;
		this.router_id = this.config.router_id;
		this.clear_session = false;
	}

	// get user info
	async getData(path){
		return new Promise(resolve => {
			$.ajax({
				type: 'POST',
				url: this.server + '/ajax/' + path,
				data: JSON.stringify({
					user_id: this.user_id,
					router_id: this.router_id
				}),
				success: (result) => { resolve(result); },
				error: (err) => { resolve(err); }
			});
		});
	}
	
	// create order voucher
	async createOrder(params){
		return new Promise(resolve => {
			$.ajax({
				type: 'POST',
				url: this.server + '/ajax/checkout',
				data: JSON.stringify({
					user_id: this.user_id,
					router_id: this.router_id,
					method: params.method,
					profile_id: params.profile_id,
					name: params.name,
					phone: params.phone,
					return_url: params.return_url
				}),
				success: (result) => { resolve(result); },
				error: (err) => { resolve(err); }
			});
		});
	}

	// get transaction history
	async getTransaction(phone){

	}
	
	// clear action session
	async clearSession(username){
		return new Promise(resolve => {
			$.ajax({
				type: 'POST',
				url: this.server + '/ajax/session',
				data: JSON.stringify({
					user_id: this.user_id,
					router_id: this.router_id,
					username: username
				}),
				success: (result) => { resolve(result); },
				error: (err) => { resolve(err); }
			});
		});
	}

	number_format(number){return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");}
}